import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";

import { Product } from "@/types";
export default function ProductCard21({ product }: { product: Product }) {
  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div
        className={`rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            className="rbt-prd-img"
            alt="Card Image"
            src={product.imgSrc}
            width={800}
            height={1085}
          />
        </Link>
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}
        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
          <AddtoWishlist2
            parentClass="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
            product={product}
          />
          <AddtoQuickview1
            product={product}
            className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
            data-tooltip="Quick View"
            data-tooltip-position="left"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fa-sharp fa-regular fa-magnifying-glass" />
          </AddtoQuickview1>
        </div>
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
      <div className="rbt-card-body rbt-card-body-center-align">
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
        <h6 className="rbt-card-title rbt-text-color-white">
          <Link href={`/product-single-default/${product.id}`}>
            {product.title}
          </Link>
        </h6>
        <div className="rbt-card-rating">
          <ul className="rbt-rating-icon-list">
            {Array.from({ length: product.rating ?? 0 }).map((_, i) => (
              <li key={i}>
                <i className="fa-solid fa-star rbt-rated-icon" />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>
          {product.showTruckIcon && (
            <span className="icon">
              <i className="fa-sharp fa-solid fa-truck-fast" />
            </span>
          )}
        </div>
        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text rbt-text-color-white">
            ${product.price.toFixed(2)}
          </span>
          {product.discountPercentage && (
            <span className="rbt-offer-badge">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
