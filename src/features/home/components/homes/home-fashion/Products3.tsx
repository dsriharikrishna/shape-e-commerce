"use client";
import { useState } from "react";
import ProductCardVariant from "@/features/products/components/productCards/ProductCardVariant";
import NavEffectTabs from "@/shared/components/common/NavEffectTabs";
import { fashionProducts3 } from "@/shared/data/products/fashion";

const TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "all-time", label: "All Time" },
];

export default function Products3() {
  const [activeTab, setActiveTab] = useState<string>("this-week");

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            <span className="font-bold">Top Selling</span> Items
          </h2>
          <p className="text-gray-500 mb-8">
            Discover our most popular fashion picks, curated from the
            best-selling items this season. From everyday essentials to standout
            statement pieces.
          </p>

          <div className="flex justify-center overflow-x-auto pb-4 hide-scrollbar">
            <NavEffectTabs
              options={TABS}
              active={activeTab}
              setActive={setActiveTab}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fashionProducts3.map((product, i) => (
            <ProductCardVariant product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
