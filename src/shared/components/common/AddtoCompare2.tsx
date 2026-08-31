"use client";

import { useContextElement, useUiElement } from "@/shared/store/Context";
import type { Product } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AddToCompareProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  product: Product;
  tooltipDirection?: string;
  parentClass?: string;
  className?: string;
}

export default function AddtoCompare2({
  product,
  tooltipDirection = "left",
  parentClass,
  className,
  variant = "outline",
  size = "icon",
  ...props
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
    <Button
      variant={variant}
      size={size}
      className={cn(parentClass, className, isAddedToCompareItem(product.id) ? "added-compare" : "")}
      suppressHydrationWarning
      data-tooltip="Add to Compare"
      data-tooltip-position={tooltipDirection}
      onClick={(e) => {
        e.preventDefault();
        handleaddToCompareItem();
      }}
      {...props}
    >
      <i className="fa-regular fa-scale-balanced" />
    </Button>
  );
}
