"use client";

import { useContextElement, useUiElement } from "@/context/Context";
import type { Product } from "@/types";

interface AddToCompareProps {
  product: Product;
  tooltipDirection?: string;
  parentClass?: string;
}

export default function AddtoCompare2({
  product,
  tooltipDirection = "left",
  parentClass = "rbt-compare-btn rbt-quick-btn tooltips",
}: AddToCompareProps) {
  const { addToCompareItem, isAddedToCompareItem } = useContextElement();
  const { showToasterCompare } = useUiElement();
  const handleaddToCompareItem = () => {
    if (product.id && !isAddedToCompareItem(product.id)) {
      addToCompareItem(product.id);
      showToasterCompare();
    }
  };
  return (
    <button
      className={`${parentClass} ${isAddedToCompareItem(product.id) ? "added-compare" : ""}`}
      suppressHydrationWarning
      data-tooltip="Add to Compare"
      data-tooltip-position={tooltipDirection}
      onClick={(e) => {
        e.preventDefault();
        handleaddToCompareItem();
      }}
    >
      <i className="fa-regular fa-scale-balanced" />
    </button>
  );
}
