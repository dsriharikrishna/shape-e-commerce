"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const luggageBagImageSrcs = [
  "/assets/images/product-img/fashion/laggage-bag-a-01.webp",
  "/assets/images/product-img/fashion/laggage-bag-a-02.webp",
  "/assets/images/product-img/fashion/laggage-bag-a-03.webp",
  "/assets/images/product-img/fashion/laggage-bag-a-04.webp",
  "/assets/images/product-img/fashion/laggage-bag-common.webp",
];

export default function Slider8() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-medea-lg-img-area">
        <Swiper
          {...{
            spaceBetween: 16,
            breakpoints: {
              575: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            },
            navigation: {
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            },
            thumbs: {
              swiper: swiperThumb,
            },
          }}
          modules={[Navigation, Thumbs]}
          className="swiper rbt-arrow-between rbt-product-single-slider-twolayout-activation rbt-arrow-show-dfl"
        >
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
            HOT
          </div>
          <div className="swiper-wrapper rbt-store-thumb-main-1">
            {luggageBagImageSrcs.map((src, index) => (
              <SwiperSlide
                className="swiper-slide rbt-scroll-trigger fade_in animation-order-1"
                key={index}
              >
                <div className="thumbnail">
                  <div
                    className="rbt-product-single-img"
                    data-fancybox="product-single-gallary"
                    data-src={src}
                  >
                    <Image
                      className={`${
                        src.includes("laggage-bag-a-04") ? "w-200" : "w-100"
                      } rbt-rounded--12`}
                      alt="Product Images"
                      src={src}
                      width={848}
                      height={1151}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
        </Swiper>
      </div>
      <div className="rbt-thumb-slide-part w-48">
        <Swiper
          {...{
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
              0: {
                direction: "horizontal",
                slidesPerView: 4,
              },
              992: {
                direction: "horizontal",
                slidesPerView: 4,
              },
            },
          }}
          onSwiper={setSwiperThumb}
          modules={[Thumbs, FreeMode]}
          className="swiper rbt-product-thumb-slider-twolayout-activation mt--24 mt_sm--12 mlr--0 w-82"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {luggageBagImageSrcs.map((src, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide rbt-scroll-trigger fade_in animation-order-1"
              >
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={src}
                      width={848}
                      height={1151}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
