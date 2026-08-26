"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import CompareItemLength from "../common/CompareItemLength";
import WishlistLength from "../common/WishlistLength";
import CartItemsLength from "../common/CartItemsLength";
import CartItemsTotal from "../common/CartItemsTotal";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchDropdown from "./headerComponents/SearchDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/hooks/useSticky";

export default function Header22({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-9">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-bg-color-primary">
          <div className="rbt-corner-portion-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="inner justify-content-center">
                    <TopbarSwiper position="start" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-close position-right">
            <TopbarRemover />
          </div>
        </div>
        <div className="rbt-wrapper-middle rbt-header-middle-one @@has-bg-transparent">
          <div className="container">
            <div className="mainbar-row @@navigationEnd align-items-center">
              <div className="header-left">
                <div className="rbt-header-content rbt-gap--32">
                  {/* Start Mobile-Menu-Bar */}
                  <div className="mobile-menu-bar d-block d-xl-none">
                    <div className="hamburger">
                      <MobileMenuToggler />
                    </div>
                  </div>
                  {/* Start Mobile-Menu-Bar */}
                  <div className="header-info">
                    <div className="logo">
                      <Link href={`/`}>
                        <Image
                          alt="Ecommerce Logo Images"
                          src="/assets/images/logo/logo.webp"
                          width={1487}
                          height={334}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="header-info p-0 d-none d-xl-flex rbt-category-update rbt-category-update-var-modern">
                    <Link
                      className="rbt-btn-transparent has-bg-shape-hover"
                      href={`/shop-by-categories`}
                    >
                      <i className="fa-solid fa-bars" />
                      <span>Shop by Categories</span>
                    </Link>
                    {/* Start Update Cart Dropdown  */}
                    <div className="rbt-update-category-dropdown">
                      <div className="inner">
                        <ul className="rbt-dropdown-parent-wrapper">
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-house-chimney" />
                              </span>
                              Home &amp; Garden
                              <span className="rbt-chevron-right">
                                <i className="fa-regular fa-chevron-right" />
                              </span>
                            </Link>
                            <div className="rbt-dropdown-child-wrapper rbt-dropdown-child-wrapper-lg">
                              <div className="rbt-child-inner">
                                {/* Start Catagory Mega Menu*/}
                                <div className="rbt-megamenu grid-item-2">
                                  <div className="rbt-megamenu-wrapper">
                                    <div className="row row--16">
                                      <div className="col-lg-6 col-xl-7 col-xxl-7">
                                        <div className="row row--16">
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                            <h6 className="rbt-short-title">
                                              Home &amp; Garden
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Furniture
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Living Room Sets
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Sofas &amp; Couches
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Coffee Tables
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Bedroom Furniture
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Mattresses &amp; Bedding
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Wardrobes &amp; Storage
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-2">
                                            <h6 className="rbt-short-title">
                                              More Home &amp; Garden
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Home Decor
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Clocks &amp; Mirrors
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Curtains &amp; Blinds
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Rugs &amp; Carpets
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Lighting &amp; Lamps
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Outdoor Furniture
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  BBQ &amp; Grills
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-12">
                                            <div className="rbt-quick-info-tag d-flex mt--16">
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
                                                  d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                                                  fill="url(#paint0_linear_47_23647)"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                                                  fill="#FC9502"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                                                  fill="#FCE202"
                                                />
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_47_23647"
                                                    x1="11.9995"
                                                    y1="22.0148"
                                                    x2="11.9995"
                                                    y2="2.01511"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FF4C0D"
                                                    />
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FC9502"
                                                    />
                                                  </linearGradient>
                                                </defs>
                                              </svg>
                                              <p>
                                                <strong>
                                                  Free Express Shipping
                                                </strong>
                                                on orders $200!
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-xl-5 col-xxl-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <div className="rbt-menu-offer-card">
                                          <div className="mega-top-banner rbt-bg-color-extra-six">
                                            <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                              <div className="rbt-banner-content">
                                                <h5 className="title">
                                                  All For Garden
                                                </h5>
                                                <p className="b3 desc">
                                                  Send your idea, appear
                                                  Unimart.
                                                </p>
                                              </div>
                                              <Link
                                                className="rbt-btn rbt-btn-sm rbt-btn-black"
                                                href={`/product-single-default/755`}
                                              >
                                                View Details
                                              </Link>
                                              <a
                                                href="#"
                                                className="product-img position-bottom mt--24"
                                              >
                                                <Image
                                                  alt="Ecommerce Product"
                                                  src="/assets/images/splash/menu-banner/menu-prd-garden.webp"
                                                  width={518}
                                                  height={424}
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Catagory Mega Menu*/}
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-mobile-notch" />
                              </span>
                              Smart Phones
                              <span className="rbt-chevron-right">
                                <i className="fa-regular fa-chevron-right" />
                              </span>
                            </Link>
                            <div className="rbt-dropdown-child-wrapper rbt-dropdown-child-wrapper-lg">
                              <div className="rbt-child-inner">
                                {/* Start Catagory Mega Menu*/}
                                <div className="rbt-megamenu grid-item-2">
                                  <div className="rbt-megamenu-wrapper">
                                    <div className="row row--16">
                                      <div className="col-lg-6 col-xl-7 col-xxl-7">
                                        <div className="row row--16">
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                            <h6 className="rbt-short-title">
                                              Smart Phones
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Latest Models
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  5G Phones
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Android Phones
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  iPhones
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Gaming Phones
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Budget Phones
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Accessories
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-2">
                                            <h6 className="rbt-short-title">
                                              Tablets &amp; Accessories
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Latest Tablets
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Android Tablets
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  iPads
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Tablet Keyboards
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Stylus Pens
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Screen Protectors
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Tablet Cases
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-12">
                                            <div className="rbt-quick-info-tag d-flex mt--16">
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
                                                  d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                                                  fill="url(#paint0_linear_47_23648)"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                                                  fill="#FC9502"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                                                  fill="#FCE202"
                                                />
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_47_23648"
                                                    x1="11.9995"
                                                    y1="22.0148"
                                                    x2="11.9995"
                                                    y2="2.01511"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FF4C0D"
                                                    />
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FC9502"
                                                    />
                                                  </linearGradient>
                                                </defs>
                                              </svg>
                                              <p>
                                                <strong>
                                                  Free Express Shipping
                                                </strong>
                                                on orders $200!
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-xl-5 col-xxl-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                                          <div className="mega-top-banner">
                                            <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                              <div className="rbt-banner-content">
                                                <h5 className="title rbt-text-color-white">
                                                  Apple 16 Pro
                                                </h5>
                                                <p className="b3 desc rbt-text-color-gray-200">
                                                  Send your idea, appear
                                                  Unimart.
                                                </p>
                                              </div>
                                              <a
                                                className="rbt-btn rbt-btn-sm"
                                                href="#"
                                              >
                                                View Details
                                              </a>
                                              <a
                                                href="#"
                                                className="product-img position-bottom mt--24"
                                              >
                                                <Image
                                                  alt="Ecommerce Product"
                                                  src="/assets/images/splash/menu-banner/menu-prd-apple.webp"
                                                  width={520}
                                                  height={408}
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Catagory Mega Menu*/}
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-desktop" />
                              </span>
                              Electronics Gadgets
                              <span className="rbt-chevron-right">
                                <i className="fa-regular fa-chevron-right" />
                              </span>
                            </Link>
                            <div className="rbt-dropdown-child-wrapper rbt-dropdown-child-wrapper-lg">
                              <div className="rbt-child-inner">
                                {/* Start Catagory Mega Menu*/}
                                <div className="rbt-megamenu grid-item-2">
                                  <div className="rbt-megamenu-wrapper">
                                    <div className="row row--16">
                                      <div className="col-lg-6 col-xl-7 col-xxl-7">
                                        <div className="row row--16">
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                            <h6 className="rbt-short-title">
                                              Wearable Tech
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Smartwatches
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Fitness Trackers
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  VR &amp; AR Headsets
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Smart Glasses
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Sleep Trackers
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Wearable Cameras
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Wireless Earbuds
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-6 col-xl-6 col-xxl-6 single-mega-item rbt-scroll-trigger fade_in animation-order-2">
                                            <h6 className="rbt-short-title">
                                              Smart Home &amp; Office
                                            </h6>
                                            <ul className="mega-menu-item">
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Smart Speakers
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Smart Plugs &amp; Lights
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Home Security Systems
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Streaming Devices
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  External Monitors
                                                </Link>
                                              </li>
                                              <li>
                                                <Link
                                                  href={`/shop-by-category`}
                                                >
                                                  Portable Projectors
                                                </Link>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-lg-12">
                                            <div className="rbt-quick-info-tag d-flex mt--16">
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
                                                  d="M18.9706 14.9359C18.8148 18.8649 15.7493 22 11.9891 22C8.12909 22 5 18.5858 5 14.6221C5 14.0924 4.99101 13.0336 5.74352 11.2472C6.19387 10.1781 6.47633 9.50646 6.63574 8.89253C6.72333 8.55511 6.89367 8.01904 7.37926 8.89253C7.66559 9.40757 7.67666 10.1483 7.67666 10.1483C7.67666 10.1483 8.74197 9.28536 9.4611 7.63673C10.5153 5.21985 9.67419 3.77512 9.38675 2.77048C9.28727 2.42294 9.22481 1.79833 9.90721 2.06409C10.6025 2.33495 12.4408 3.69334 13.4017 5.12512C14.7732 7.16855 15.2605 9.128 15.2605 9.128C15.2605 9.128 15.6997 8.55268 15.8553 7.95068C16.0312 7.27089 16.0338 6.59763 16.5988 7.32285C17.1361 8.01253 17.9341 9.3086 18.3833 10.5408C19.1989 12.7784 18.9706 14.9359 18.9706 14.9359Z"
                                                  fill="url(#paint0_linear_47_23649)"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M11.9999 22C9.23852 22 7 19.7944 7 17.0735C7 15.4318 7.67145 14.435 9.0689 13.0833C9.96366 12.2179 10.8011 11.1549 11.157 10.4311C11.2271 10.2886 11.3866 9.54605 12.0014 10.4155C12.3239 10.8714 12.8296 11.6823 13.1538 12.3744C13.7127 13.5676 13.8461 14.7239 13.8461 14.7239C13.8461 14.7239 14.3938 14.4059 14.7692 13.5871C14.8902 13.3232 15.1348 12.3241 15.8186 13.323C16.3204 14.0561 17.0097 15.3741 16.9999 17.0735C16.9999 19.7944 14.7613 22 11.9999 22Z"
                                                  fill="#FC9502"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M12.1019 16C12.8497 16 12.8497 17.4475 13.7996 19.3803C14.4321 20.6672 13.486 22 12.1019 22C10.7178 22 10 20.8271 10 19.3803C10 17.9335 11.3541 16 12.1019 16Z"
                                                  fill="#FCE202"
                                                />
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_47_23649"
                                                    x1="11.9995"
                                                    y1="22.0148"
                                                    x2="11.9995"
                                                    y2="2.01511"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FF4C0D"
                                                    />
                                                    <stop
                                                      offset={1}
                                                      stopColor="#FC9502"
                                                    />
                                                  </linearGradient>
                                                </defs>
                                              </svg>
                                              <p>
                                                <strong>
                                                  Free Express Shipping
                                                </strong>
                                                on orders $200!
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-xl-5 col-xxl-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                        <div className="rbt-menu-offer-card rbt-bg-color-brand-50 rbt-rounded--12">
                                          <div className="mega-top-banner">
                                            <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                              <div className="rbt-banner-content">
                                                <h5 className="title">
                                                  Straps of Colors
                                                </h5>
                                                <p className="b3 desc">
                                                  Send your idea, appear
                                                  Unimart.
                                                </p>
                                              </div>
                                              <Link
                                                className="rbt-btn rbt-btn-sm rbt-btn-black"
                                                href={`/product-single-default/755`}
                                              >
                                                View Details
                                              </Link>
                                              <a
                                                href="#"
                                                className="product-img position-bottom mt--24"
                                              >
                                                <Image
                                                  alt="Ecommerce Product"
                                                  src="/assets/images/splash/menu-banner/menu-prd-02-lg.webp"
                                                  width={520}
                                                  height={424}
                                                />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* End Catagory Mega Menu*/}
                              </div>
                            </div>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-shirt" />
                              </span>
                              Fashion Wear
                            </Link>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-camera" />
                              </span>
                              Cameras &amp; Photo
                            </Link>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-cauldron" />
                              </span>
                              Cooking Items
                            </Link>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/shop-by-categories`}>
                              <span>
                                <i className="fa-regular fa-heart-pulse" />
                              </span>
                              Health &amp; Beauty
                            </Link>
                          </li>
                          <li className="dropdown-parent-list">
                            <Link href={`/categories-list`}>
                              View All Categories
                              <i className="fa-regular fa-chevron-right ml--8" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Update Cart Dropdown  */}
                  </div>
                </div>
              </div>
              <div className="rbt-header-content">
                <div className="header-info d-none d-xl-block">
                  <nav className="rbt-mainmenu-nav">
                    <ul className="mainmenu has-nav-bg-shape-hover">
                      <Nav />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right rbt-gap--32">
                {/* Navbar Icons */}
                <ul className="rbt-quick-access">
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 tooltips tooltip-distance-lg"
                    data-tooltip="Search"
                    data-tooltip-position="bottom"
                  >
                    <SearchToggler />
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex tooltips tooltip-distance-lg"
                    data-tooltip="Sign In"
                    data-tooltip-position="bottom"
                  >
                    <a
                      className="rbt-round-btn has-rbt-md-fsize"
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#signinModal"
                    >
                      <i className="fa-regular fa-user" />
                    </a>
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 rbt-wishlist d-none d-lg-flex tooltips tooltip-distance-lg"
                    data-tooltip="Wishlist"
                    data-tooltip-position="bottom"
                  >
                    <Link
                      className="rbt-round-btn has-rbt-md-fsize"
                      href={`/wishlist`}
                    >
                      <i className="fa-regular fa-heart" />
                      <div className="access-box-count">
                        <WishlistLength />
                      </div>
                    </Link>
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-mini-cart tooltips tooltip-distance-lg"
                    data-tooltip="Cart"
                    data-tooltip-position="bottom"
                  >
                    <CartSidebarToggler
                      className="rbt-cart-sidenav-activation rbt-round-btn has-rbt-md-fsize"
                      href="#"
                    >
                      <i className="fa-regular fa-bag-shopping" />
                      <span className="access-box-count rbt-shiny">
                        <CartItemsLength />
                      </span>
                    </CartSidebarToggler>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchDropdown />
      <div
        className={`rbt-header-common-sticky-activation rbt-header-wrapper-common justify-content-between rbt-bg-color-white${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-one w-100">
          <div className="rbt-corner-portion-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="inner justify-content-center">
                    <TopbarSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-close position-right">
            <TopbarRemover />
          </div>
        </div>
        <div className="container">
          <div className="mainbar-row rbt-mainbar-row-md-height @@navigationEnd align-items-center">
            <div className="header-left">
              <div className="rbt-header-content d-flex">
                <div className="header-info p-0 d-none d-xxl-flex mr--24">
                  <CategorySidebarToggler />
                </div>
                <div className="header-info d-xl-block d-none">
                  <div className="logo rbt-logo-height-sm">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.webp"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamburger">
                  <MobileMenuToggler />
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
            </div>
            <div className="header-info d-xl-none d-block">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    alt="Ecommerce Logo Images"
                    src="/assets/images/logo/logo.webp"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
            </div>
            <div className="rbt-header-content d-none d-xl-block">
              <div className="header-info">
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu mainmenu has-nav-bg-shape-hover">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* Navbar Icons */}
              <ul className="rbt-quick-access rbt-gap--12">
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 tooltips tooltip-distance-lg"
                  data-tooltip="Search"
                  data-tooltip-position="bottom"
                >
                  <CommonSearchToggler />
                </li>
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex tooltips tooltip-distance-lg"
                  data-tooltip="Sign In"
                  data-tooltip-position="bottom"
                >
                  <a
                    className="rbt-round-btn has-rbt-md-fsize"
                    href="#!"
                    data-bs-toggle="modal"
                    data-bs-target="#signinModal"
                  >
                    <i className="fa-regular fa-user" />
                  </a>
                </li>
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 tooltips tooltip-distance-lg d-none d-lg-flex"
                  data-tooltip="Compare"
                  data-tooltip-position="bottom"
                >
                  <a
                    className="rbt-round-btn has-rbt-md-fsize"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#compareReviewModal"
                  >
                    <i className="fa-regular fa-code-compare" />
                    <div className="access-box-count">
                      {" "}
                      <CompareItemLength />
                    </div>
                  </a>
                </li>
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-wishlist d-none d-lg-flex tooltips tooltip-distance-lg"
                  data-tooltip="Wishlist"
                  data-tooltip-position="bottom"
                >
                  <a
                    className="rbt-round-btn has-rbt-md-fsize"
                    href="#!"
                    data-bs-toggle="modal"
                    data-bs-target="#wishlistModal"
                  >
                    <i className="fa-regular fa-heart" />
                    <div className="access-box-count">
                      <WishlistLength />
                    </div>
                  </a>
                </li>
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-access-box-has-bg-hover rbt-mini-cart tooltips tooltip-distance-lg"
                  data-tooltip="Cart"
                  data-tooltip-position="bottom"
                >
                  <CartSidebarToggler
                    className="rbt-access-box-wrapper rbt-cart-sidenav-activation"
                    href="#!"
                  >
                    <span className="rbt-round-btn has-rbt-md-fsize">
                      <i className="fa-regular fa-bag-shopping" />
                      <span className="access-box-count rbt-shiny">
                        <CartItemsLength />
                      </span>
                    </span>
                    <div className="content ml--4">
                      <span className="title-text">
                        $<CartItemsTotal />
                      </span>
                    </div>
                  </CartSidebarToggler>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Start Search Dropdown  */}
        <SearchDropdownCommon />
        {/* End Search Dropdown  */}
      </div>
    </header>
  );
}
