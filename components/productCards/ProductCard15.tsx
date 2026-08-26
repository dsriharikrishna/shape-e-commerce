import Image from "next/image";
import Link from "next/link";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import { Product } from "@/types";
import AddToCart from "../common/AddToCart";
export default function ProductCard15({ product }: { product: Product }) {
  return (
    <div
      className={`rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div
        className={`rbt-card-img rbt-rounded--12 rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
      >
        <a href="#">
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={624}
            height={846}
          />
        </a>
        {product.badge && (
          <div
            className={`rbt-product-badge ${product.badge.bg} rbt-badge-top-left--position`}
          >
            {product.badge.text}
          </div>
        )}

        <AddtoWishlist2 product={product} />

        <AddToCart
          parentClass="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
          product={product}
        />
      </div>
      <div className="rbt-card-body rbt-card-body-center-align">
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
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <i
                  className={`fa-solid fa-star ${
                    index < (product.rating ?? 0) ? "rbt-rated-icon" : ""
                  }`}
                />
              </li>
            ))}
          </ul>
          <p className="rating-digit">({product.reviewCount})</p>
          <span className="icon">
            <i className="fa-sharp fa-solid fa-truck-fast" />
          </span>
        </div>
        <div className="pricing-part">
          <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
          <span className="price-text">${product.price.toFixed(2)}</span>
          <span className="rbt-offer-badge">-{product.discount}%</span>
        </div>
      </div>
    </div>
  );
}
