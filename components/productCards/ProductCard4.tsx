"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../common/AddToCart";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import { Product } from "@/types";
export default function ProductCard4({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <i
            className={`fa-solid fa-star${i < rating ? " rbt-rated-icon" : ""}`}
          />
        </li>,
      );
    }
    return stars;
  };

  const renderColorVariants = (
    variants: import("@/types").ProductVariant[],
  ) => {
    return variants.map((variant, index) => (
      <li
        key={index}
        className={selectedVariant === variant.src ? "active" : ""}
      >
        <a
          className="rbt-switcher--color tooltips"
          data-switcher-color={variant.hex}
          data-src={variant.src}
          data-tooltip={variant.color}
          data-tooltip-position="top"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedVariant(variant.src ?? "");
          }}
        >
          <div
            className="rbt-color-circle"
            style={{ backgroundColor: variant.hex }}
          />
        </a>
      </li>
    ));
  };

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 transform-variation-one rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div className="rbt-card-img top-rounded-md">
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${product.animationOrder} rbt-prd-img`}
            alt="Card Image"
            src={selectedVariant}
            width={624}
            height={624}
          />
        </Link>
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${product.badge.bg}`}>
              {product.badge.text}
            </div>
          </div>
        )}
        <AddtoWishlist2 product={product} />
      </div>
      <div className="rbt-card-body rbt-bg-color-white">
        <div className="rbt-card-top-content">
          {product.variants && product.variants.length > 0 && (
            <div className="rbt-color-select-area">
              <ul className="rbt-switcher-color-list product-switcher-activation">
                {renderColorVariants(product.variants)}
              </ul>
              {product.moreItemsLink && (
                <Link
                  className="prd-link-text"
                  href={`/product-single-default/${product.id}`}
                >
                  +{product.moreItemsLink} More Items
                </Link>
              )}
            </div>
          )}
          <h6 className="rbt-card-title">
            <Link href={`/product-single-default/${product.id}`}>
              {product.title}
            </Link>
          </h6>
          <div className="rbt-card-rating">
            <ul className="rbt-rating-icon-list">
              {product.rating ? renderRatingStars(product.rating) : null}
            </ul>
            <p className="rating-digit">({product.reviewCount})</p>
          </div>
          <div className="pricing-part">
            {product.priceRange?.length === 2 && (
              <span className="price-text">
                ${product.priceRange[0]} - ${product.priceRange[1]}
              </span>
            )}
          </div>
        </div>
        <div className="rbt-card-footer d-block footer-content-btn">
          <div className="prd-btn-grp">
            <AddToCart
              parentClass="rbt-btn rbt-btn-black rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
              product={product}
            />
            <a
              className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block rbt-btn-transparent has-left-icon rbt-compare-btn-activation"
              href="#"
            >
              <i className="fa-regular fa-file-plus-minus" />
              Add To Compare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
