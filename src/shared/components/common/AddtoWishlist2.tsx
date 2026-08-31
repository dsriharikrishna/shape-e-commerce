"use client";

import { useContextElement, useUiElement } from "@/shared/store/Context";
import type { Product } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AddToWishlistProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  product: Product;
  tooltipDirection?: string;
  parentClass?: string;
  className?: string;
}

export default function AddtoWishlist2({
  product,
  tooltipDirection = "left",
  parentClass,
  className,
  variant = "outline",
  size = "icon",
  ...props
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
    <Button
      variant={variant}
      size={size}
      className={cn(parentClass, className, isAddedtoWishlist(product.id) ? "added-wishlist" : "")}
      type="button"
      data-tooltip={`Add to wishlist`}
      data-tooltip-position={tooltipDirection}
      suppressHydrationWarning
      onClick={(e) => {
        e.preventDefault();
        handleAddToWishlist();
      }}
      {...props}
    >
      <i className="fa-regular fa-heart" />
    </Button>
  );
}
