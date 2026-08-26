import Gallery2 from "../galleries/Gallery2";
import ProductActionPanel from "../ProductActionPanel";
import ProductOptionsPanel16 from "../productOptionsPanels/ProductOptionsPanel16";
import ProductOptionsPanelGift from "../productOptionsPanels/ProductOptionsPanelGift";

import { Product } from "@/types";
export default function DetailsStickyInfoBoth({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-xl-8 col-lg-12 mt--24">
            <div className="row row--8 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-6 col-12 mt--16 order-2 order-xl-1">
                <div className="rbt-single-product-content position-sticky sticky-top rbt-single-product-content-sticky-one">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-catagories-text"
                  >
                    Headphones
                  </a>
                  <h2 className="rbt-card-title mt--12">{product.title}</h2>
                  <p className="description-text b2 mt--16">
                    At vero eos et accusamus et iusto dignissimos ducimus
                    blanditiis praesentium voluptatu atque...
                  </p>
                  <div className="rbt-info-wrapper d-flex">
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
                          <i className="fa-solid fa-star" />
                        </li>
                      </ul>
                      <p className="rating-digit">(46)</p>
                      <span className="icon">
                        <i className="fa-sharp fa-solid fa-truck-fast" />
                      </span>
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
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <ul className="product-details-list shipment-details-list">
                    <li>
                      <span className="icon">
                        <i className="fa-sharp fa-regular fa-truck" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">
                          Estimated Delivery :
                        </span>
                        <span className="text"> 15 - 22 Nov, 2023</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-bag-shopping" />
                      </span>
                      <div className="right-content">
                        <span className="rbt-bold--text">7 Days Returns :</span>
                        <a href="#" className="shipment-quick-link">
                          Free return within 7 days of purchase
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt--16 order-1 order-xl-2">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt">
                  <div className="row row--8 mt_dec--16 align-items-center">
                    <Gallery2 cardClass="col-md-6 col-lg-12 mt--16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 mt--24 rbt-single-mobile-view-sidebar">
            <div className="rbt-single-product-content position-sticky sticky-top rbt-single-product-content-sticky-one">
              <ProductOptionsPanel16 />
              <ProductOptionsPanelGift />
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
      </div>
    </div>
  );
}
