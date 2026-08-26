#!/bin/bash

# Fix common TypeScript errors

echo "Fixing layout children props..."
# Fix layout children props
find app -name "layout.tsx" -type f | while read file; do
  if grep -q "{ children }" "$file"; then
    # Add React.ReactNode type import if not present
    if ! grep -q "React.ReactNode" "$file"; then
      sed -i '' 's/export default function.*({ children })/export default function Layout({ children }: { children: React.ReactNode })/' "$file"
      echo "Fixed: $file"
    fi
  fi
done

echo "Fixing dynamic route params..."
# Fix [id] page params
find app -path "*/\[id\]/page.tsx" -type f | while read file; do
  if grep -q "({ params })" "$file"; then
    sed -i '' 's/export default .*function.*({ params })/export default async function Page({ params }: { params: Promise<{ id: string }> })/' "$file"
    # Add await for params
    sed -i '' 's/const { id } = params;/const { id } = await params;/g' "$file"
    sed -i '' 's/const id = params.id/const resolvedParams = await params;\n  const id = resolvedParams.id/g' "$file"
    echo "Fixed: $file"
  fi
done

echo "Done!"
