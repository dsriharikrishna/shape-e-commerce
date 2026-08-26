"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const imageUrls = [
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
];

export default function Slider12() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-medea-lg-img-area">
        <Swiper
          {...{
            spaceBetween: 16,
            grabCursor: true,
            navigation: {
              prevEl: ".rbt-modal-arrow-sm-left",
              nextEl: ".rbt-modal-arrow-sm-right",
            },

            thumbs: {
              swiper: swiperThumb,
            },
          }}
          modules={[Navigation, Thumbs]}
          className="swiper rbt-arrow-between rbt-product-single-slider-activation rbt-arrow-show-dfl"
        >
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
            HOT
          </div>
          <button
            className="rbt-enlarge-btn position-bottom-right rbt-scroll-trigger fade_in animation-order-1"
            data-fancybox="product-single-image"
            data-src="/assets/images/product-img/fashion/product-a-03.webp"
          >
            <span className="rbt-icon">
              <i className="fa-regular fa-arrows-maximize" />
            </span>
            <span className="rbt-enlarge-text">Enlarge View</span>
          </button>
          <div className="swiper-wrapper rbt-store-thumb-main-1">
            {imageUrls.map((url, index) => {
              const isWide = url.includes("product-a-02.webp");
              const order = index + 1;
              return (
                <SwiperSlide
                  className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${order}`}
                  key={index}
                >
                  <div className="thumbnail">
                    <a
                      className="rbt-product-single-img"
                      data-fancybox="product-single-image"
                      data-src={url}
                    >
                      <Image
                        className={`${
                          isWide ? "w-200" : "w-100"
                        } rbt-rounded--12`}
                        alt="Product Images"
                        src={url}
                        width={624}
                        height={846}
                      />
                    </a>
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
      <div className="rbt-thumb-slide-part w-55">
        <Swiper
          {...{
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            grabCursor: true,
          }}
          modules={[FreeMode, Thumbs]}
          onSwiper={setSwiperThumb}
          className="swiper rbt-product-thumb-slider-activation mt--24"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {imageUrls.map((src, i) => (
              <SwiperSlide
                key={i}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  i + 1
                }`}
              >
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
