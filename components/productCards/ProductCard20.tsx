import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";

import { Product } from "@/types";
export default function ProductCard20({ product }: { product: Product }) {
  return (
    <div className="rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-1">
      <div className="rbt-card-img top-rounded-md rbt-scroll-trigger zoom_in animation-order-1">
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            alt="Card Image"
            width={400}
            height={581}
            src={product.imgSrc}
          />
        </Link>

        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position">
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
        <h6 className="rbt-card-title">
          <Link href={`/product-single-default/${product.id}`}>
            {product.title}
          </Link>
        </h6>

        <div className="rbt-card-rating">
          <ul className="rbt-rating-icon-list">
            {[...Array(5)].map((_, starIndex) => (
              <li key={starIndex}>
                <i className="fa-solid fa-star rbt-rated-icon" />
              </li>
            ))}
          </ul>
          <p className="rating-digit">(25)</p>
        </div>

        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
