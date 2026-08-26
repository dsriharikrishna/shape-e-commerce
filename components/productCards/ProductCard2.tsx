import Image from "next/image";
import Link from "next/link";
import AddToCart from "../common/AddToCart";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import AddtoCompare2 from "../common/AddtoCompare2";

import { Product } from "@/types";
export default function ProductCard2({ product }: { product: Product }) {
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

  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={1162}
            height={892}
          />
        </Link>
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}
        <AddtoWishlist2 product={product} />
      </div>
      <div className="rbt-card-body rbt-card-body-top-bottom-space">
        <div className="rbt-card-top-content has-two-align">
          <div className="left-part">
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
                {product.rating ? renderRatingStars(product.rating) : null}
              </ul>
              <p className="rating-digit">({product.reviewCount})</p>
            </div>
          </div>
          <div className="right-part">
            <div className="top--part">
              <div className="pricing-part">
                {product.oldPrice && (
                  <del className="price-text">
                    ${product.oldPrice.toFixed(2)}
                  </del>
                )}
                <span className="price-text">${product.price.toFixed(2)}</span>
              </div>
            </div>
            {product.discount && (
              <div className="bottom-part">
                <span className="rbt-offer-badge mt--12">
                  Save {product.discount}%
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart product={product} />
          <div className="rbt-quick-btn-grp has-mixup-midlayer">
            <AddtoCompare2 product={product} />
            <AddtoQuickview1
              product={product}
              className="rbt-watch-btn rbt-quick-btn tooltips top-right"
              data-tooltip="Quick View"
              data-tooltip-position="top"
              type="button"
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
