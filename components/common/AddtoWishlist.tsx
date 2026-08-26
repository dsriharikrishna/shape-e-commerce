"use client";

import { useContextElement } from "@/context/Context";
import { Product } from "@/types";

interface AddToWishlistProps {
  product: Product;
  parentClass?: string;
}

export default function AddtoWishlist({
  parentClass = "rbt-wishlist-btn rbt-quick-btn tooltips",
  product,
}: AddToWishlistProps) {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <button
      className={parentClass}
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#wishlistModal"
      data-tooltip={` ${
        isAddedtoWishlist(product.id) ? "Already wishlisted" : "Add to wishlist"
      } `}
      data-tooltip-position="left"
      suppressHydrationWarning
      onClick={(e) => {
        e.preventDefault();
        if (product.id) {
          addToWishlist(product.id);
        }
      }}
    >
      <i className="fa-regular fa-heart" />
    </button>
  );
}
