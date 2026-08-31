"use client";

import { cn } from "@/lib/utils";

const ratings = [
  { id: 1, stars: 4 },
  { id: 2, stars: 3 },
  { id: 3, stars: 2 },
  { id: 4, stars: 1 },
];

export default function FilterByReview({
  selectedItems,
  onChange,
}: {
  selectedItems: number[];
  onChange: (value: number) => void;
}) {
  const handleToggle = (stars: number) => {
    onChange(stars);
  };

  return (
    <>
      {ratings.map((rating) => {
        const isActive = selectedItems.includes(rating.stars);

        return (
          <li key={rating.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleToggle(rating.stars);
              }}
              className={cn(
                "flex items-center w-full text-left p-2 rounded-lg transition-colors",
                isActive ? "bg-primary/5" : "hover:bg-gray-50"
              )}
            >
              <ul className="flex items-center gap-1 m-0 p-0 list-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>
                    <i
                      className={cn(
                        "fa-solid fa-star text-[10px]",
                        i < rating.stars ? "text-yellow-400" : "text-gray-300"
                      )}
                    />
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-600 font-medium ml-2">&amp; Up</span>
            </button>
          </li>
        );
      })}
    </>
  );
}
