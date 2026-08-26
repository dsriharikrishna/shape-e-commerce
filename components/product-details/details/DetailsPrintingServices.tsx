import Image from "next/image";

import Slider9 from "../sliders/Slider9";
import Facts from "@/components/common/Facts";
import FileInput from "../others/FileInput";
import ProductActionPanel from "../ProductActionPanel";
import ProductOptionsPanel10 from "../productOptionsPanels/ProductOptionsPanel10";
import Countdown from "@/components/common/Countdown";

import { Product } from "@/types";
export default function DetailsPrintingServices({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container-fluid p-0 rbt-sticky-top-150">
        <div className="row row--0 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24 order-sm-1">
            <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
              <div className="rbt-medea-lg-img-area">
                <Slider9 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 mt--24 order-2 rbt-single-mobile-view-sidebar order-sm-2 order-xl-3">
            <div className="row row--12 rbt-single-product-content rbt-content-top-sticky-on-img rbt-product-variations w-100">
              <div className="col-lg-6 col-xl-4">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-catagories-text"
                >
                  Hoodie Printing
                </a>
                <h2 className="rbt-card-title mt--12">{product.title}</h2>
                <p className="description-text b2 mt--16">
                  At vero eos et accusamus et iusto dignissimos ducimus
                  blanditiis praesentium voluptatu atque...
                </p>
                <ul className="rbt-timeline-info-list">
                  <li>Instantly generate 100s of custom logo mockups</li>
                  <li>Change colors, symbols, sizing, and more</li>
                  <li>High-res file types include SVG, PNG, EPS &amp; PDF</li>
                </ul>
                <div className="rbt-info-wrapper d-flex mt--16">
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
                <div className="rbt-info-wrapper d-flex mt--16">
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
                  <div className="prd-info-section has-left-separator">
                    <div className="prd-id-text">
                      <p className="text-bold">SKU:</p>
                      <p>HN-508801</p>
                    </div>
                    <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                      9 in Stock
                    </div>
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
                        {" "}
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="rbt-offer-badge rbt-offer-badge-md">
                        Save 30%
                      </span>
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
              </div>
              <div className="col-lg-6 col-xl-4">
                {/* Start Dynamic Color Swatches Area */}
                <ProductOptionsPanel10 />

                {/* End Dynamic Color Swatches Area */}
                <div className="rbt-info-wrapper d-block mt--24">
                  <div className="prd-info-section d-block">
                    <FileInput />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-4">
                <div className="rbt-info-wrapper d-block">
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
                  <div className="rbt-countdown-banner rbt-countdown-banner-sm rbt-countdown-banner-has-bg-01">
                    <span className="b3 rbt-title">Special Offer :</span>
                    <div className="rbt-countdown-section">
                      <div className="rbt-countdown-one bg-variation-white cd-border-style">
                        <Countdown />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                <div className="rbt-info-wrapper d-block mt--24">
                  <ul className="product-details-list shipment-details-list">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
