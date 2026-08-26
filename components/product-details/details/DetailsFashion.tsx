import Image from "next/image";

import Countdown from "../../common/Countdown";
import Facts from "../../common/Facts";
import ProductActionPanel from "../ProductActionPanel";

import RecomendedProducts from "../recommandedProducts/RecomendedProducts";
import { recentlyViewed4, recommandedProducts4 } from "@/data/products/others";
import ProductOptionsPanel2 from "../productOptionsPanels/ProductOptionsPanel2";

import { Product } from "@/types";
export default function DetailsFashion({ product }: { product: Product }) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-9 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-7 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-media-area position-sticky-top rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
                    NEW
                  </div>
                  <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
                    HOT
                  </div>
                  <div className="row row--12 mt_dec--24 rbt-grid-4-variation-markup">
                    <div className="col-lg-6 col-6 mt--24 rbt-scroll-trigger fade_in animation-order-1">
                      <div className="thumbnail">
                        <a
                          href="/assets/images/product-img/fashion/fashion-a-red-01.webp"
                          data-fancybox="gallery"
                          className="rbt-product-single-img"
                        >
                          <Image
                            className="rbt-rounded--12"
                            alt="Product Images"
                            src="/assets/images/product-img/fashion/fashion-a-red-01.webp"
                            width={774}
                            height={1236}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-6 mt--24 rbt-scroll-trigger fade_in animation-order-2">
                      <div className="thumbnail">
                        <a
                          href="/assets/images/product-img/fashion/fashion-a-red-02.webp"
                          data-fancybox="gallery"
                          className="rbt-product-single-img"
                        >
                          <Image
                            className="rbt-rounded--12"
                            alt="Product Images"
                            src="/assets/images/product-img/fashion/fashion-a-red-02.webp"
                            width={776}
                            height={1236}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-6 mt--24 rbt-scroll-trigger fade_in animation-order-3">
                      <div className="thumbnail">
                        <a
                          href="/assets/images/product-img/fashion/fashion-a-red-03.webp"
                          data-fancybox="gallery"
                          className="rbt-product-single-img"
                        >
                          <Image
                            className="rbt-rounded--12"
                            alt="Product Images"
                            src="/assets/images/product-img/fashion/fashion-a-red-03.webp"
                            width={776}
                            height={1236}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-6 mt--24 rbt-scroll-trigger fade_in animation-order-4">
                      <div className="thumbnail">
                        <a
                          href="/assets/images/product-img/fashion/fashion-a-red-04.webp"
                          data-fancybox="gallery"
                          className="rbt-product-single-img"
                        >
                          <Image
                            className="rbt-rounded--12"
                            alt="Product Images"
                            src="/assets/images/product-img/fashion/fashion-a-red-04.webp"
                            width={776}
                            height={1236}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-12 mt--16">
                <div className="rbt-single-product-content rbt-product-variations">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-catagories-text"
                  >
                    Crop Tops
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0">
                        {product.oldPrice && (
                          <del className="price-text">
                            ${product.oldPrice?.toFixed(2)}
                          </del>
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
                            src="/assets/images/icons/small-brand/sm-brand-01.webp"
                            width={40}
                            height={40}
                            className="image-auto"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
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
                            d="M18.9705 14.9359C18.8146 18.8649 15.7492 22 11.9889 22C8.12897 22 4.99988 18.5858 4.99988 14.6221C4.99988 14.0924 4.99089 13.0336 5.7434 11.2472C6.19375 10.1781 6.47621 9.50646 6.63562 8.89253C6.7232 8.55511 6.89354 8.01904 7.37913 8.89253C7.66546 9.40757 7.67654 10.1483 7.67654 10.1483C7.67654 10.1483 8.74185 9.28536 9.46098 7.63673C10.5152 5.21985 9.67407 3.77512 9.38663 2.77048C9.28715 2.42294 9.22469 1.79833 9.90709 2.06409C10.6024 2.33495 12.4407 3.69334 13.4016 5.12512C14.773 7.16855 15.2604 9.128 15.2604 9.128C15.2604 9.128 15.6995 8.55268 15.8552 7.95068C16.0311 7.27089 16.0337 6.59763 16.5987 7.32285C17.136 8.01253 17.934 9.3086 18.3832 10.5408C19.1987 12.7784 18.9705 14.9359 18.9705 14.9359Z"
                            fill="url(#paint0_linear_633_389)"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9998 22C9.23839 22 6.99988 19.7944 6.99988 17.0735C6.99988 15.4318 7.67133 14.435 9.06878 13.0833C9.96354 12.2179 10.801 11.1549 11.1569 10.4311C11.227 10.2886 11.3864 9.54605 12.0013 10.4155C12.3238 10.8714 12.8294 11.6823 13.1537 12.3744C13.7126 13.5676 13.846 14.7239 13.846 14.7239C13.846 14.7239 14.3937 14.4059 14.769 13.5871C14.89 13.3232 15.1346 12.3241 15.8185 13.323C16.3202 14.0561 17.0095 15.3741 16.9998 17.0735C16.9998 19.7944 14.7612 22 11.9998 22Z"
                            fill="#FC9502"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.1018 16C12.8496 16 12.8496 17.4475 13.7995 19.3803C14.432 20.6672 13.4859 22 12.1018 22C10.7177 22 9.99988 20.8271 9.99988 19.3803C9.99988 17.9335 11.354 16 12.1018 16Z"
                            fill="#FCE202"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_633_389"
                              x1="11.9994"
                              y1="22.0148"
                              x2="11.9994"
                              y2="2.01511"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset={0} stopColor="#FF4C0D" />
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
                  <ProductOptionsPanel2 />

                  {/* Start Dynamic Color Swatches Area */}
                  <div
                    className="rbt-store-variation-controls"
                    data-variation="grid-4"
                  />

                  {/* End Dynamic Color Swatches Area */}
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
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
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
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50">
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link">
                          <li>
                            <a href="#">
                              <Image
                                alt="Payment Brand Image"
                                src="/assets/images/payment-brand/image-01.webp"
                                width={812}
                                height={64}
                              />
                            </a>
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
          </div>
          <div className="col-xl-3 col-lg-12 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts
              recentlyViewedProducts={recentlyViewed4}
              recommandedProducts={recommandedProducts4}
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
