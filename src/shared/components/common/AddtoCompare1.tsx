"use client";
import { useContextElement, useUiElement } from "@/shared/store/Context";
import type { Product } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AddToCompareProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  product: Product;
  parentClass?: string;
  className?: string;
}

export default function AddtoCompare1({
  product,
  parentClass,
  className,
  variant = "outline",
  size = "sm",
  ...props
}: AddToCompareProps) {
  const { addToCompareItem, isAddedToCompareItem } = useContextElement();
  const { openComparePanel } = useUiElement();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("gap-2", parentClass, className)}
      onClick={() => {
        if (product.id && !isAddedToCompareItem(product.id)) {
          addToCompareItem(product.id);
          openComparePanel();
        }
      }}
      {...props}
    >
      <i className="fa-regular fa-file-plus-minus" />
      {isAddedToCompareItem(product.id) ? "Already Compared" : "Compare"}
    </Button>
  );
}
