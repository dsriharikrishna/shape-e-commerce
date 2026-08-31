"use client";

import { useContextElement } from "@/shared/store/Context";
import { Product } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AddToWishlistProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  product: Product;
  parentClass?: string;
  className?: string;
}

export default function AddtoWishlist({
  parentClass,
  className,
  variant = "outline",
  size = "icon",
  product,
  ...props
}: AddToWishlistProps) {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(parentClass, className)}
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
      {...props}
    >
      <i className="fa-regular fa-heart" />
    </Button>
  );
}
