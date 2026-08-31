"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/shared/types";

const colors = [
  { name: "Black", bgClass: "bg-black" },
  { name: "Blue", bgClass: "bg-blue-600" },
  { name: "Brown", bgClass: "bg-amber-900" },
  { name: "Gray", bgClass: "bg-gray-500" },
  { name: "Green", bgClass: "bg-green-600" },
  { name: "Orange", bgClass: "bg-orange-500" },
  { name: "Red", bgClass: "bg-red-600" },
  { name: "Yellow", bgClass: "bg-yellow-400" },
];

export default function FilterByColor({
  selectedItems,
  onChange,
  getFilterCount,
  scrollAble = false,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
  scrollAble?: boolean;
}) {
  const [showMore, setShowMore] = useState(false);
  const visibleColors = showMore || scrollAble ? colors : colors.slice(0, 5);

  const handleToggle = (colorName: string) => {
    onChange(colorName);
  };

  return (
    <div className="flex flex-col">
      <ul className={cn("flex flex-col gap-3", scrollAble ? "max-h-60 overflow-y-auto pr-2 custom-scrollbar" : "")}>
        {visibleColors.map((color) => {
          const isActive = selectedItems.includes(color.name);

          return (
            <li key={color.name} className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle(color.name);
                }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span
                  className={cn(
                    "w-6 h-6 rounded-full shadow-sm ring-2 ring-offset-2 transition-all duration-300",
                    color.bgClass,
                    isActive ? "ring-primary" : "ring-transparent group-hover:ring-gray-300"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-gray-700 group-hover:text-primary"
                  )}
                >
                  {color.name}
                </span>
              </button>

              <span className="text-xs text-gray-400">
                (
                {getFilterCount(
                  (product) =>
                    !!(product.filterColor?.includes(color.name) ?? false)
                )}
                )
              </span>
            </li>
          );
        })}
      </ul>
      {!scrollAble && colors.length > 5 && (
        <div className="mt-4 border-t border-gray-100 pt-3 text-center">
          <button
            type="button"
            className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-200"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
