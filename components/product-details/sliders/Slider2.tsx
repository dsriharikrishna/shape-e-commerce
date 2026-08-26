"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Product } from "@/types";
const productImages = [
  "/assets/images/product-img/furniture/product-a-01.webp",
  "/assets/images/product-img/furniture/product-a-02.webp",
  "/assets/images/product-img/furniture/product-a-03.webp",
  "/assets/images/product-img/furniture/product-a-04.webp",
  "/assets/images/product-img/furniture/product-a-03.webp",
  "/assets/images/product-img/furniture/product-a-04.webp",
  "/assets/images/product-img/furniture/product-a-02.webp",
  "/assets/images/product-img/furniture/product-a-03.webp",
];

export default function Slider2({ product }: { product: Product }) {
  productImages[0] = product.imgSrc;
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt position-sticky-top d-flex rbt-gap--24">
      <div className="rbt-thumb-slide-part">
        <Swiper
          onSwiper={setSwiperThumb}
          modules={[Thumbs, Navigation]}
          {...{
            direction: "vertical",

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
          className="swiper product-single-slider-two-thumb-activation thumb-height-var-two rbt-thumb-has-bg-shape-overlay rbt-arrow-show-dfl rbt-swiper-right-bottom-one rbt-arrow-between rbt-swiper-arrow-transparent"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {productImages.map((image, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <button className="h-100 w-100 thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={image}
                      width={1072}
                      height={824}
                      style={{
                        maxHeight: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-right tnn1">
            <i className="fa-regular fa-chevron-down" />
          </div>
        </Swiper>
        <hr className="rbt-separator mt--16 d-none d-lg-block mb--16 rbt-scroll-trigger fade_in animation-order-9" />
        <div className="rbt-video-thumb-wrapper rbt-scroll-trigger fade_in animation-order-10 max-w-auto">
          <button
            className="rbt-video-thumb"
            data-fancybox="product-single-gallary-video"
            data-src="https://www.youtube.com/embed/DR9lxZ8kPYQ?si=-GMJDUfCEd9YhyXR"
          >
            <Image
              alt="Thumbnail"
              src="/assets/images/product-img/furniture/product-b-04.webp"
              width={1072}
              height={824}
            />
            <span className="rbt-icon">
              <i className="fa-solid fa-play" />
            </span>
          </button>
          <p className="b4 mb--0 mt--4 rbt-text-medium rbt-text-color-heading text-center">
            5 VIDEOS
          </p>
        </div>
      </div>
      <div className="rbt-medea-lg-img-area w-82">
        <Swiper
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
          className="swiper product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl rbt-arrow-bottom-right"
        >
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
            HOT
          </div>
          <div className="swiper-wrapper rbt-store-thumb-main-1">
            {productImages.map((src, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="thumbnail">
                  <div
                    className="rbt-product-single-img"
                    data-fancybox="product-single-gallary"
                    data-src={src}
                  >
                    <Image
                      className="w-100 rbt-rounded--12"
                      alt="Product Images"
                      src={src}
                      width={1072}
                      height={824}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
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
        </Swiper>
      </div>
    </div>
  );
}
