"use client";
import { useContextElement, useUiElement } from "@/context/Context";
import { Product } from "@/types";

interface AddToCartProps {
  parentClass?: string;
  product: Product;
}

export default function AddToCart({
  parentClass = "rbt-btn rbt-btn-sm has-left-icon rbt-cart-sidenav-activation",
  product,
}: AddToCartProps) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { openCartSidebar } = useUiElement();
  return (
    <a
      className={parentClass}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        const wasInCart = product.id && isAddedToCartProducts(product.id);
        addProductToCart(product.id);
        if (!wasInCart) openCartSidebar();
      }}
    >
      <i className="fa-regular fa-cart-shopping" />{" "}
      {isAddedToCartProducts(product.id) ? "Already Added" : "Add To Cart"}
    </a>
  );
}
