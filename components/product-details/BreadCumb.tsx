import Image from "next/image";
import { allProducts } from "@/data/products";
import Link from "next/link";

import { Product } from "@/types";
export default function BreadCumb({ product }: { product: Product }) {
  const id = product.id;

  // Find previous product
  const prevProduct =
    allProducts.find((p) => p.id === Number(id) - 1) ||
    allProducts[allProducts.length - 1];

  // Find next product
  const nextProduct =
    allProducts.find((p) => p.id === Number(id) + 1) || allProducts[0];

  return (
    <div className="rbt-breadcrumb-two rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-breadcrumb-inner d-flex align-items-center justify-content-between">
              <ul className="rbt-breadcrumb-page-list justify-content-start mt--0">
                <li className="rbt-breadcrumb-item">
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item">
                  <a href="#">Products</a>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item">
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">{product.title}</li>
              </ul>
              <div className="rbt-single-nav">
                <div className="rbt-products-nav">
                  <div className="rbt-event-hover">
                    <Link
                      className="rbt-product-nav-btn rbt-round-btn rbt-btn-prev"
                      href={`/product-single-default/${prevProduct.id}`}
                      aria-label="Previous product"
                    >
                      <i className="fa-regular fa-chevron-left" />
                    </Link>
                    <div className="rbt-dropdown rbt-dropdown-from-right">
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-bg-color-gray-light">
                        <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-card-body">
                            <div className="rbt-card-rating">
                              <ul className="rbt-rating-icon-list">
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                              <p className="rating-digit">(42)</p>
                            </div>
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${prevProduct.id}`}
                              >
                                {prevProduct.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              {prevProduct.oldPrice && (
                                <del className="price-text">
                                  ${prevProduct.oldPrice?.toFixed(2)}
                                </del>
                              )}
                              <span className="price-text">
                                {prevProduct.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default">
                            <a href="#">
                              <Image
                                alt="Card Image"
                                src={prevProduct.imgSrc}
                                width={1072}
                                height={824}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-product-nav-btn rbt-round-btn tooltips"
                    data-tooltip="Back To Products"
                    data-tooltip-position="top"
                  >
                    <i className="fa-regular fa-grid-2" />
                  </Link>
                  <div className="rbt-event-hover">
                    <Link
                      className="rbt-product-nav-btn rbt-round-btn rbt-btn-next"
                      href={`/product-single-default/${nextProduct.id}`}
                      aria-label="Next product"
                    >
                      <i className="fa-regular fa-chevron-right" />
                    </Link>
                    <div className="rbt-dropdown rbt-dropdown-from-right">
                      <div className="rbt-card rbt-product-card rbt-list-view-variation rbt-list-view-sm rbt-bg-color-gray-light">
                        <div className="inner rbt-scroll-trigger fade_in animation-order-1">
                          <div className="rbt-card-body">
                            <div className="rbt-card-rating">
                              <ul className="rbt-rating-icon-list">
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star rbt-rated-icon" />
                                </li>
                                <li>
                                  <i className="fa-solid fa-star" />
                                </li>
                              </ul>
                              <p className="rating-digit">(42)</p>
                            </div>
                            <h6 className="rbt-card-title">
                              <Link
                                href={`/product-single-default/${nextProduct.id}`}
                              >
                                {nextProduct.title}
                              </Link>
                            </h6>
                            <div className="pricing-part">
                              {nextProduct.oldPrice && (
                                <del className="price-text">
                                  ${nextProduct.oldPrice?.toFixed(2)}
                                </del>
                              )}
                              <span className="price-text">
                                {nextProduct.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="rbt-card-img rbt-bg-color-default">
                            <a href="#">
                              <Image
                                alt="Card Image"
                                src={nextProduct.imgSrc}
                                width={1072}
                                height={824}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
