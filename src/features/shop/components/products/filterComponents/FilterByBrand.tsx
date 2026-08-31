"use client";

const brands = [
  { id: 1, name: "RetroVibe" },
  { id: 2, name: "StreetEdge" },
  { id: 3, name: "ComfortCo" },
  { id: 4, name: "DenimCraft" },
  { id: 5, name: "TailorMade" },
  { id: 6, name: "FlexMove" },
"use client";

const brands = [
  { id: 1, name: "RetroVibe" },
  { id: 2, name: "StreetEdge" },
  { id: 3, name: "ComfortCo" },
  { id: 4, name: "DenimCraft" },
  { id: 5, name: "TailorMade" },
  { id: 6, name: "FlexMove" },
  { id: 7, name: "CozyKnits" },
  { id: 8, name: "StepCraft" },
  { id: 9, name: "LeatherCo" },
  { id: 10, name: "BasicLine" },
];

import { cn } from "@/lib/utils";
import { Product } from "@/shared/types";
import { Label } from "@/shared/components/ui/label";

export default function FilterByBrand({
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
      {brands.map((brand) => {
        const isActive = selectedItems.includes(brand.name);
        const inputId = `brand-checkbox-${brand.id}`;

        return (
          <li
            key={brand.id}
            className="flex items-center"
          >
            <input
              id={inputId}
              type="checkbox"
              name="brand"
              className="peer h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              checked={isActive}
              onChange={() => handleToggle(brand.name)}
            />
            <Label 
              htmlFor={inputId}
              className={cn(
                "ml-3 flex flex-1 items-center justify-between text-sm cursor-pointer select-none transition-colors",
                isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
              )}
            >
              <span>{brand.name}</span>
              <span className="text-gray-400 text-xs ml-2">
                (
                {getFilterCount(
                  (product) =>
                    !!(product.filterBrands?.includes(brand.name) ?? false)
                )}
                )
              </span>
            </Label>
          </li>
        );
      })}
    </>
  );
}
