"use client";

import Image from "next/image";

import ProductActionPanel from "../ProductActionPanel";
import Slider3D from "../sliders/Slider3D";
import ComboProducts from "../others/ComboProducts";
import ProductOptionsPanel13 from "../productOptionsPanels/ProductOptionsPanel13";

import { Product } from "@/types";
export default function Details({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-12 col-lg-12 mt--24">
            <div className="row row--20 justify-content-center mt_dec--16">
              <div className="col-xl-7 col-lg-12 col-12 mt--16">
                <div className="thumbnail rbt-360-view-thumbnail rbt-sticky-top-150">
                  {/* <div class="cloudimage-360" data-folder="https://scaleflex.cloudimg.io/v7/demo/vivo-mobile/" data-filename-x="product-{index}.jpg" data-amount-x="60" data-pointer-zoom="2" data-fullscreen data-responsive="scaleflex">
                          </div> */}
                  <Slider3D />
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-content">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-catagories-text"
                  >
                    Headphones
                  </a>
                  <h2 className="rbt-card-title mt--12">
                    Beats Wireless Earbuds with Charging Case - Bluetooth In-Ear
                    Headphones
                  </h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="pricing-part mt--0">
                      <del className="price-text">$295.00</del>
                      <span className="price-text">$179.98</span>
                      <span className="rbt-offer-badge rbt-offer-badge-md">
                        Save 30%
                      </span>
                    </div>
                    <div className="rbt-quick-access-banner-action-btn d-flex align-items-center">
                      <button
                        className="rbt-btn rbt-btn-xs rbt-btn-secondary d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#findStoreModal"
                      >
                        <i className="fa-regular fa-location-dot mr--4" /> Find
                        A Near Store
                      </button>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex">
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
                      <p className="rating-digit">(46)</p>
                      <span className="icon">
                        <i className="fa-sharp fa-solid fa-truck-fast" />
                      </span>
                    </div>
                    <div className="prd-info-section has-left-separator">
                      <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                        9 in Stock
                      </div>
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
                        <p className="text-bold">All Europe</p>
                        <a
                          href="#"
                          className="rbt-brand-img tooltips"
                          data-tooltip="All Europe Delivary"
                          data-tooltip-position="top"
                        >
                          <Image
                            alt="Small icon Brand"
                            src="/assets/images/icons/small-brand/sm-brand-b-02.webp"
                            width={40}
                            height={41}
                            className="image-auto"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="prd-info-section has-left-separator">
                      <div className="prd-id-text">
                        <p className="text-bold">Verified:</p>
                        <span
                          className="rbt-brand-img tooltips"
                          data-tooltip="Verified Product"
                          data-tooltip-position="top"
                        >
                          <Image
                            alt="Small icon Brand"
                            src="/assets/images/icons/small-brand/sm-brand-b-03.webp"
                            width={40}
                            height={41}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12">
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
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-shiny"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.98586 5.18652C1.93484 5.12038 1.88687 5.05807 1.84423 5.00038C2.25958 4.44469 2.71871 3.92381 3.21712 3.44281C4.28087 2.42212 5.61949 1.53911 7 1.53911C8.38051 1.53911 9.71837 2.42212 10.7829 3.44281C11.2813 3.92383 11.7404 4.44471 12.1558 5.00038C11.7402 5.55588 11.2811 6.07675 10.7829 6.55796C9.71837 7.57865 8.38051 8.46166 7 8.46166C5.61949 8.46166 4.28163 7.57865 3.21712 6.55796C2.77476 6.13114 2.36329 5.67282 1.98586 5.18652ZM13.7297 4.58042L13.0916 5.00038L13.7297 5.42035L13.7282 5.42266L13.7259 5.42574L13.7183 5.43804L13.6901 5.47958C13.5374 5.70347 13.378 5.92253 13.2119 6.13645C12.789 6.68142 12.3279 7.19501 11.8322 7.67326C10.6915 8.76779 8.98433 10 7 10C5.01566 10 3.3085 8.76779 2.16785 7.67326C1.47767 7.00644 0.855254 6.27156 0.30991 5.47958C0.300444 5.46579 0.291053 5.45194 0.281736 5.43804L0.274122 5.42574L0.271837 5.42266L0.271076 5.42112C0.271076 5.42035 0.270314 5.42035 0.908409 5.00038L0.270314 4.58042L0.271837 4.57811L0.274122 4.57503L0.281736 4.56273C0.323524 4.49897 0.366683 4.43614 0.411182 4.37428C0.932338 3.63825 1.52073 2.95324 2.16861 2.32828C3.30773 1.23144 5.01566 0 7 0C8.98433 0 10.6915 1.23221 11.8322 2.32674C12.5223 2.99355 13.1448 3.72843 13.6901 4.52042L13.7183 4.56196L13.7259 4.57426L13.7282 4.57734L13.7289 4.57888L13.7297 4.58042ZM13.0916 5.00038L13.7297 4.58042L14 5.00038L13.7297 5.42035L13.0916 5.00038ZM0.270314 4.58042L0.908409 5.00038L0.270314 5.42035L0 5.00038L0.270314 4.58042ZM6.23855 5.00038C6.23855 4.79639 6.31877 4.60075 6.46157 4.4565C6.60437 4.31225 6.79805 4.23121 7 4.23121C7.20195 4.23121 7.39563 4.31225 7.53842 4.4565C7.68122 4.60075 7.76145 4.79639 7.76145 5.00038C7.76145 5.20438 7.68122 5.40002 7.53842 5.54427C7.39563 5.68852 7.20195 5.76956 7 5.76956C6.79805 5.76956 6.60437 5.68852 6.46157 5.54427C6.31877 5.40002 6.23855 5.20438 6.23855 5.00038ZM7 2.69287C6.39415 2.69287 5.81312 2.93598 5.38472 3.36873C4.95632 3.80147 4.71565 4.38839 4.71565 5.00038C4.71565 5.61238 4.95632 6.1993 5.38472 6.63204C5.81312 7.06479 6.39415 7.3079 7 7.3079C7.60585 7.3079 8.18688 7.06479 8.61528 6.63204C9.04367 6.1993 9.28435 5.61238 9.28435 5.00038C9.28435 4.38839 9.04367 3.80147 8.61528 3.36873C8.18688 2.93598 7.60585 2.69287 7 2.69287Z"
                            fill="#24BD25"
                          />
                        </svg>
                        <p>
                          <strong>20 people are viewing this</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  <ProductOptionsPanel13 />
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
                </div>
              </div>
            </div>
            <div className="rbt-combo-prd-box rbt-bg-color-white mt--24">
              <div className="row justify-content-between">
                <div className="col-lg-2">
                  <div className="rbt-combo-title-section">
                    <i className="fa-regular fa-cube" />
                    <h5 className="rbt-title">
                      There's more in the complete bundle
                    </h5>
                  </div>
                </div>
                <div className="col-lg-10">
                  <ComboProducts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
