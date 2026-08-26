"use client";
import Link from "next/link";
import Image from "next/image";
import ProductCard8 from "@/components/productCards/ProductCard8";
import { catAccessories } from "@/data/products/accessories";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether4() {
  return (
    <div className="rbt-component-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">
                  Frequently Bought Together
                </span>
              </h4>
            </div>
            <Link
              className="rbt-btn-link link rbt-btn-text-color-primary d-flex rbt-text-medium rbt-gap--4 mt--8 justify-content-center rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop`}
            >
              <span className="btn-text">View All Products</span>
              <span className="btn-icon">
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12">
          <div className="col-md-12">
            <div className="rbt-swiper-container-one rbt-arrow-between">
              <Swiper
                className="swiper rbt-fashion-prd-card-activation-1-v1 rbt-dot-bottom-center"
                {...{
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                  loop: true,
                  pagination: {
                    el: ".rbt-swiper-pagination, .abc",
                    clickable: true,
                    dynamicBullets: true,
                  },
                  navigation: {
                    prevEl: ".rbt-arrow-left",
                    nextEl: ".rbt-arrow-right",
                  },
                  breakpoints: {
                    575: {
                      slidesPerView: 1.8,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2.8,
                      slidesPerGroup: 1,
                    },
                    992: {
                      slidesPerView: 2.8,
                      slidesPerGroup: 1,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 1,
                    },
                  },
                }}
                modules={[Pagination, Navigation]}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="rbt-card rbt-product-card rbt-scroll-trigger fade_in animation-order-1">
                      <div className="rbt-card-img rbt-rounded--12 rbt-scroll-trigger zoom_in animation-order-1">
                        <Link href={`/product-single-default`}>
                          <Image
                            alt="Card Image"
                            src="/assets/images/product-img/animal-accessories/cat-toys-a-01.webp"
                            width={800}
                            height={800}
                          />
                        </Link>
                        <div className="rbt-product-badge rbt-product-badge-bg-primary rbt-badge-top-left--position">
                          SALE
                        </div>
                        <div className="rbt-quick-btn-grp has-mixup-midlayer rbt-top-right--position hover-variation-one">
                          <button
                            className="rbt-wishlist-btn bg-light-one rbt-quick-btn tooltips"
                            type="button"
                            data-tooltip="Add to wishlist"
                            data-tooltip-position="left"
                          >
                            <i className="fa-regular fa-heart" />
                          </button>
                          <button
                            className="rbt-compare-btn bg-light-one rbt-quick-btn tooltips"
                            data-tooltip="Add to Compare"
                            data-tooltip-position="left"
                            type="button"
                          >
                            <i className="fa-regular fa-scale-balanced" />
                          </button>
                          <button
                            className="rbt-watch-btn bg-light-one rbt-quick-btn tooltips"
                            data-tooltip="Quick View"
                            data-tooltip-position="left"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fa-sharp fa-regular fa-eye" />
                          </button>
                        </div>
                        <a
                          className="rbt-btn hover-appear-element bottom-position text-center rbt-btn-sm rbt-square-btn d-block has-left-icon rbt-cart-sidenav-activation"
                          href="#"
                        >
                          <i className="fa-regular fa-cart-shopping" /> Add To
                          Cart
                        </a>
                      </div>
                      <div className="rbt-card-body rbt-card-body-center-align">
                        <a
                          href="#"
                          className="rbt-card-subtitle rbt-card-catagories-text"
                        >
                          Cat Feed
                        </a>
                        <h6 className="rbt-card-title">
                          <Link href={`/product-single-default`}>
                            Royal Canin Puppy Growth Formula
                          </Link>
                        </h6>
                        <div className="rbt-card-rating">
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
                          <p className="rating-digit">(25)</p>
                          <span className="icon">
                            <i className="fa-sharp fa-solid fa-truck-fast" />
                          </span>
                        </div>
                        <div className="pricing-part">
                          <del className="price-text">$295.00</del>
                          <span className="price-text">$179.98</span>
                          <span className="rbt-offer-badge">-30%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {catAccessories.map((product) => (
                    <SwiperSlide className="swiper-slide">
                      <ProductCard8 product={product} />
                    </SwiperSlide>
                  ))}
                </div>
                <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe" />
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
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
