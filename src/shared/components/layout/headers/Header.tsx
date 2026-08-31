"use client";

import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "@/shared/components/common/LanguageSelect";
import CurrencySelect from "@/shared/components/common/CurrencySelect";
import CompareItemLength from "@/shared/components/common/CompareItemLength";
import WishlistLength from "@/shared/components/common/WishlistLength";
import CartItemsLength from "@/shared/components/common/CartItemsLength";
import CartItemsTotal from "@/shared/components/common/CartItemsTotal";
import SearchDropdownCommon from "./headerComponents/SearchDropdownCommon";
import SearchDropdown from "./headerComponents/SearchDropdown";
import TopbarSwiper from "./headerComponents/TopbarSwiper";
import CommonSearchToggler from "./headerComponents/CommonSearchToggler";
import CartSidebarToggler from "./headerComponents/CartSidebarToggler";
import TopbarRemover from "./headerComponents/TopbarRemover";
import SearchToggler from "./headerComponents/SearchToggler";
import { useSticky } from "@/shared/hooks/useSticky";
import MobileMenuToggler from "@/shared/components/common/MobileMenuToggler";
import NavFilterTab from "./headerComponents/NavFilterTab";
import HeaderUserButton from "./headerComponents/HeaderUserButton";
import { cn } from "@/lib/utils";

export default function Header({ showFeatures = true, sticky = false }) {
  const isSticky = useSticky();

  return (
    <header className="relative w-full z-[99]">
      <div
        className={cn(
          "w-full bg-white shadow-sm transition-all duration-300",
          sticky && isSticky ? "fixed top-0 left-0 z-[99] animate-in slide-in-from-top-4" : "relative"
        )}
      >
        <div className="w-full bg-cover rbt-header-campaign relative">
          <div className="w-full px-4">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full lg:w-1/2">
                  <div className="flex justify-center">
                    <TopbarSwiper position="start" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <TopbarRemover />
          </div>
        </div>
        <div className="relative w-full py-4 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-primary transition-colors">
                  Store Location
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Track Your Order
                </a>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamburger">
                  <MobileMenuToggler />
                </div>
              </div>
              {/* Start Mobile-Menu-Bar */}
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-[150px] lg:w-[180px]">
                    <Link href={`/`}>
                      <Image
                        alt="Ecommerce Logo Images"
                        src="/assets/images/logo/logo.svg"
                        width={1487}
                        height={334}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                {/* Navbar Icons */}
                <ul className="flex items-center gap-4">
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 tooltips tooltip-distance-lg d-none d-lg-flex"
                    data-tooltip="Search"
                    data-tooltip-position="bottom"
                  >
                    <SearchToggler />
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex tooltips tooltip-distance-lg"
                    data-tooltip="Profile"
                    data-tooltip-position="bottom"
                  >
                    <HeaderUserButton className="rbt-round-btn rbt-bg-static-gray" />
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-4 tooltips tooltip-distance-lg"
                    data-tooltip="Compare"
                    data-tooltip-position="bottom"
                  >
                    <a
                      className="rbt-round-btn rbt-bg-static-gray has-rbt-sm-fsize"
                      href="#!"
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
                    data-tooltip="wishlist"
                    data-tooltip-position="bottom"
                  >
                    <Link
                      className="rbt-round-btn rbt-bg-static-gray"
                      href={`/wishlist`}
                    >
                      <i className="fa-regular fa-heart" />
                      <div className="access-box-count">
                        <WishlistLength />
                      </div>
                    </Link>
                  </li>
                  <li
                    className="rbt-access-box rbt-scroll-trigger fade_in animation-order-5 rbt-mini-cart d-none d-lg-flex tooltips tooltip-distance-lg"
                    data-tooltip="Cart"
                    data-tooltip-position="bottom"
                  >
                    <CartSidebarToggler
                      className="rbt-cart-sidenav-activation rbt-round-btn rbt-bg-static-gray"
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
          <SearchDropdown />
        </div>
      </div>
      {/* Start Header Mid */}
      {/* Start Header Mid */}
      <div className="relative bg-white hidden xl:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="hidden xl:block">
              <nav className="rbt-mainmenu-nav">
                <ul className="mainmenu flex items-center gap-6">
                  <Nav />
                </ul>
              </nav>
            </div>
            <div className="">
              <div className="flex items-center gap-4 justify-end">
                <div className="text-sm font-medium">Choose Gender :</div>
                <NavFilterTab />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}
      {/* Start Header Bottom */}
      {showFeatures && (
        <div className="relative bg-gray-50 hidden xl:flex py-4">
          <div className="container mx-auto px-4">
            <div className="w-full">
              <ul className="flex items-center justify-center gap-12">
                <li>
                  <div className="flex items-center gap-4 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <i className="fa-light fa-truck-fast" />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold m-0 text-gray-900">Free Shipping</h6>
                      <p className="text-xs text-gray-500 m-0">
                        From all orders over $100
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <i className="fa-light fa-headset" />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold m-0 text-gray-900">Quality Support</h6>
                      <p className="text-xs text-gray-500 m-0">24/7 online feedback</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <i className="fa-light fa-box" />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold m-0 text-gray-900">Return &amp; Refund</h6>
                      <p className="text-xs text-gray-500 m-0">
                        Return money within 30 days
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4 transition-all duration-300">
                    <div className="text-primary text-3xl">
                      <i className="fa-light fa-ticket" />
                    </div>
                    <div>
                      <h6 className="text-sm font-semibold m-0 text-gray-900">Gift Voucher</h6>
                      <p className="text-xs text-gray-500 m-0">
                        20% off when you shop online
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* End Header Bottom */}
      <div
        className={cn(
          "w-full bg-white shadow-sm flex flex-col justify-between transition-all duration-300",
          sticky && isSticky ? "fixed top-0 left-0 z-[99] animate-in slide-in-from-top-4" : "hidden"
        )}
      >
        <div className="w-full bg-cover rbt-header-campaign relative">
          <div className="w-full px-4">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full lg:w-1/2">
                  <div className="flex justify-center">
                    <TopbarSwiper />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <TopbarRemover />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="xl:hidden">
                <MobileMenuToggler />
              </div>
              <div className="w-[120px] lg:w-[150px]">
                <Link href={`/`}>
                  <Image
                    alt="Ecommerce Logo Images"
                    src="/assets/images/logo/logo.svg"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
            </div>

            <div className="hidden xl:block">
              <nav className="rbt-mainmenu-nav">
                <ul className="mainmenu flex items-center gap-6">
                  <Nav />
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <ul className="flex items-center gap-4">
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-2 tooltips tooltip-distance-lg"
                  data-tooltip="Search"
                  data-tooltip-position="bottom"
                >
                  <CommonSearchToggler />
                </li>
                <li
                  className="rbt-access-box rbt-scroll-trigger fade_in animation-order-3 d-none d-lg-flex tooltips tooltip-distance-lg"
                  data-tooltip="Profile"
                  data-tooltip-position="bottom"
                >
                  <HeaderUserButton className="rbt-round-btn has-rbt-md-fsize" />
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
