"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/types";
const earphoneImages = [
  {
    src: "/assets/images/product-single/earphone/earphone-05.webp",
    width: 1072,
    height: 824,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-04.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-03.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-02.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-01.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-04.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-03.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-02.webp",
    width: 1072,
    height: 825,
  },
];

export default function Slider1({ product }: { product: Product }) {
  earphoneImages[0].src = product.imgSrc;
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <div className="rbt-single-product-media-area position-sticky-top rbt-single-product-media-has-folder-shape d-flex row row--12 rbt-gap--0">
      <div className="col-lg-1-5 col-lg-2 order-2 order-lg-1">
        <div className="swiper product-single-slider-two-thumb-activation rbt-arrow-show-dfl rbt-thumb-has-bg-shape-overlay rbt-swiper-right-bottom-one rbt-arrow-between rbt-swiper-arrow-transparent">
          <Swiper
            className="swiper-wrapper rbt-store-thumb-variation-1"
            style={{ maxHeight: "457px", overflow: "hidden" }}
            onSwiper={setSwiperThumb}
            modules={[Thumbs, Navigation]}
            {...{
              direction: "vertical",
              slidesPerView: 3,
              spaceBetween: 12,
              breakpoints: {
                0: {
                  direction: "horizontal",
                  slidesPerView: 4,
                },
                992: {
                  direction: "vertical",
                  slidesPerView: 4,
                },
              },
            }}
            navigation={{ nextEl: ".tnn1" }}
          >
            {earphoneImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <button
                  className="thumbnail d-block position-relative "
                  style={{
                    overflow: "hidden",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <span className="rbt-thumb-img-sm">
                    <Image
                      alt="Product Images"
                      src={image.src}
                      width={1072}
                      height={824}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rbt-swiper-arrow rbt-arrow-right tnn1">
            <i className="fa-regular fa-chevron-down" />
          </div>
        </div>
      </div>
      <div className="col-lg-4-5 col-lg-10 order-1 order-lg-2">
        <div className="swiper rbt-medea-lg-img-area-md-wider product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl">
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
            HOT
          </div>
          <button
            className="rbt-enlarge-btn position-bottom-right"
            data-fancybox="product-single-image"
            data-src="/assets/images/product-single/earphone/earphone-05.webp"
          >
            <span className="rbt-icon">
              <i className="fa-regular fa-arrows-maximize" />
            </span>
            <span className="rbt-enlarge-text">Enlarge View</span>
          </button>
          <Swiper
            className="swiper-wrapper rbt-store-thumb-main-1"
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: swiperThumb }}
            {...{
              spaceBetween: 24,
              loop: true,

              navigation: {
                prevEl: ".snbsp1",
                nextEl: ".snbsn1",
              },
            }}
          >
            {earphoneImages.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <div className="thumbnail">
                  <div className="rbt-product-single-img">
                    <Image
                      className="w-100"
                      data-fancybox="product-single-image"
                      alt="Product Images"
                      src={image.src}
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rbt-swiper-arrow rbt-arrow-left snbsp1">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-left" />
              <i className="rbt-icon-top fa-regular fa-arrow-left" />
            </div>
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-right snbsn1">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-right" />
              <i className="rbt-icon-top fa-regular fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
