"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";
export default function WishList() {
  const {
    wishList,
    removeFromWishlist,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    setItems([...allProducts.filter((elm) => wishList.includes(elm.id))]);
  }, [wishList]);
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="wishlistModal"
      tabIndex={-1}
      aria-labelledby="wishlistModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog sm-size modal-dialog-centered">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-bg-color-white rbt-content-trs-portion">
              <div className="rbt-wishlist-modal-content">
                <h5 className="rbt-title rbt-text-bold" id="wishlistModalLabel">
                  Product Wishlist
                </h5>
                <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray pt--0 pb--0 mb--16">
                  <table className="rbt-transparent-table-one mb--0 rbt-wishlist-table">
                    <tbody>
                      {/* Start single wishlist product row */}
                      {items.map((product, i) => (
                        <tr key={i}>
                          <td className="rbt-product-remove-btn-wrapper">
                            <button
                              onClick={() => removeFromWishlist(product.id)}
                              className="rbt-product-remove-btn rbt-round-btn"
                            >
                              <span>
                                <i className="fa-solid fa-xmark" />
                              </span>
                            </button>
                          </td>
                          <td className="product-thumbnail">
                            <Link
                              href={`/product-single-default/${product.id}`}
                            >
                              <Image
                                alt="Product image"
                                src={product.imgSrc}
                                width={278}
                                height={212}
                              />
                            </Link>
                          </td>
                          <td className="rbt-wish-product-info">
                            <h6 className="rbt-wish-product-name">
                              <Link
                                href={`/product-single-default/${product.id}`}
                              >
                                {product.title}
                              </Link>
                            </h6>
                            <div className="rbt-product-price-text rbt-text-color-primary">
                              <span>${product.price.toFixed(2)}</span>
                            </div>
                            <span className="rbt-product-id">
                              <span className="rbt-text-semi-bold">SKU:</span>
                              #180036458
                            </span>
                          </td>
                          <td>
                            <div className="rbt-button-group">
                              <Link
                                className="rbt-btn rbt-btn-sm has-left-icon"
                                href={`/cart`}
                                onClick={() => addProductToCart(product.id)}
                              >
                                <i className="fa-regular fa-cart-shopping" />
                                {isAddedToCartProducts(product.id)
                                  ? "Already Added"
                                  : "Add To Cart"}
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {/* End single wishlist product row */}
                    </tbody>
                  </table>
                </div>
                <div className="rbt-wishlist-modal-footer d-flex flex-wrap rbt-gap--16 justify-content-between align-items-center">
                  <Link href={`/wishlist`} className="rbt-link">
                    <span className="icon mr--4">
                      <i className="fa-sharp fa-regular fa-heart" />
                    </span>
                    Open wishlist page
                  </Link>
                  <Link href={`/shop`} className="rbt-link">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
