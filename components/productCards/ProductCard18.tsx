import Image from "next/image";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import AddtoCompare2 from "../common/AddtoCompare2";

import { Product } from "@/types";
import AddToCart from "../common/AddToCart";
export default function ProductCard18({ product }: { product: Product }) {
  const {
    animationOrder,
    imgSrc,
    badge,
    category,
    title,
    price,
    oldPrice,
    discount,
    rating,
    reviewCount,
    moreText,
    variants,
  } = product;
  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rounded--12 rbt-scroll-trigger fade_in animation-order-${animationOrder}`}
    >
      <div className="rbt-card-img top-rounded-md">
        <a href="#">
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${animationOrder} rbt-prd-img`}
            src={imgSrc}
            alt={title}
            width={624}
            height={624}
          />
        </a>

        {/* Badge if available */}
        {badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${badge.bg}`}>{badge.text}</div>
          </div>
        )}

        <AddtoWishlist2 product={product} />
      </div>

      <div className="rbt-card-body rbt-bg-color-gray-light text-center">
        <div className="rbt-card-top-content">
          {/* Category */}
          <a
            href="#"
            className="rbt-card-subtitle rbt-card-catagories-text mt--12"
          >
            {category}
          </a>

          {/* Title */}
          <h6 className="rbt-card-title">
            <a href="#">{title}</a>
          </h6>

          {/* Rating */}
          <div className="rbt-card-rating justify-content-center">
            <ul className="rbt-rating-icon-list">
              {[...Array(rating)].map((_, i) => (
                <li key={i}>
                  <i className="fa-solid fa-star rbt-rated-icon" />
                </li>
              ))}
            </ul>
            <p className="rating-digit">({reviewCount})</p>
          </div>

          {/* Price */}
          <div className="pricing-part justify-content-center">
            <del className="price-text">${oldPrice?.toFixed(2)}</del>
            <span className="price-text">${price.toFixed(2)}</span>
            {discount && <span className="rbt-offer-badge">-{discount}%</span>}
          </div>

          {/* Variant Images (if available) */}
          {variants && (
            <div className="rbt-product-switch-area mt--10">
              <ul className="rbt-switcher-product-list product-switcher-activation">
                {variants.map((variant, index) => (
                  <li key={index} className={index === 0 ? "active" : ""}>
                    <a
                      href="#"
                      className={`rbt-switcher--prd rbt-switcher--prd-${
                        index + 1
                      }`}
                    >
                      {variant.src && (
                        <Image
                          src={variant.src}
                          alt="Variant"
                          width={624}
                          height={624}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              {moreText && (
                <a className="prd-link-text" href="#">
                  +{moreText} More
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart product={product} />
          <div className="rbt-quick-btn-grp has-mixup-midlayer">
            <AddtoCompare2 tooltipDirection="top" product={product} />
            <AddtoQuickview1
              product={product}
              className="rbt-watch-btn rbt-quick-btn tooltips top-right"
              data-tooltip="Quick View"
              data-tooltip-position="top"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i className="fa-sharp fa-regular fa-eye" />
            </AddtoQuickview1>
          </div>
        </div>
      </div>
    </div>
  );
}
