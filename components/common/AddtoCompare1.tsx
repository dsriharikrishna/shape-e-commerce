"use client";
import { useContextElement, useUiElement } from "@/context/Context";
import type { Product } from "@/types";

interface AddToCompareProps {
  product: Product;
  parentClass?: string;
}

export default function AddtoCompare1({
  product,
  parentClass = "rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation rbt-compare-bottom-sidenav-activation",
}: AddToCompareProps) {
  const { addToCompareItem, isAddedToCompareItem } = useContextElement();
  const { openComparePanel } = useUiElement();

  return (
    <a
      className={parentClass}
      href="#"
      onClick={() => {
        if (product.id && !isAddedToCompareItem(product.id)) {
          addToCompareItem(product.id);
          openComparePanel();
        }
      }}
    >
      <i className="fa-regular fa-file-plus-minus" />
      {isAddedToCompareItem(product.id) ? "Already Compared" : "Compare"}
    </a>
  );
}
