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

import { Product } from "@/types";

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
            className={`rbt-check-group ${isActive ? "active" : ""}`}
          >
            <input
              id={inputId}
              type="checkbox"
              name="brand"
              checked={isActive}
              onChange={() => handleToggle(brand.name)}
            />
            <label htmlFor={inputId}>
              <span className="rbt-lable-content">
                <span className="rbt-lable-text">{brand.name}</span>
              </span>
              <span className="rbt-lable-count">
                (
                {getFilterCount(
                  (product) =>
                    !!(product.filterBrands?.includes(brand.name) ?? false),
                )}
                )
              </span>
            </label>
          </li>
        );
      })}
    </>
  );
}
