import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "../common/AddtoQuickview1";
import AddtoWishlist2 from "../common/AddtoWishlist2";
import AddtoCompare2 from "../common/AddtoCompare2";

import { Product } from "@/types";
import AddToCart3 from "../common/AddToCart2";
export default function ProductCard13({ product }: { product: Product }) {
  return (
    <div
      className={`rbt-card rbt-product-card rbt-product-card-style-2 rounded--16 rbt-scroll-trigger fade_in animation-order-${product.animationOrder}`}
    >
      <div
        className={`rbt-card-img ${
          product.hoverImgSrc ? "rbt-has-hover-img" : ""
        } rounded--16`}
      >
        <Link href={`/product-single-default/${product.id}`}>
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${product.animationOrder} rbt-prd-img`}
            alt="Card Image"
            src={product.imgSrc}
            width={800}
            height={1085}
          />
        </Link>
        {product.hoverImgSrc && (
          <Image
            className={`rbt-scroll-trigger fade_in animation-order-${product.animationOrder} rbt-hover-img`}
            alt="Hover"
            src={product.hoverImgSrc}
            width={800}
            height={1085}
          />
        )}
        {product.badge && (
          <div className="rbt-badge-wrapper rbt-content-top-left">
            <div className={`rbt-product-badge ${product.badge.bg}`}>
              {product.badge.text}
            </div>
          </div>
        )}

        <AddtoWishlist2 product={product} />
      </div>

      <div className="rbt-card-body has-rbt-top-right-corner-portion rbt-card-body-top-bottom-space">
        <div className="rbt-curved-radius-bottom-corner" />

        {/* Right corner buttons */}
        {product.hotSell && (
          <div className="rbt-scroll-animation-wrapper rbt-no-overlay">
            <div className="rbt-scroll-animation rbt-scroll-right-left">
              {/* Start Single Testimonial  */}
              <div className="rbt-single-column-100">
                <div className="rbt-category-list-dis rbt-category-list">
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                  <a href="#!">
                    <span className="rbt-catagory-icon">
                      <Image
                        alt="icon"
                        src="/assets/images/icons/scroll-icon-01.svg"
                        width={16}
                        height={16}
                      />
                    </span>
                    Hot Sell 50% Off
                  </a>
                </div>
              </div>
              {/* End Single Testimonial  */}
            </div>
          </div>
        )}
        <div className="rbt-right-corner-portion bottom--position">
          <div className="rbt-corner-portion-wrapper">
            <div className="rbt-quick-btn-grp has-mixup-midlayer bottom-right--position">
              <AddtoCompare2 product={product} />
              <AddtoQuickview1
                product={product}
                className="rbt-watch-btn rbt-quick-btn tooltips"
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
        </div>

        {/* Product Info */}
        <div className="rbt-card-top-content text-center">
          {product.category?.length && product.category.length > 0 && (
            <div>
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-categories`}
                  className="rbt-card-subtitle rbt-card-catagories-text mt--0"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
          <h6 className="rbt-card-title mt--4">
            <Link href={`/product-single-default/${product.id}`}>
              {product.title}
            </Link>
          </h6>

          <div className="rbt-card-rating justify-content-center">
            <ul className="rbt-rating-icon-list">
              {Array.from({ length: 5 }, (_, index) => (
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
          </div>

          <div className="pricing-part justify-content-center">
            <del className="price-text">${product.oldPrice?.toFixed(2)}</del>
            <span className="price-text">${product.price.toFixed(2)}</span>
            <span className="rbt-offer-badge">-{product.discount}%</span>
          </div>
        </div>

        {/* Footer Button */}
        <div className="rbt-card-footer d-flex footer-content-btn">
          <AddToCart3
            parentClass="rbt-btn rbt-btn-sm has-left-icon flex-basis-100"
            product={product}
          />
        </div>
      </div>
    </div>
  );
}
