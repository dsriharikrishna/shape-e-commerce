"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoCompare1 from "../common/AddtoCompare1";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist from "../common/AddtoWishlist";
import Countdown from "../common/Countdown";
import Facts from "../common/Facts";

import { Product } from "@/types";
import AddToCart from "../common/AddToCart";
export default function ProductCard10({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);

  return (
    <div
      className={`rbt-card rbt-product-card ${
        product.isStockOut ? "rbt-stock-out-product-card" : ""
      }`}
    >
      <div
        className={`inner rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
      >
        <div
          className={`rbt-card-img rbt-rounded--12 rbt-bg-color-default ${
            product.hoverVideoSrc ? "rbt-has-hover-video" : "rbt-has-hover-img"
          }`}
        >
          <Link href={`/product-single-default/${product.id}`}>
            <Image
              className="rbt-prd-img"
              alt="Card Image"
              src={selectedVariant}
              width={1024} // Adjusted width/height based on the HTML
              height={793}
            />
            {product.hoverVideoSrc && (
              <video
                className="rbt-hover-video"
                src={product.hoverVideoSrc}
                muted
                loop
                autoPlay
              />
            )}
            {product.hoverImgSrc && !product.hoverVideoSrc && (
              <Image
                className="rbt-hover-img"
                alt="Card Image"
                src={product.hoverImgSrc}
                width={1246} // Adjusted width/height based on the HTML
                height={976}
              />
            )}
          </Link>
          {product.badges && product.badges.length > 0 && (
            <div className="rbt-badge-wrapper rbt-content-top-left">
              {product.badges.map((badge, index) => (
                <div
                  key={index}
                  className={`rbt-product-badge ${badge.bg} border-rounded`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          )}
          {product.watchingTooltip && (
            <div
              className="rbt-discount-badge right--corner-style tooltips"
              data-tooltip={`👁️ ${product.watchingTooltip} People Are Watching This Item`}
              data-tooltip-position="bottom"
            >
              <span>
                <i className="fa-regular fa-eye" />
                {product.watchingTooltip} {/* Extract the number */}
              </span>
            </div>
          )}
          <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
            <AddtoQuickview1
              product={product}
              className={`rbt-search-btn rbt-quick-btn tooltips`}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
              data-tooltip="Quick View"
              data-tooltip-position="left"
            >
              <i className="fa-regular fa-magnifying-glass-plus" />
            </AddtoQuickview1>
            <AddtoWishlist product={product} />
          </div>
          {product.countdown && (
            <div className="rbt-countdown-wrap rbt-content-bottom-center rbt-countdown-one bg-variation-black cd-border-style">
              {/* You would likely use a library or custom logic to handle the countdown timer here */}
              <Countdown />
            </div>
          )}
        </div>
        <div className="rbt-card-body">
          {product.variants && product.variants.length > 0 && (
            <div className="rbt-color-select-area">
              <ul className="rbt-switcher-color-list product-switcher-activation">
                {product.variants.map((variant, index) => (
                  <li
                    key={index}
                    className={
                      selectedVariant === variant.imgSrc ? "active" : ""
                    }
                  >
                    <a
                      className="rbt-switcher--color tooltips"
                      data-switcher-color={variant.color}
                      data-src={variant.imgSrc}
                      data-tooltip={variant.tooltip}
                      data-tooltip-position="top"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (variant.imgSrc) {
                          setSelectedVariant(variant.imgSrc);
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
              {product.moreVariantsText && (
                <Link
                  className="prd-link-text"
                  href={`/product-single-default/${product.id}`}
                >
                  +{product.moreVariantsText} More Items
                </Link>
              )}
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
          <h6 className="rbt-card-title">
            <Link href={`/product-single-default/${product.id}`}>
              {product.title}
            </Link>
          </h6>
          <div className="rbt-card-rating">
            <ul className="rbt-rating-icon-list">
              {[...Array(product.rating)].map((_, index) => (
                <li key={index}>
                  <i className="fa-solid fa-star rbt-rated-icon" />
                </li>
              ))}
              {[...Array(5 - (product.rating ?? 0))].map(() => (
                <></>
              ))}
            </ul>
            <p className="rating-digit">({product.reviewCount})</p>
            {product.extraInfo && product.extraInfo.length > 0 && <Facts />}
          </div>
          <div className="pricing-part">
            {product.oldPrice && (
              <del className="price-text">${product.oldPrice.toFixed(2)}</del>
            )}
            <span className="price-text">
              {typeof product.price === "number"
                ? `$${product.price.toFixed(2)}`
                : product.price}
            </span>
            {product.discountPercentage && (
              <span className="rbt-offer-badge">
                -{product.discountPercentage}%
              </span>
            )}
            {product.pricingBadges &&
              product.pricingBadges.map((badge, index) => (
                <div key={index} className={`rbt-badge ${badge.bg}`}>
                  {badge.text}
                </div>
              ))}
          </div>
          {product.quantityArea && (
            <div className="rbt-prd-qty-area">
              <p className="prd-qty-txt">
                Only <strong>{product.quantityArea.text}</strong> items left
              </p>{" "}
              {/* Using dangerouslySetInnerHTML for bold tag */}
              <div
                className="progress"
                role="progressbar"
                aria-label="Shipping-progress"
                aria-valuenow={product.quantityArea.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar"
                  style={{ width: `${product.quantityArea.progress}%` }}
                />
              </div>
            </div>
          )}
          <div className="prd-btn-grp">
            {product.isStockOut ? (
              <a
                className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#notifyModal"
              >
                <i className="fa-regular fa-bell" /> Notify Me
              </a>
            ) : (
              <AddToCart
                parentClass="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                product={product}
              />
            )}

            <AddtoCompare1 product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
