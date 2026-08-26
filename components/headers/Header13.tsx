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
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/hooks/useSticky";

export default function Header13({ sticky = false }) {
  const isSticky = useSticky();
  const stickyClass = sticky && isSticky ? " rbt-sticky" : "";
  return (
    <header className="rbt-header rbt-header-9">
      <div
        className={`rbt-header-wrapper rbt-header-sticky-activation rbt-header-wrapper-three rbt-header-wrapper-one header-space-between rbt-bg-color-white header-not-transparent header-sticky plr--0${stickyClass}`}
      >
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news rbt-topbar-bg-img rbt-topbar-bg-one">
          <div className="rbt-corner-portion-wrapper">
            <div className="rbt-full-width-wrapper">
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
        <div className="rbt-topbar-section rbt-topbar-one">
          <div className="rbt-full-width-wrapper">
            <div className="row align-items-center d-none d-md-flex mlr--0 row--0">
              <div className="col-lg-3 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-left rbt-fancy-item fancy-menu-address fancy-menu-start">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access">
                      <li className="rbt-access-box">
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            Track Your Order
                          </a>
                        </div>
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
              <div className="col-lg-6 col-md-6 col-12">
                <div className="inner d-flex justify-content-center">
                  <p className="rbt-text-color-heading">
                    <strong className="mr--4">Trending Now :</strong> christmas,
                    thanksgiving, trees, decor, ornaments
                    <Link
                      className="rbt-fancy-link ml--4 text-underline"
                      href={`/shop`}
                    >
                      Know more
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-12">
                <div className="rbt-header-sec-col rbt-header-right rbt-fancy-item fancy-menu-address fancy-menu-end">
                  <div className="rbt-header-content">
                    <ul className="rbt-quick-access">
                      <li className="rbt-access-box">
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            <i className="fa-brands fa-pinterest mr--4" /> 180k
                            Followers
                          </a>
                        </div>
                        <div className="header-info">
                          <a href="#" className="rbt-access-link">
                            <i className="fa-brands fa-facebook mr--4" /> 300k
                            Followers
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="rbt-separator rbt-separator-gray200 separator-height-1 mb--0" />
        <div className="rbt-wrapper-middle rbt-header-middle-one">
          <div className="rbt-full-width-wrapper">
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
        <div className="rbt-full-width-wrapper">
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
