"use client";

import type { Swiper as SwiperClass } from "swiper";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useContextElement } from "@/context/Context";
import ColorSelect from "../product-details/colorSelects/ColorSelect";
import QuantitySelect from "../common/QuantitySelect";
import Facts from "../common/Facts";

const productImages = [
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
];
export default function QuickView2() {
  const [quantity, setQuantity] = useState(1);
  const [thumbSlider, setThumbSlider] = useState<SwiperClass | null>(null);
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    updateQuantity,
    addToWishlist,
    isAddedtoWishlist,

    addToCompareItem,
    isAddedToCompareItem,
    quantityInCart,
  } = useContextElement();
  const slides = useMemo(() => {
    const updatedSlides = [...productImages];
    if (quickViewItem.imgSrc) {
      updatedSlides[0] = { ...updatedSlides[0], src: quickViewItem.imgSrc };
    }
    return updatedSlides;
  }, [quickViewItem.imgSrc]);

  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="quickViewModal"
      tabIndex={-1}
      aria-labelledby="quickViewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-content-trs-portion rbt-arrow-between rbt-swiper-container-one rbt-arrow-between-lg-dis">
              {/* Start banner part */}
              <div className="swiper rbt-qs-wrapper-slide-acivation">
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide">
                    {/* Start Component Area */}
                    <div className="rbt-single-product-area">
                      <div className="row row--16">
                        <div className="col-lg-6 col-12">
                          <div className="rbt-product-view-slider rbt-single-product-media-area rbt-single-product-media-has-folder-shape">
                            <Swiper
                              className="swiper rbt-arrow-between rbt-product-single-slider-activation rbt-arrow-show-dfl"
                              modules={[Navigation, Thumbs]}
                              thumbs={{ swiper: thumbSlider }}
                              navigation={{
                                nextEl: ".rbt-modal-arrow-sm-right",
                                prevEl: ".rbt-modal-arrow-sm-left",
                              }}
                            >
                              {slides.map((image, index) => (
                                <SwiperSlide
                                  className="swiper-slide"
                                  key={index}
                                >
                                  <div className="thumbnail radius-16">
                                    <div className="rbt-product-single-img">
                                      <Image
                                        className="w-100"
                                        alt="Product Images"
                                        style={{
                                          maxHeight: "322px",
                                          objectFit: "contain",
                                        }}
                                        src={image.src}
                                        width={image.width}
                                        height={image.height}
                                      />
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                              <div
                                className="rbt-swiper-arrow rbt-modal-arrow-sm-left"
                                data-rbt-position-horigental={3}
                              >
                                <div className="custom-overflow">
                                  <i className="rbt-icon fa-regular fa-arrow-left" />
                                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                                </div>
                              </div>
                              <div
                                className="rbt-swiper-arrow rbt-modal-arrow-sm-right"
                                data-rbt-position-horigental={86}
                              >
                                <div className="custom-overflow">
                                  <i className="rbt-icon fa-regular fa-arrow-right" />
                                  <i className="rbt-icon-top fa-regular fa-arrow-right" />
                                </div>
                              </div>
                            </Swiper>
                            <Swiper
                              className="swiper rbt-product-thumb-slider-activation mt--24 mt_sm--16"
                              {...{
                                spaceBetween: 16,
                                slidesPerView: 4,
                                freeMode: true,
                                watchSlidesProgress: true,
                              }}
                              onSwiper={setThumbSlider}
                              modules={[FreeMode, Thumbs]}
                            >
                              {slides.map((elm, i) => (
                                <SwiperSlide key={i} className="swiper-slide">
                                  <button className="thumbnail d-block">
                                    <span className="rbt-thumb-img-sm">
                                      <Image
                                        alt="Product Images"
                                        src={elm.src}
                                        style={{
                                          objectFit: "cover",
                                          height: "71px",
                                        }}
                                        width={1024}
                                        height={793}
                                      />
                                    </span>
                                  </button>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                        <div className="col-lg-6 col-12 mt_sm--12 content">
                          <Link
                            href={`/shop-by-category`}
                            className="rbt-card-subtitle rbt-card-catagories-text mt--0"
                          >
                            Headphones
                          </Link>
                          <h4
                            className="rbt-card-title"
                            id="quickViewModalLabel"
                          >
                            <Link href={`/product-single-default/755`}>
                              {quickViewItem.title}
                            </Link>
                          </h4>
                          <div className="rbt-scroll-vertical-wrapper rbt-vertical-height-sm">
                            <div className="rbt-scroll-vertical content">
                              <p className="description-text b2">
                                At vero eos et accusamus et iusto dignissimos
                                ducimus blanditiis praesentium voluptatu
                                atque...
                              </p>
                              <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                                <div className="pricing-part mt--0">
                                  {quickViewItem.oldPrice && (
                                    <del className="price-text">
                                      ${quickViewItem.oldPrice.toFixed(2)}
                                    </del>
                                  )}
                                  <span className="price-text">
                                    {" "}
                                    ${quickViewItem.price.toFixed(2)}
                                  </span>
                                  <span className="rbt-offer-badge">-30%</span>
                                </div>
                                <div className="prd-info-section has-left-separator">
                                  <div className="prd-id-text">
                                    <p className="text-bold">SKU:</p>
                                    <p>HN-508801</p>
                                  </div>
                                </div>
                              </div>
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
                                <div className="prd-info-section has-left-separator">
                                  <div className="rbt-badge rbt-badge-bg-green rbt-badge-border rbt-badge-small rbt-badge-rounded">
                                    9 in Stock
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--8">
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
                                        className="image-auto"
                                        src="/assets/images/icons/small-brand/sm-brand-b-01.webp"
                                        width={78}
                                        height={48}
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
                                        className="image-auto"
                                        height={41}
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
                                        className="image-auto"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16 rbt-gap--8 flex-wrap">
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
                                      <strong>
                                        20 people are viewing this
                                      </strong>
                                    </p>
                                  </a>
                                </div>
                              </div>
                              <div className="rbt-info-wrapper d-flex mt--16">
                                <div className="prd-info-section">
                                  <div className="prd-id-text">
                                    <p className="text-bold">Color:</p>
                                    <div className="rbt-color-select-area">
                                      <ul className="rbt-switcher-color-list rbt-switcher-color-list-lg product-switcher-activation">
                                        <ColorSelect />
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
                              <div className="separator-top has-sm-spacer" />
                              <div className="product-btn-grp">
                                <div className="rbt-qty-area">
                                  <QuantitySelect
                                    quantity={
                                      quantityInCart(quickViewItem.id)
                                        ? quantityInCart(quickViewItem.id)
                                        : quantity
                                    }
                                    setQuantity={(qty) => {
                                      if (
                                        isAddedToCartProducts(quickViewItem.id)
                                      ) {
                                        updateQuantity(quickViewItem.id, qty);
                                      } else {
                                        setQuantity(qty);
                                      }
                                    }}
                                  />
                                </div>
                                <a
                                  className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#popup-cartModal"
                                  onClick={() =>
                                    addProductToCart(quickViewItem.id, quantity)
                                  }
                                >
                                  <i className="fa-regular fa-cart-shopping" />
                                  {isAddedToCartProducts(quickViewItem.id)
                                    ? "Already Added"
                                    : "Add To Cart"}
                                </a>
                              </div>
                              <div className="prd-btn-grp">
                                <a
                                  className="rbt-btn d-block text-center"
                                  href="#"
                                >
                                  Buy Now
                                </a>
                              </div>
                              <div className="rbt-quick-link-grp mt--12">
                                <button
                                  className="rbt-quick-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#compareReviewModal"
                                  type="button"
                                  onClick={() =>
                                    addToCompareItem(quickViewItem.id)
                                  }
                                >
                                  <i className="fa-sharp fa-regular fa-copy" />
                                  {isAddedToCompareItem(quickViewItem.id)
                                    ? "Already Compared"
                                    : "Compare Product"}
                                </button>
                                <button
                                  className="rbt-quick-link"
                                  data-bs-toggle="modal"
                                  data-bs-target="#wishlistModal"
                                  type="button"
                                  onClick={() =>
                                    addToWishlist(quickViewItem.id)
                                  }
                                >
                                  <i className="fa-sharp fa-regular fa-heart" />
                                  {isAddedtoWishlist(quickViewItem.id)
                                    ? "Already Wishlisted"
                                    : "Add To Wishlist"}
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
              {/* End banner part */}
              {/* Start slider navigation buttons */}
              <div className="rbt-swiper-arrow rbt-modal-arrow-left rbt-arrow-gray rbt-arrow-lg">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-left" />
                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                </div>
              </div>
              <div className="rbt-swiper-arrow rbt-modal-arrow-right rbt-arrow-gray rbt-arrow-lg">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-right" />
                  <i className="rbt-icon-top fa-regular fa-arrow-right" />
                </div>
              </div>
              {/* End slider navigation buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
