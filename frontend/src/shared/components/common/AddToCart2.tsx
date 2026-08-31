"use client";

import { useContextElement } from "@/shared/store/Context";
import { Product } from "@/shared/types";

interface AddToCartProps {
  parentClass?: string;
  product: Product;
}

export default function AddToCart2({
  parentClass = "rbt-btn rbt-btn-sm has-left-icon flex-basis-100",
  product,
}: AddToCartProps) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        addProductToCart(product.id);
      }}
      className={parentClass}
      href="#"
    >
      <i className="fa-regular fa-cart-shopping" />{" "}
      {isAddedToCartProducts(product.id) ? "Already Added" : "Add To Cart"}
    </a>
  );
}
