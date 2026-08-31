"use client";
import { Dispatch, useState } from "react";
import {
  setPriceRange,
  toggleBrand,
  toggleCategory,
  toggleColor,
  toggleRating,
  toggleService,
} from "@/features/shop/store/reducer/filterActions";
import FilterByCategories from "./filterComponents/FilterByCategories";
import FilterByReview from "./filterComponents/FilterByReview";
import FilterByPrice from "./filterComponents/FilterByPrice";
import FilterByColor from "./filterComponents/FilterByColor";
import FilterByBrand from "./filterComponents/FilterByBrand";
import FilterByService from "./filterComponents/FilterByService";
import { FilterState, FilterAction } from "@/shared/types";
import { Product } from "@/shared/types";
import { Input } from "@/shared/components/ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar({
  state,
  dispatch,
  getFilterCount,
}: {
  state: FilterState;
  dispatch: Dispatch<FilterAction>;
  getFilterCount: (fn: (product: Product) => boolean) => number;
}) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    categories: true,
    reviews: true,
    price: true,
    color: true,
    brand: true,
    promotion: true,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((sections) => ({
      ...sections,
      [sectionId]: !sections[sectionId],
    }));
  };

  const renderSectionHeader = (id: string, title: string) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleSection(id);
      }}
      className="flex w-full items-center justify-between py-3 text-lg font-semibold text-gray-900 border-b border-gray-100 bg-white hover:text-primary transition-colors"
      aria-expanded={openSections[id]}
      aria-controls={`filter-${id}`}
    >
      {title}
      <span className="text-gray-400">
        {openSections[id] ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </span>
    </button>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Categories Widget */}
      <div>
        {renderSectionHeader("categories", "Categories")}
        <div
          id="filter-categories"
          className={cn("pt-4 transition-all duration-300", openSections.categories ? "block" : "hidden")}
        >
          <ul className="flex flex-col gap-3">
            <FilterByCategories
              selectedItems={state.categories}
              getFilterCount={getFilterCount}
              onChange={(value) => toggleCategory(value, dispatch, state.categories)}
            />
          </ul>
        </div>
      </div>

      {/* Customer Reviews Widget */}
      <div>
        {renderSectionHeader("reviews", "Customer Reviews")}
        <div
          id="filter-reviews"
          className={cn("pt-4 transition-all duration-300", openSections.reviews ? "block" : "hidden")}
        >
          <ul className="flex flex-col gap-3">
            <FilterByReview
              selectedItems={state.ratings}
              onChange={(value) => toggleRating(value, dispatch, state.ratings)}
            />
          </ul>
        </div>
      </div>

      {/* Price Widget */}
      <div>
        {renderSectionHeader("price", "Filter by price")}
        <div
          id="filter-price"
          className={cn("pt-6 pb-2 transition-all duration-300", openSections.price ? "block" : "hidden")}
        >
          <FilterByPrice
            getFilterCount={getFilterCount}
            priceRange={state.price}
            onChange={(value) => setPriceRange(value, dispatch)}
          />
        </div>
      </div>

      {/* Color Widget */}
      <div>
        {renderSectionHeader("color", "Filter by color")}
        <div
          id="filter-color"
          className={cn("transition-all duration-300", openSections.color ? "block" : "hidden")}
        >
          <div className="relative my-4">
            <Input
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:border-primary focus:bg-white transition-colors rounded-lg"
              type="text"
              placeholder="Search and Select Color"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <FilterByColor
            getFilterCount={getFilterCount}
            selectedItems={state.colors}
            onChange={(value) => toggleColor(value, dispatch, state.colors)}
          />
        </div>
      </div>

      {/* Brand Widget */}
      <div>
        {renderSectionHeader("brand", "Brand")}
        <div
          id="filter-brand"
          className={cn("pt-4 transition-all duration-300", openSections.brand ? "block" : "hidden")}
        >
          <ul className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            <FilterByBrand
              getFilterCount={getFilterCount}
              selectedItems={state.brands}
              onChange={(value) => toggleBrand(value, dispatch, state.brands)}
            />
          </ul>
        </div>
      </div>

      {/* Promotion & Services Widget */}
      <div>
        {renderSectionHeader("promotion", "Promotion & Services")}
        <div
          id="filter-promotion"
          className={cn("pt-4 transition-all duration-300", openSections.promotion ? "block" : "hidden")}
        >
          <div className="flex flex-col gap-3">
            <FilterByService
              selectedItems={state.services}
              onChange={(value) => toggleService(value, dispatch, state.services)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
