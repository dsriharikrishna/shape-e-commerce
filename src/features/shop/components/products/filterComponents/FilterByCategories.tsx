"use client";

const categories = [
  { id: 1, name: "Vintage Clothing", count: 0 },
  { id: 2, name: "Urban Apparel", count: 0 },
  { id: 3, name: "Casual Wear", count: 0 },
  { id: 4, name: "Formal Wear", count: 0 },
  { id: 5, name: "Activewear", count: 0 },
  { id: 6, name: "Accessories", count: 0 },
  { id: 7, name: "Outerwear", count: 0 },
  { id: 8, name: "Footwear", count: 0 },
"use client";

import { Product } from "@/shared/types";
import { Label } from "@/shared/components/ui/label";
import { cn } from "@/lib/utils";

const categories = [
  { id: 1, name: "Vintage Clothing", count: 0 },
  { id: 2, name: "Urban Apparel", count: 0 },
  { id: 3, name: "Casual Wear", count: 0 },
  { id: 4, name: "Formal Wear", count: 0 },
  { id: 5, name: "Activewear", count: 0 },
  { id: 6, name: "Accessories", count: 0 },
  { id: 7, name: "Outerwear", count: 0 },
  { id: 8, name: "Footwear", count: 0 },
  { id: 9, name: "Denim", count: 0 },
  { id: 10, name: "Knitwear", count: 0 },
];

export default function FilterByCategories({
  selectedItems,
  onChange,
  getFilterCount,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const handleToggle = (name: string) => {
    onChange(name);
  };

  return (
    <>
      {categories.map((category) => {
        const isChecked = selectedItems.includes(category.name);
        const inputId = `category-checkbox-${category.id}`;

        return (
          <li
            key={category.id}
            className="flex items-center"
          >
            <input
              id={inputId}
              type="checkbox"
              name="category"
              className="peer h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              checked={isChecked}
              onChange={() => handleToggle(category.name)}
            />
            <Label 
              htmlFor={inputId}
              className={cn(
                "ml-3 flex flex-1 items-center justify-between text-sm cursor-pointer select-none transition-colors",
                isChecked ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
              )}
            >
              <span>{category.name}</span>
              <span className="text-gray-400 text-xs ml-2">
                ({getFilterCount(
                  (product) =>
                    !!(
                      product.filterCategory?.includes(category.name) ||
                      product.category?.includes(category.name) ||
                      false
                    )
                )})
              </span>
            </Label>
          </li>
        );
      })}
    </>
  );
}
