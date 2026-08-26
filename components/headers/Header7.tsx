"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import CompareItemLength from "../common/CompareItemLength";
import WishlistLength from "../common/WishlistLength";
import CartItemsLength from "../common/CartItemsLength";
import CartItemsTotal from "../common/CartItemsTotal";
import CategorySidebarToggler from "./headerComponents/CategorySidebarToggler";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchDropdown from "./headerComponents/SearchDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import PromoTextScroller from "./headerComponents/PromoTextScroller";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/hooks/useSticky";
import MobileMenuToggler from "../common/MobileMenuToggler";

export default function Header7({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-7">
      {/* Start Header Mid */}
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one bg @@gapSpaceBetween @@transparent plr--0${stickyClass}`}
      >
        <div className="rbt-topbar-section rbt-topbar-one rbt-bg-color-white">
          <div className="container">
            <div className="row align-items-center d-none d-md-flex mlr--0 row--0">
              <div className="col-lg-3 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-left rbt-fancy-item fancy-menu-address fancy-menu-start">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access">
                      <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 without-separator">
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            Contact
                          </a>
                        </div>
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            Track Order
                          </a>
                        </div>
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            Return Policy
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rbt-fancy-item fancy-menu-text fancy-menu-center">
                  <div className="rbt-fancy-text">
                    <PromoTextScroller />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access has-sm-separator">
                      <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-1 rbt-contract-info">
                        <div className="text-portion">
                          <i className="fa-regular fa-phone" />
                          <p>Contact 24/7</p>
                        </div>
                        <a href="tel:+800300-353-569" className="link-portion">
                          +800 300-353-569
                        </a>
                      </li>
                      <li className="rbt-access-box">
                        <div className="header-info">
                          <CurrencySelect />
                        </div>
                        <div className="header-info">
                          <LanguageSelect />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-header-middle position-relative rbt-header-mid-3 rbt-bg-color-primary">
          <div className="container">
            <div className="rbt-header-sec align-items-center rbt-gap--68">
              <div className="header-info d-flex d-xl-none">
                <div className="hamburger">
                  <MobileMenuToggler />
                </div>
              </div>
              <div className="header-info">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      alt="Ecommerce Logo Images"
                      src="/assets/images/logo/logo-white.webp"
                      width={1487}
                      height={334}
                    />
                  </Link>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu has-nav-bg-shape-hover">
                    <Nav />
                  </ul>
                </nav>
              </div>
              <div className="rbt-header-sec-col rbt-header-right">
                <div className="rbt-header-content">
                  {/* Navbar Icons */}
                  <ul className="rbt-quick-access">
                    <li
                      className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 tooltips tooltip-distance-lg d-none d-lg-flex"
                      data-tooltip="Search"
                      data-tooltip-position="bottom"
                    >
                      <SearchToggler />
                    </li>
                    <li
                      className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 tooltips tooltip-distance-lg rbt-wishlist d-none d-md-flex"
                      data-tooltip="Wishlist"
                      data-tooltip-position="bottom"
                    >
                      <a
                        className="rbt-round-btn rbt-bg-static-gray has-rbt-sm-fsize"
                        href="#"
                        data-bs-target="#rbt-wishlist-madal-toggle"
                        data-bs-toggle="modal"
                      >
                        <i className="fa-regular fa-heart" />
                        <div className="access-box-count">
                          <WishlistLength />
                        </div>
                      </a>
                    </li>
                    <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 rbt-minicart-popup-relative">
                      <a
                        className="rbt-round-btn rbt-bg-static-gray has-rbt-sm-fsize"
                        href="#"
                      >
                        <i className="fa-regular fa-bag-shopping" />
                        <span className="access-box-count rbt-shiny">
                          <CartItemsLength />
                        </span>
                      </a>
                      <div className="rbt-mini-cart-popup">
                        <div className="rbt-mini-cart-inner">
                          <div className="inner-top">
                            <div className="content d-block">
                              <div className="title-section">
                                <h6 className="title mb--0">
                                  <i className="fa-sharp fa-regular fa-cart-shopping mr--12" />
                                  Your cart
                                </h6>
                              </div>
                              <div className="rbt-btn-close">
                                <button className="minicart-close-button rbt-round-btn">
                                  <i className="fa-solid fa-xmark" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <nav className="side-nav w-100">
                            <ul className="rbt-minicart-wrapper">
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/wishlist/wishlist-prd-1.webp"
                                      width={278}
                                      height={212}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      JBL 100W PartyBox
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$359.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/wishlist/wishlist-prd-2.webp"
                                      width={278}
                                      height={213}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      Apple Watch Ultra 2
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$359.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/catagory-img/cat-transp-img-06.webp"
                                      width={142}
                                      height={100}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      PlayStation Wireless Headphone
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$759.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/catagory-img/cat-transp-img-01.webp"
                                      width={142}
                                      height={100}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      Awei CL-115M USB 2.4A
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$459.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/catagory-img/cat-transp-img-02.webp"
                                      width={142}
                                      height={100}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      MaxGreen 45W Power Adapter
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$999.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                              <li className="minicart-item">
                                <div className="thumbnail">
                                  <Link href={`/product-single-default/755`}>
                                    <Image
                                      alt="Product Image"
                                      src="/assets/images/catagory-img/cat-transp-img-03.webp"
                                      width={142}
                                      height={100}
                                    />
                                  </Link>
                                </div>
                                <div className="product-content text-start">
                                  <h6 className="title">
                                    <Link href={`/product-single-default/755`}>
                                      Havit PB90 Power Bank
                                    </Link>
                                  </h6>
                                  <span className="quantity">
                                    1x <span className="price">$288.00</span>
                                  </span>
                                </div>
                                <div className="close-btn">
                                  <button className="rbt-round-btn">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </nav>
                          <div className="rbt-minicart-footer">
                            <div className="rbt-cart-subttotal">
                              <p>Subtotal (2 items)</p>
                              <p className="price">$758.00</p>
                            </div>
                            <div className="rbt-cart-subttotal">
                              <p>Shipping</p>
                              <p className="price">$10.00</p>
                            </div>
                            <hr className="mb--0" />
                            <div className="rbt-cart-subttotal">
                              <p className="subtotal">
                                <strong>Total</strong>
                              </p>
                              <p className="price">$768.00</p>
                            </div>
                            <div className="offer-progress-area text-start">
                              <p className="offer-text">
                                Add <strong>$248.00</strong> More To Get
                                <strong>Free Shipping</strong>
                              </p>
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Shipping-progress"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div className="progress-bar w-75" />
                              </div>
                            </div>
                            <div className="rbt-minicart-bottom mt--16">
                              <div className="rbt-button-group">
                                <Link
                                  href={`/cart`}
                                  className="rbt-btn rbt-btn-sm rbt-btn-gray"
                                >
                                  View Cart
                                </Link>
                                <a href="#" className="rbt-btn rbt-btn-sm">
                                  <span className="btn-text">Checkout</span>
                                </a>
                              </div>
                              <div className="share-btn-grp rbt-link-hover">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#socialShareModal"
                                  type="button"
                                  className="share-btn"
                                >
                                  <i className="fa-sharp fa-solid fa-link mr--4" />
                                  Share Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-access-box-has-bg-hover d-none d-md-flex">
                      <a
                        href="#!"
                        className="rbt-access-box-wrapper"
                        data-bs-toggle="modal"
                        data-bs-target="#signinModal"
                      >
                        <div className="rbt-round-btn rbt-bg-static-gray">
                          <i className="fa-regular fa-user" />
                        </div>
                        <div className="content">
                          <p>Log in/Sign Up</p>
                          <span>Access Account</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SearchDropdown />
      </div>
      {/* End Header Top */}
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
