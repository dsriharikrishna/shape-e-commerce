"use client";

import { useContextElement, useUiElement } from "@/context/Context";
import type { Product } from "@/types";

interface AddToWishlistProps {
  product: Product;
  tooltipDirection?: string;
  parentClass?: string;
}

export default function AddtoWishlist2({
  product,
  tooltipDirection = "left",
  parentClass = "rbt-wishlist-btn rbt-round-btn bg-light-one rbt-top-right--position tooltips",
}: AddToWishlistProps) {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  const { showToasterWishlist } = useUiElement();
  const handleAddToWishlist = () => {
    if (product.id && !isAddedtoWishlist(product.id)) {
      addToWishlist(product.id);
      showToasterWishlist();
    }
  };
  return (
    <button
      className={`${parentClass} ${isAddedtoWishlist(product.id) ? "added-wishlist" : ""}`}
      type="button"
      data-tooltip={`Add to wishlist`}
      data-tooltip-position={tooltipDirection}
      suppressHydrationWarning
      onClick={(e) => {
        e.preventDefault();
        handleAddToWishlist();
      }}
    >
      <i className="fa-regular fa-heart" />
    </button>
  );
}
