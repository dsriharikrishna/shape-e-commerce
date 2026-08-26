"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";

import { Product } from "@/types";
const ProductCard14 = ({
  product,
  textCenter = true,
}: {
  product: Product;
  textCenter?: boolean;
}) => {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);

  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      {/* Product Image */}
      <div
        className={`rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            className="rbt-prd-img"
            src={selectedVariant}
            alt={product.title}
            width={624}
            height={928}
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        {/* Quick Action Buttons */}
        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
          <AddtoWishlist2
            parentClass="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <AddtoQuickview1
            product={product}
            className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
            type="button"
            data-tooltip="Quick View"
            data-tooltip-position="left"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fa-sharp fa-regular fa-magnifying-glass" />
          </AddtoQuickview1>
        </div>

        {/* Select Option Button */}
        <AddtoQuickview1
          product={product}
          typeAnchor
          className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#quickViewModal"
        >
          Select Option
        </AddtoQuickview1>
      </div>

      {/* Product Body */}
      <div
        className={`rbt-card-body ${
          textCenter ? "rbt-card-body-center-align" : ""
        }`}
      >
        {/* Color Switchers */}
        {product.colorVariants && (
          <div
            className={`rbt-color-select-area ${
              textCenter ? "justify-content-center" : ""
            } `}
          >
            <ul className="rbt-switcher-color-list product-switcher-activation">
              {product.colorVariants.map((variant, index) => (
                <li
                  key={index}
                  className={selectedVariant === variant.src ? "active" : ""}
                >
                  <a
                    className="rbt-switcher--color tooltips"
                    data-switcher-color={variant.color}
                    data-src={variant.src}
                    data-tooltip={variant.tooltip}
                    data-tooltip-position="top"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.src) {
                        setSelectedVariant(variant.src);
                      }
                    }}
                  >
                    <div
                      className="rbt-color-circle"
                      style={{ backgroundColor: variant.color }}
                    ></div>{" "}
                    {/* Set background color */}
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
        )}
        {product.category?.length && product.category.length > 0 && (
          <div>
            {product.category?.map((item, index) => (
              <Link
                key={index}
                href={`/shop-by-categories`}
                className="rbt-card-subtitle rbt-card-catagories-text"
              >
                {item}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h6 className="rbt-card-title">
          <Link href={`/product-single-default/${product.id}`}>
            {product.title}
          </Link>
        </h6>

        {/* Ratings */}
        <div className="rbt-card-rating">
          <ul className="rbt-rating-icon-list">
            {Array.from({ length: product.rating ?? 0 }).map((_, idx) => (
              <li key={idx}>
                <i className="fa-solid fa-star rbt-rated-icon" />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>

          {/* Truck Icon */}
          {product.showTruckIcon && (
            <span className="icon">
              <i className="fa-sharp fa-solid fa-truck-fast" />
            </span>
          )}
        </div>

        {/* Price */}
        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
          {product.discountPercentage && (
            <span className="rbt-offer-badge">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard14;
