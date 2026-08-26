import Image from "next/image";
import Link from "next/link";
import Facts from "../common/Facts";
export default function WelcomeBanner() {
  return (
    <div
      className="rbt-product-restock-modal-area rbt-default-modal modal fade"
      id="welcomebannerModal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-0">
          <div className="modal-header">
            <div className="rbt-welcome-text-area">
              <h5 className="rbt-title rbt-welcome-title-header">
                🎉 Welcome back Andrew Saimond!!
              </h5>
              <p className="rbt-description">
                Just in time for summer! The awesome new Super vertical is now
                in our stock!
              </p>
            </div>
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          {/* Start Component Area */}
          <div className="rbt-single-product-area rbt-bg-color-white p--32 rbt-rounded--12 p_sm--16">
            <div className="row row--16">
              <div className="col-lg-6 col-12">
                <div className="rbt-product-view-slider rbt-single-product-media-area rbt-single-product-media-has-folder-shape">
                  <div className="swiper rbt-arrow-between rbt-product-single-slider-activation rbt-arrow-show-dfl">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp"
                              width={1026}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp"
                              width={1024}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail radius-16">
                          <div className="rbt-product-single-img">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp"
                              width={1026}
                              height={793}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-swiper-arrow rbt-arrow-left">
                      <div className="custom-overflow">
                        <i className="rbt-icon fa-regular fa-arrow-left" />
                        <i className="rbt-icon-top fa-regular fa-arrow-left" />
                      </div>
                    </div>
                    <div className="rbt-swiper-arrow rbt-arrow-right">
                      <div className="custom-overflow">
                        <i className="rbt-icon fa-regular fa-arrow-right" />
                        <i className="rbt-icon-top fa-regular fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper rbt-product-thumb-slider-activation mt--24">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp"
                              width={1026}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp"
                              width={1024}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                      <div className="swiper-slide">
                        <button className="thumbnail d-block">
                          <span className="rbt-thumb-img-sm">
                            <Image
                              className="w-100"
                              alt="Product Images"
                              src="/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp"
                              width={1026}
                              height={793}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 content">
                <Link
                  href={`/shop-by-category`}
                  className="rbt-card-subtitle rbt-card-catagories-text mt--0"
                >
                  Headphones
                </Link>
                <h4 className="rbt-card-title">
                  <Link href={`/product-single-default/755`}>
                    G244F 23.8 inch FHD 4k Rapid IPS 170Hz Super Vertical
                  </Link>
                </h4>
                <div className="rbt-scroll-vertical-wrapper rbt-vertical-height-sm">
                  <div className="rbt-scroll-vertical content">
                    <p className="description-text b2">
                      At vero eos et accusamus et iusto dignissimos ducimus
                      blanditiis praesentium voluptatu atque...
                    </p>
                    <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                      <div className="pricing-part mt--0">
                        <del className="price-text">$295.00</del>
                        <span className="price-text">$179.98</span>
                        <span className="rbt-offer-badge">-30%</span>
                      </div>
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">SKU:</p>
                          <p>HN-508801</p>
                        </div>
                        <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                          9 in Stock
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--24">
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
                    <div className="rbt-info-wrapper d-flex mt--24">
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">Brand:</p>
                          <Link
                            href={`/shop-by-brands`}
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
                          </Link>
                        </div>
                      </div>
                      <div className="prd-info-section has-left-separator">
                        <div className="prd-id-text">
                          <p className="text-bold">All Europe</p>
                          <Link
                            href={`/shop-by-brands`}
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
                          </Link>
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
                    <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
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
                    <div className="rbt-info-wrapper d-flex mt--24">
                      <div className="prd-info-section">
                        <div className="prd-id-text">
                          <p className="text-bold">Color:</p>
                          <div className="rbt-color-select-area">
                            <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-one"
                                  data-switcher-color="#2B2B2B"
                                  data-src="/assets/images/product-single/earphone/earphone-05.webp"
                                  data-tooltip="Black"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li className="active">
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-two"
                                  data-switcher-color="#cc999d"
                                  data-src="/assets/images/product-single/earphone/earphone-02.webp"
                                  data-tooltip="Pink"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-three"
                                  data-switcher-color="#9C9B9E"
                                  data-src="/assets/images/product-single/earphone/earphone-04.webp"
                                  data-tooltip="Dark"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-four"
                                  data-switcher-color="#F2EDE7"
                                  data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                  data-tooltip="White"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                              <li>
                                <a
                                  className="rbt-switcher--color tooltips rbt-switcher--color-five rbt-switcher--disable disabled"
                                  data-switcher-color="#a09fa4"
                                  data-src="/assets/images/product-single/earphone/earphone-03.webp"
                                  data-tooltip="Gray"
                                  data-tooltip-position="top"
                                  href="#"
                                >
                                  <div className="rbt-color-circle" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--16">
                      <div className="product-styles-grp d-flex mt--0">
                        <p className="text-bold title">Style :</p>
                        <div className="content d-flex flex-wrap">
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn active"
                            href="#"
                          >
                            Headphones Only
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Charging Stand
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm disabled"
                            href="#"
                          >
                            Headphones + Charging Stand
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-info-wrapper d-flex mt--20">
                      <div className="product-styles-grp d-flex mt--0">
                        <p className="text-bold title">Items :</p>
                        <div className="content d-flex flex-wrap">
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Charger
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Audio Port
                          </a>
                          <a
                            className="rbt-btn rbt-btn-border rbt-btn-sm rbt-square-btn"
                            href="#"
                          >
                            Type C Jack
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="separator-top has-sm-spacer" />
                    <div className="product-btn-grp">
                      <div className="rbt-qty-area">
                        <button className="qty-item-btn qty-item-btn-decr">
                          <i className="fa-solid fa-minus" />
                        </button>
                        <input
                          type="number"
                          className="items-qty-input"
                          defaultValue={"05"}
                          min={"01"}
                        />
                        <button className="qty-item-btn qty-item-btn-incr">
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                      <a
                        className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#popup-cartModal"
                      >
                        <i className="fa-regular fa-cart-shopping" /> Add To
                        Cart
                      </a>
                    </div>
                    <div className="prd-btn-grp">
                      <a className="rbt-btn d-block text-center" href="#">
                        Buy Now
                      </a>
                    </div>
                    <div className="rbt-quick-link-grp mt--12">
                      <button
                        className="rbt-quick-link"
                        data-bs-toggle="modal"
                        data-bs-target="#compareReviewModal"
                        type="button"
                      >
                        <i className="fa-sharp fa-regular fa-copy" />
                        Compare Product
                      </button>
                      <button
                        className="rbt-quick-link"
                        data-bs-toggle="modal"
                        data-bs-target="#wishlistModal"
                        type="button"
                      >
                        <i className="fa-sharp fa-regular fa-heart" />
                        Add To Wishlist
                      </button>
                      <button
                        className="rbt-quick-link"
                        data-bs-toggle="modal"
                        data-bs-target="#socialShareModal"
                        type="button"
                      >
                        <i className="fa-sharp fa-regular fa-share-nodes" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Component Area */}
        </div>
      </div>
    </div>
  );
}
