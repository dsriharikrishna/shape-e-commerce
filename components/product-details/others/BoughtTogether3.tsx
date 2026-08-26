"use client";

import ProductCard7 from "@/components/productCards/ProductCard7";
import { phoneProducts } from "@/data/products/phone";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether3() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-primary-stroke rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h4 className="rbt-title">
                  <span className="rbt-bold--text">
                    Frequently Bought Together
                  </span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={52}
                    height={50}
                    viewBox="0 0 52 50"
                    fill="none"
                  >
                    <path
                      d="M51.5337 49.984C-64.8544 49.9977 116.427 49.9764 0.0390625 49.9901C0.0390625 31.262 0.0390625 20.7619 0.0390625 2.03378C11.2391 1.63419 16.5034 4.56468 19.5034 10.5602L30.0034 38.5311C34.0374 47.934 45.4209 49.4481 51.5337 49.984Z"
                      fill="var(--color-white)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.246 1.97519C16.582 3.50685 18.8114 5.90944 20.3979 9.07997L20.4213 9.12681L30.9315 37.1248C33.053 42.053 36.807 44.7979 40.7367 46.3047C44.6934 47.8219 48.798 48.068 51.4731 47.987C51.4731 47.987 51.51 49.2041 51.5337 49.984C48.7087 50.0695 44.3134 49.8162 40.02 48.17C35.7052 46.5155 31.4643 43.4388 29.0842 37.891L29.0751 37.8698C29.0751 37.8698 19.997 12.7279 18.5857 9.92689C17.1743 7.12591 15.2591 5.09828 12.4108 3.79055C8.49554 1.49902 0.0390625 2.03378 0.0390625 2.03378C0.0390625 20.7619 0.0390625 31.262 0.0390625 49.9901L0.0408325 0.0348727C5.70805 -0.16568 9.9493 0.461575 13.246 1.97519Z"
                      fill="var(--color-primary)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
            {/* Start Card Area */}
            <div className="row row--12">
              <div className="col-md-12 col-12">
                <div className="rbt-swiper-container-one rbt-arrow-between rbt-progress-bottom">
                  <Swiper
                    className="swiper rbt-phone-prd-activation-1"
                    {...{
                      slidesPerView: 1.3,
                      slidesPerGroup: 1,
                      spaceBetween: 24,
                      loop: true,
                      autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      },
                      pagination: {
                        el: ".rbt-swiper-progress",
                        type: "progressbar",
                      },
                      navigation: {
                        prevEl: ".rbt-arrow-left",
                        nextEl: ".rbt-arrow-right",
                      },
                      breakpoints: {
                        575: {
                          slidesPerView: 1.3,
                        },
                        768: {
                          slidesPerView: 2.3,
                        },
                        992: {
                          slidesPerView: 2.6,
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                  >
                    {phoneProducts.map((product, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <ProductCard7 product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-left" />
                      <i className="rbt-icon-top fa-regular fa-arrow-left" />
                    </div>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-right" />
                      <i className="rbt-icon-top fa-regular fa-arrow-right" />
                    </div>
                  </div>
                  <div className="rbt-swiper-progress" />
                </div>
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
