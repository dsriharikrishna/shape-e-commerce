import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types";
import AddToCart from "../common/AddToCart";
import AddtoCompare2 from "../common/AddtoCompare2";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";
export default function ProductCard8({
  product,
  imgBgColor = "",
  btnClass = "rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation",

  imgHeightClass = "",
}: {
  product: Product;
  imgBgColor?: string;
  btnClass?: string;
  imgHeightClass?: string;
}) {
  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-rounded--12 rbt-scroll-trigger ${imgBgColor} ${imgHeightClass} zoom_in animation-order-${product.animationOrder}`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={312}
            height={312}
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

          <AddtoCompare2
            parentClass="rbt-compare-btn bg-light-one rbt-quick-btn tooltips"
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
            <i className="fa-sharp fa-regular fa-eye" />
          </AddtoQuickview1>
        </div>

        <AddToCart parentClass={btnClass} product={product} />
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
            {[...Array(5 - (product.rating ?? 0))].map((_, index) => (
              <li key={index}>{/* Add code for empty stars if needed */}</li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>
          <span className="icon">
            <i className="fa-sharp fa-solid fa-truck-fast" />
          </span>
        </div>
        <div className="pricing-part">
          {product.oldPrice && (
            <del className="price-text">${product.oldPrice.toFixed(2)}</del>
          )}
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
}
