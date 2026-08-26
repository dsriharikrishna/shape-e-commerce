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
  { id: 9, name: "Denim", count: 0 },
  { id: 10, name: "Knitwear", count: 0 },
];

import { Product } from "@/types";

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
            className={`rbt-check-group ${isChecked ? "active" : ""}`}
          >
            <input
              id={inputId}
              type="checkbox"
              name="category"
              checked={isChecked}
              onChange={() => handleToggle(category.name)}
            />
            <label htmlFor={inputId}>
              <span className="rbt-lable-content">
                <span className="rbt-lable-text">{category.name}</span>
                <span className="rbt-lable-count">
                  (
                  {getFilterCount(
                    (product) =>
                      !!(
                        product.filterCategory?.includes(category.name) ||
                        product.category?.includes(category.name) ||
                        false
                      ),
                  )}
                  )
                </span>
              </span>
            </label>
          </li>
        );
      })}
    </>
  );
}
