"use client";

import { cn } from "@/lib/utils";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Ensure rc-slider base styles are included

const priceRanges = [
  { id: 1, label: "Under $25", min: 0, max: 24, count: 9 },
  { id: 2, label: "$25 to $50", min: 25, max: 50, count: 12 },
  { id: 3, label: "$50 to $100", min: 50, max: 100, count: 67 },
  { id: 4, label: "$100 to $200", min: 100, max: 200, count: 30 },
  { id: 5, label: "$200 & Above", min: 200, max: Infinity, count: 89 },
];

import { Product } from "@/shared/types";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

export default function FilterByPrice({
  priceRange,
  onChange,
  getFilterCount,
}: {
  priceRange: [number, number];
  onChange: (value: [number, number]) => void;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const handleRangeChange = (range: number | number[]) => {
    const arr = Array.isArray(range) ? range : [range, range];
    onChange([arr[0], arr[1]] as [number, number]);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    handleRangeChange([value, priceRange[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    handleRangeChange([priceRange[0], value]);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Price Range Checkboxes */}
      <ul className="flex flex-col gap-3">
        {priceRanges.map((range) => {
          const isChecked =
            priceRange[0] === range.min && priceRange[1] === range.max;
          const inputId = `price-checkbox-${range.id}`;

          return (
            <li
              key={range.id}
              className="flex items-center"
            >
              <input
                id={inputId}
                type="checkbox"
                name={inputId}
                className="peer h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                checked={isChecked}
                onChange={() => handleRangeChange([range.min, range.max])}
              />
              <Label 
                htmlFor={inputId}
                className={cn(
                  "ml-3 flex flex-1 items-center justify-between text-sm cursor-pointer select-none transition-colors",
                  isChecked ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                )}
              >
                <span>{range.label}</span>
                <span className="text-gray-400 text-xs ml-2">
                  (
                  {getFilterCount(
                    (product) =>
                      product.price >= range.min && product.price <= range.max
                  )}
                  )
                </span>
              </Label>
            </li>
          );
        })}
      </ul>

      {/* Slider Range */}
      <div className="flex flex-col gap-4 mt-2 px-1">
        <Slider
          range
          value={priceRange}
          onChange={handleRangeChange}
          max={1000}
          min={0}
          step={15}
          className="text-primary"
          trackStyle={[{ backgroundColor: 'currentColor' }]}
          handleStyle={[
            { borderColor: 'currentColor', backgroundColor: 'white', opacity: 1 },
            { borderColor: 'currentColor', backgroundColor: 'white', opacity: 1 }
          ]}
          railStyle={{ backgroundColor: '#e5e7eb' }}
        />
        <div className="flex justify-between items-center px-1">
          <span className="text-sm font-medium text-gray-900">${priceRange[0]}</span>
          <span className="text-sm font-medium text-gray-900">${priceRange[1]}</span>
        </div>
      </div>

      {/* Manual Input Group */}
      <div className="flex items-center gap-2 mt-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
          <Input
            type="number"
            min={0}
            placeholder="Min"
            value={priceRange[0] === 0 ? '' : priceRange[0]}
            onChange={handleMinChange}
            className="pl-7 bg-gray-50 border-gray-200"
          />
        </div>
        <span className="text-gray-400">-</span>
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
          <Input
            type="number"
            min={0}
            placeholder="Max"
            value={priceRange[1] === Infinity ? '' : priceRange[1]}
            onChange={handleMaxChange}
            className="pl-7 bg-gray-50 border-gray-200"
          />
        </div>
        <Button type="button" variant="default" size="sm" className="px-4">
          Go
        </Button>
      </div>
    </div>
  );
}
