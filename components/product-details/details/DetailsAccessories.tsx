import Link from "next/link";
import Image from "next/image";

import Slider4 from "../sliders/Slider4";
import Facts from "@/components/common/Facts";
import ProductActionPanel from "../ProductActionPanel";
import ComboProducts from "../others/ComboProducts2";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";
import { recentlyViewed2, recommandedProducts2 } from "@/data/products/others";
import ProductOptionsPanel6 from "../productOptionsPanels/ProductOptionsPanel6";

import { Product } from "@/types";
export default function DetailsAccessories({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-9 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <Slider4 />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-content ptb--0 rbt-product-variations">
                  <div
                    className="rbt-quick-access-banner rbt-quick-access-banner-sm rbt-bg-color-brand-300 rbt-rounded--8 alert alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="rbt-quick-access-banner-banner-content d-flex align-items-center">
                      <div className="rbt-icon-img">
                        <Image
                          alt="Ecommerce Gift Box Icon"
                          src="/assets/images/icons/product-single/gift-box-01-sm.svg"
                          width={44}
                          height={44}
                        />
                      </div>
                      <p className="rbt-quick-access-banner-title b3 mb-0">
                        Register to buy Grocery's at wholesale prices for your
                        shop.
                      </p>
                    </div>
                    <div className="rbt-quick-access-banner-action-btn">
                      <button
                        className="rbt-btn rbt-btn-xs"
                        data-bs-toggle="modal"
                        data-bs-target="#signinModal"
                      >
                        <i className="fa-light fa-user mr--4" /> Register Now
                      </button>
                    </div>
                    <a
                      href="#"
                      className="rbt-cancel-btn"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-catagories-text mt--16"
                  >
                    Powerbank
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex mt--28">
                    <div className="rbt-card-rating mt--0">
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
                          <i className="fa-solid fa-star rbt-rated-icon" />
                        </li>
                      </ul>
                      <p className="rating-digit">(46)</p>
                      <Facts />
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0">
                        {product.oldPrice ? (
                          <del className="price-text">
                            ${product.oldPrice?.toFixed(2)}
                          </del>
                        ) : (
                          ""
                        )}
                        <span className="price-text">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="rbt-offer-badge rbt-offer-badge-md">
                          Save 30%
                        </span>
                      </div>
                    </div>
                    <div className="prd-info-section">
                      <div className="prd-id-text">
                        <p className="text-bold">Brand:</p>
                        <a
                          href="#"
                          className="rbt-brand-img tooltips"
                          data-tooltip="Product Brand"
                          data-tooltip-position="top"
                        >
                          <Image
                            alt="Small icon Brand"
                            src="/assets/images/icons/small-brand/sm-brand-b-01.webp"
                            width={78}
                            height={48}
                            className="image-auto"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                            fill="url(#paint0_linear_3632_18878)"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                            fill="#FC9502"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                            fill="#FCE202"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_3632_18878"
                              x1="11.9995"
                              y1="22.0148"
                              x2="11.9995"
                              y2="2.01511"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={1} stopColor="#FF4C0D" />
                              <stop offset={1} stopColor="#FC9502" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p>
                          <strong>34 products sold in last 10 hours.</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  {/* Start Dynamic Color Swatches Area */}
                  <ProductOptionsPanel6 />

                  {/* End Dynamic Color Swatches Area */}
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-prd-qty-area">
                      <p className="prd-qty-txt">
                        <strong>Only 97 pc left</strong>
                      </p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Shipping-progress"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar w-50" />
                      </div>
                    </div>
                  </div>
                  <ProductActionPanel product={product} />
                  <hr className="rbt-separator rbt-separator-gray200 mt--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <ul className="product-details-list shipment-details-list">
                      <li>
                        <span className="rbt-bold--text mr--4">Brand :</span>
                        <span className="text">Sony Corporation Ltd</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Resolution :
                        </span>
                        <span className="text">3840×2160</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Release years :
                        </span>
                        <span className="text"> Jan 2022</span>
                      </li>
                      <li>
                        <span className="rbt-bold--text mr--4">
                          Motherboard :
                        </span>
                        <span className="text"> Samsung</span>
                        <span className="text d-block">
                          ATX, ITX, microATX, Mini-ITX
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa-sharp fa-regular fa-truck" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">Ships :</span>
                          <span className="text">2–3 weeks Free Shipping</span>
                        </div>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa-regular fa-bag-shopping" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">
                            7 Days Returns :
                          </span>
                          <span className="text">
                            Free return within 7 days of purchase
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50">
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link">
                          <li>
                            <Link href={`/product-single-default`}>
                              <Image
                                alt="Payment Brand Image"
                                src="/assets/images/payment-brand/image-01.webp"
                                width={812}
                                height={64}
                              />
                            </Link>
                          </li>
                        </ul>
                        <span className="b2 rbt-text-medium text-center rbt-text-color-heading mt--12 d-block">
                          Guaranteed safe &amp; secure checkout
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rbt-combo-prd-box rbt-bg-color-white mt--24">
              <div className="row justify-content-between">
                <div className="col-lg-12">
                  <div className="rbt-combo-title-section flex-row">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There's more in the complete bundle
                    </h5>
                  </div>
                </div>

                <ComboProducts />
              </div>
            </div>
          </div>
          <div className="col-xl-3 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts
              recentlyViewedProducts={recentlyViewed2}
              recommandedProducts={recommandedProducts2}
            />
            <div className="rbt-block-banner-img mt--32">
              <Image
                alt="Ecommerce Product Banner"
                src="/assets/images/product-single/single-prd-banner/single-prd-banner-a-01.webp"
                width={1696}
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
