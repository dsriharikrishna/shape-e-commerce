"use client";
import { useContextElement, useUiElement } from "@/shared/store/Context";
import { Product } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AddToCartProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  parentClass?: string;
  className?: string;
  product: Product;
}

export default function AddToCart({
  parentClass,
  className,
  variant = "default",
  size = "sm",
  product,
  ...props
}: AddToCartProps) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { openCartSidebar } = useUiElement();
  
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("gap-2", parentClass, className)}
      onClick={(e) => {
        e.preventDefault();
        const wasInCart = product.id && isAddedToCartProducts(product.id);
        addProductToCart(product.id);
        if (!wasInCart) openCartSidebar();
      }}
      {...props}
    >
      <i className="fa-regular fa-cart-shopping" />{" "}
      {isAddedToCartProducts(product.id) ? "Already Added" : "Add To Cart"}
    </Button>
  );
}
