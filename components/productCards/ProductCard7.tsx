import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import AddtoCompare2 from "../common/AddtoCompare2";
import { Product } from "@/types";
import AddToCart3 from "../common/AddToCart2";
const ProductCard7 = ({ product }: { product: Product }) => {
  // Function to render rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <i
            className={`fa-solid fa-star ${i < rating ? "rbt-rated-icon" : ""}`}
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
        className={`rbt-card-img top-rounded-md rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-${product.animationOrder}`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={312}
            height={445}
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
      </div>
      <div className="rbt-card-body rbt-card-body-center-align rbt-bg-color-gray-100">
        <div className="rbt-card-top-content">
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
              {product.rating ? renderStars(product.rating) : null}
            </ul>
            <p className="rating-digit">({product.reviewCount})</p>
            <span className="icon">
              <i className="fa-sharp fa-solid fa-truck-fast" />
            </span>
          </div>
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
        <div className="rbt-card-footer d-block footer-content-btn">
          <AddToCart3
            parentClass="rbt-btn rbt-btn-sm has-left-icon d-block"
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard7;
