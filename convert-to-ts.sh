#!/bin/bash

# Script to batch rename .js and .jsx files to .ts and .tsx

# Function to rename files with proper extension
rename_files() {
  local dir=$1
  local from_ext=$2
  local to_ext=$3

  find "$dir" -name "*.$from_ext" -type f | while read file; do
    new_file="${file%.$from_ext}.$to_ext"
    git mv "$file" "$new_file" 2>/dev/null || mv "$file" "$new_file"
    echo "Renamed: $file -> $new_file"
  done
}

echo "=== Converting data files ==="
rename_files "./data" "js" "ts"

echo -e "\n=== Converting utility files ==="
rename_files "./utlis" "js" "ts"

echo -e "\n=== Converting context files ==="
rename_files "./context" "jsx" "tsx"

echo -e "\n=== Converting reducer files ==="
find "./components/reducer" -name "*.js" -type f | while read file; do
  new_file="${file%.js}.ts"
  git mv "$file" "$new_file" 2>/dev/null || mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
done

echo -e "\n=== Converting component .jsx files ==="
find "./components" -name "*.jsx" -type f | while read file; do
  new_file="${file%.jsx}.tsx"
  git mv "$file" "$new_file" 2>/dev/null || mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
done

echo -e "\n=== Converting app layout.js ==="
if [ -f "./app/layout.js" ]; then
  git mv "./app/layout.js" "./app/layout.tsx" 2>/dev/null || mv "./app/layout.js" "./app/layout.tsx"
  echo "Renamed: ./app/layout.js -> ./app/layout.tsx"
fi

echo -e "\n=== Converting app .jsx files ==="
find "./app" -name "*.jsx" -type f | while read file; do
  new_file="${file%.jsx}.tsx"
  git mv "$file" "$new_file" 2>/dev/null || mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
done

echo -e "\n=== Conversion complete! ==="
echo "Total .ts files:"
find . -name "*.ts" -not -path "./node_modules/*" -not -path "./.next/*" | wc -l
echo "Total .tsx files:"
find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./.next/*" | wc -l
