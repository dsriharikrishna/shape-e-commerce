"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import { Product } from "@/types";
import AddToCart from "../common/AddToCart";
export default function ProductCard16({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 product-variation-two transform-variation-two rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div className="background-expand" />
      <div className="card-inner">
        <div
          className={`rbt-card-img rbt-bg-color-white rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
        >
          <Link href={`/product-single-default/${product.id}`}>
            <Image
              className="rbt-prd-img"
              alt="Product"
              src={selectedVariant}
              width={624}
              height={624}
            />
          </Link>
          {product.badge && (
            <div className="rbt-badge-wrapper rbt-content-top-left">
              <div
                className={`rbt-product-badge ${product.badge.bg} border-rounded`}
              >
                {product.badge.text}
              </div>
            </div>
          )}

          <AddtoWishlist2 product={product} />
          <ul className="product-hover-slider-list hover-slider-activation">
            {product.variants?.map((variant, index) => (
              <li key={index}>
                <Link
                  href={`/product-single-default/${product.id}`}
                  data-src={variant.src}
                  className={selectedVariant === variant.src ? "active" : ""}
                  onMouseOver={(e) => {
                    e.preventDefault();
                    if (variant.src) {
                      setSelectedVariant(variant.src);
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="rbt-card-body rbt-bg-color-white">
          <div className="rbt-card-top-content">
            <div className="rbt-color-select-area">
              <ul className="rbt-switcher-color-list product-switcher-activation">
                {product.variants?.map((variant, idx) => (
                  <li
                    key={idx}
                    className={selectedVariant === variant.src ? "active" : ""}
                  >
                    <a
                      href="#"
                      className="rbt-switcher--color tooltips"
                      data-switcher-color={variant.hex}
                      data-src={variant.src}
                      data-tooltip={variant.tooltip}
                      data-tooltip-position="top"
                      onClick={(e) => {
                        e.preventDefault();
                        if (variant.src) {
                          setSelectedVariant(variant.src);
                        }
                      }}
                    >
                      <div
                        className="rbt-color-circle"
                        style={{ backgroundColor: variant.hex }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                className="prd-link-text"
                href={`/product-single-default/${product.id}`}
              >
                +{product.moreItemsLink} More Items
              </Link>
            </div>

            {product.category?.length && product.category.length > 0 && (
              <div>
                {product.category?.map((item, index) => (
                  <Link
                    key={index}
                    href={`/shop-by-category`}
                    className="rbt-card-subtitle rbt-card-catagories-text"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <h6 className="rbt-card-title">
              <Link href={`/product-single-default/${product.id}`}>
                {product.title}
              </Link>
            </h6>

            <div className="rbt-card-rating">
              <ul className="rbt-rating-icon-list">
                {[...Array(product.rating ?? 0)].map((_, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-star rbt-rated-icon" />
                  </li>
                ))}
              </ul>
              <p className="rating-digit">({product.reviewCount})</p>
            </div>

            <div className="pricing-part">
              <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
              <span className="price-text">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <div className="rbt-card-footer d-block footer-content-btn">
            <div className="prd-btn-grp">
              <AddToCart
                parentClass="rbt-btn rbt-btn-primary rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                product={product}
              />
              <a
                className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation"
                href="#"
              >
                <i className="fa-regular fa-file-plus-minus" /> Add To Compare
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
