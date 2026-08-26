"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import { Product } from "@/types";
export default function ProductCard19({ product }: { product: Product }) {
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
      className={`rbt-card rbt-product-card rbt-product-card-style-2 wider-variation rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div className="rbt-card-img">
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            className="rbt-prd-img"
            alt="Card Image"
            src={selectedVariant}
            width={1296}
            height={751}
          />
        </Link>
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${product.badge.bg}`}>
              {product.badge.text}
            </div>
          </div>
        )}
        <div className="rbt-right-corner-portion bottom--position white-box-style">
          <div className="rbt-corner-portion-wrapper">
            <div className="corner-portion-box" />
          </div>
        </div>

        <AddtoWishlist2 product={product} />
      </div>
      <div className="rbt-card-body no-footer-body">
        <div className="rbt-card-top-content has-two-align">
          <div className="left-part">
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
                {product.rating ? renderRatingStars(product.rating) : null}
              </ul>
              <p className="rating-digit">({product.reviewCount})</p>
            </div>
          </div>
          <div className="right-part">
            <div className="top--part">
              <div className="pricing-part justify-content-end">
                {product.priceRange?.length === 2 && (
                  <span className="price-text">
                    ${product.priceRange[0]} - ${product.priceRange[1]}
                  </span>
                )}
              </div>
              <div className="rbt-color-select-area mt--8 mt_sm--4">
                <ul className="rbt-switcher-color-list product-switcher-activation">
                  {product.variants
                    ? renderColorVariants(product.variants)
                    : null}
                </ul>
                <Link
                  className="prd-link-text"
                  href={`/product-single-default/${product.id}`}
                >
                  +{product.moreItemsLink} More Items
                </Link>
              </div>
              <Link
                className="rbt-btn rbt-btn-sm rbt-btn-black text-center mt--12"
                href={`/cart`}
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
