"use client";

import { useContextElement } from "@/context/Context";
import { useState } from "react";
import QuantitySelect from "../common/QuantitySelect";

import { Product } from "@/types";
export default function ProductActionPanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    isAddedToCartProducts,
    updateQuantity,
    addToWishlist,
    isAddedtoWishlist,

    addToCompareItem,
    isAddedToCompareItem,
    quantityInCart,
  } = useContextElement();
  return (
    <>
      {" "}
      <div className="product-btn-grp">
        <div className="rbt-qty-area">
          <QuantitySelect
            quantity={
              quantityInCart(product.id) ? quantityInCart(product.id) : quantity
            }
            setQuantity={(qty) => {
              if (isAddedToCartProducts(product.id)) {
                updateQuantity(product.id, qty);
              } else {
                setQuantity(qty);
              }
            }}
          />
        </div>
        <a
          className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#popup-cartModal"
          onClick={() => addProductToCart(product.id, quantity)}
        >
          <i className="fa-regular fa-cart-shopping" />
          {isAddedToCartProducts(product.id) ? "Already Added" : "Add To Cart"}
        </a>
      </div>
      <div className="prd-btn-grp">
        <a className="rbt-btn d-block text-center" href="#">
          Buy Now
        </a>
      </div>
      <div className="rbt-quick-link-grp ">
        <button
          className="rbt-quick-link"
          data-bs-toggle="modal"
          data-bs-target="#compareReviewModal"
          type="button"
          onClick={() => addToCompareItem(product.id)}
        >
          <i className="fa-sharp fa-regular fa-copy" />
          {isAddedToCompareItem(product.id)
            ? "Already Compared"
            : "Compare Product"}
        </button>
        <button
          className="rbt-quick-link"
          data-bs-toggle="modal"
          data-bs-target="#wishlistModal"
          type="button"
          onClick={() => addToWishlist(product.id)}
        >
          <i className="fa-sharp fa-regular fa-heart" />
          {isAddedtoWishlist(product.id)
            ? "Already Wishlisted"
            : "Add To Wishlist"}
        </button>
        <button
          className="rbt-quick-link"
          data-bs-toggle="modal"
          data-bs-target="#socialShareModal"
          type="button"
        >
          <i className="fa-sharp fa-regular fa-share-nodes" />
          Share
        </button>
      </div>
    </>
  );
}
