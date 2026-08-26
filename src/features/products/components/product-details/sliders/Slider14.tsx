"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const imageList = [
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
];

export default function Slider14() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-medea-lg-img-area">
        <Swiper
          {...{
            spaceBetween: 24,
            breakpoints: {
              575: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            },
            navigation: {
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            },
            thumbs: {
              swiper: swiperThumb,
            },
            modules: [Thumbs, Navigation],
          }}
          className="swiper rbt-arrow-between rbt-product-single-slider-threelayout-activation rbt-arrow-show-dfl"
        >
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
            HOT
          </div>
          <div className="swiper-wrapper rbt-store-thumb-main-1">
            {imageList.map((url, index) => {
              const isW200 = url.includes("product-a-02.webp");

              return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="thumbnail">
                    <div
                      className="rbt-product-single-img"
                      data-fancybox="product-single-gallary"
                      data-src={url}
                    >
                      <Image
                        className={`${
                          isW200 ? "w-200" : "w-100"
                        } rbt-rounded--12`}
                        alt="Product Images"
                        src={url}
                        width={624}
                        height={846}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
      <div className="rbt-thumb-slide-part has-right-bg-shape w-55">
        <Swiper
          modules={[Thumbs, FreeMode]}
          onSwiper={setSwiperThumb}
          {...{
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            loop: true,
            watchSlidesProgress: true,
            breakpoints: {
              0: {
                direction: "horizontal",
                slidesPerView: 4,
              },
              992: {
                direction: "horizontal",
                slidesPerView: 8,
                loop: true,
              },
            },
          }}
          className="swiper rbt-product-thumb-slider-threelayout-activation mt--24"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {imageList.map((src, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={src}
                      width={624}
                      height={846}
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
