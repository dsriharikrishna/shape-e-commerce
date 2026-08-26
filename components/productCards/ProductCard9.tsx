import Image from "next/image";
import Link from "next/link";
import AddToCart from "../common/AddToCart";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist from "../common/AddtoWishlist";
import Countdown from "../common/Countdown";
import Facts from "../common/Facts";

import { Product } from "@/types";
import AddtoCompare3 from "../common/AddtoCompare3";
export default function ProductCard9({ product }: { product: Product }) {
  return (
    <>
      <div
        className={`rbt-card rbt-product-card has-hover-box-shadow ${
          product.isStockOut ? "rbt-stock-out-product-card" : ""
        }`}
      >
        <div
          className={`inner rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
        >
          <div className="rbt-card-img rbt-has-hover-img rbt-bg-color-default">
            <Link href={`/product-single-default/${product.id}`}>
              <Image
                className="rbt-prd-img"
                alt="Card Image"
                src={product.imgSrc}
                width={1246}
                height={976}
              />
              {product.hoverImgSrc && (
                <Image
                  className="rbt-hover-img"
                  alt="Card Image"
                  src={product.hoverImgSrc}
                  width={1246}
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
                  {product.watchingTooltip}
                </span>
              </div>
            )}
            <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
              <AddtoQuickview1
                product={product}
                className={`rbt-search-btn rbt-quick-btn tooltips ${
                  product.id === 2 ? "rbt-quickview-sidenav-activation" : ""
                }`}
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
                <Countdown />
              </div>
            )}
          </div>
          <div className="rbt-card-body">
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

              <span className="rbt-offer-badge">-30%</span>

              {product.pricingBadges &&
                product.pricingBadges.map((badge, index) => (
                  <div key={index} className={`rbt-badge ${badge.bg}`}>
                    {badge.text}
                  </div>
                ))}
            </div>
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
              <AddtoCompare3 product={product} />
            </div>
          </div>
        </div>
        <div className="prd-details-area rbt-has-show-more">
          <div className="wrapper rbt-has-show-more-inner-content">
            <ul className="product-details-list">
              {product.productDetails &&
                product.productDetails.map((detail, index) => (
                  <li key={index}>
                    <span className="rbt-bold--text">{detail.label} :</span>
                    {Array.isArray(detail.text) ? (
                      detail.text.map((line, lineIndex) => (
                        <span
                          key={lineIndex}
                          className={`text ${lineIndex > 0 ? "d-block" : ""}`}
                        >
                          {line}
                        </span>
                      ))
                    ) : (
                      <span className="text">{detail.text}</span>
                    )}
                  </li>
                ))}
            </ul>
            <ul className="product-details-list shipment-details-list">
              {product.shipmentDetails &&
                product.shipmentDetails.map((shipment, index) => (
                  <li key={index}>
                    <span className="icon">
                      <i className={shipment.icon} />
                    </span>
                    <div className="right-content">
                      {shipment.label && (
                        <span className="rbt-bold--text">
                          {shipment.label} :
                        </span>
                      )}
                      {shipment.text && (
                        <span className="text">{shipment.text}</span>
                      )}
                      {shipment.link && (
                        <a
                          href={shipment.link.href}
                          className="shipment-quick-link rbt-btn-link"
                        >
                          {shipment.link.text}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="rbt-show-more-btn-area">
            <button className="rbt-show-more-btn">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
}
