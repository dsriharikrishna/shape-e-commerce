"use client";

import { useState } from "react";

export default function NavFilterTab() {
  const [selectedGender, setSelectedGender] = useState<"Men" | "Women">(
    "Women"
  );

  return (
    <div className="rbt-product-nav-section rbt-scroll-trigger fade_in animation-order-2">
      <ul className="rbt-product-nav-grp" role="tablist" aria-label="Gender">
        {(["Men", "Women"] as const).map((gender) => (
          <li key={gender} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={selectedGender === gender}
              className={`rbt-product-nav border-0 cursor-pointer font-[inherit]${
                selectedGender === gender ? " active !bg-black !text-white" : ""
              }`}
              onClick={() => setSelectedGender(gender)}
            >
              {gender}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
