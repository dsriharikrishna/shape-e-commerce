"use client";
import {
  featureMenuColumns,
  productDetailPages,
  productsVarientPage,
  shopPages,
} from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import Reviews from "./Reviews";
import NavProducts from "./NavProducts";
import { useState } from "react";
import { useMenuHover } from "@/hooks/useMenuHover";

const tabItems = [
  {
    label: "Shop Pages",
    icon: "fa-store",
  },
  {
    label: "Single Product",
    icon: "fa-shirt",
  },
  {
    label: "Products Variation",
    icon: "fa-swatchbook",
  },
  {
    label: "Advance Features",
    icon: "fa-screwdriver-wrench",
  },
];

export default function NavShopPages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuHover = useMenuHover();
  return (
    <li className="with-rbt-megamenu has-menu-child-item position-static" {...menuHover}>
      <a href="#!">
        Shop <i className="fa-regular fa-chevron-down" />
      </a>
      {/* Start Mega Menu  */}
      <div className="rbt-megamenu rbt-megamenu-4">
        <div className="rbt-megamenu-wrapper p--0">
          <div className="row row--0">
            <div className="col-3 ">
              <div className="rbt-menu-tab-wrapper">
                <nav
                  id="rbt-megamenuTab"
                  className="nav nav-pills flex-column rbt-megamenu-tab rbt-megamenu-tab-cs-activation"
                >
                  {tabItems.map((item, index) => (
                    <a
                      key={index}
                      className={`nav-link ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <span>
                        <i className={`fa-regular ${item.icon}`} />
                      </span>
                      {item.label}
                      <span className="rbt-chevron-right">
                        <i className="fa-regular fa-chevron-right" />
                      </span>
                    </a>
                  ))}
                  <a href="#" className="nav-link disabled">
                    <span>
                      <i className="fa-regular fa-chart-pie" />
                    </span>
                    Dashboard Overview
                    <span className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                      Coming
                    </span>
                    <span className="rbt-chevron-right">
                      <i className="fa-regular fa-chevron-right" />
                    </span>
                  </a>
                  <a href="#" className="nav-link disabled">
                    <span>
                      <i className="fa-regular fa-shopping-bag" />
                    </span>
                    Multivendor Shop
                    <span className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                      Coming
                    </span>
                    <span className="rbt-chevron-right">
                      <i className="fa-regular fa-chevron-right" />
                    </span>
                  </a>
                </nav>
                <div className="rbt-tab-banner-img">
                  <Image
                    alt="Ecommerce Mennu Bnner"
                    src="/assets/images/splash/menu-banner/menu-tab-banner-01.webp"
                    width={624}
                    height={160}
                  />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="rbt-menu-tab-content-wrapper">
                <div
                  className="tab-content rbt-megamenu-tab-content"
                  id="megamenu-tab-content"
                >
                  <div
                    className={`tab-pane ${
                      activeIndex == 0 ? "show active" : ""
                    } `}
                  >
                    <div className="row row--24">
                      <div className="col-xl-8">
                        <div className="row row--8">
                          {shopPages.map((column, colIndex) => (
                            <div
                              key={colIndex}
                              className={`col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-${
                                colIndex + 1
                              }`}
                            >
                              <h6 className="rbt-short-title">
                                {column.title}
                              </h6>
                              <ul className="mega-menu-item">
                                {column.items.map((item, itemIndex) => {
                                  const WrapperTag = item.href.startsWith("/")
                                    ? Link
                                    : "a";
                                  const wrapperProps = item.href.startsWith("/")
                                    ? { href: item.href }
                                    : { href: item.href };

                                  return (
                                    <li key={itemIndex}>
                                      <WrapperTag {...wrapperProps}>
                                        {item.label}
                                        {item.badge && (
                                          <div
                                            className={`rbt-product-badge rbt-product-badge-bg-${
                                              item.badgeColor
                                            } border-rounded${
                                              item.ml ? " ml--8" : ""
                                            }`}
                                          >
                                            {item.badge}
                                          </div>
                                        )}
                                      </WrapperTag>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-xl-4 rbt-scroll-trigger fade_in animation-order-4">
                        <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-three h-100 min-h-500">
                          <div className="mega-top-banner h-100 align-items-start justify-content-center">
                            <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-center text-center">
                              <div className="rbt-banner-content">
                                <p className="b4 subtitle">
                                  Embrace comfy wear
                                </p>
                                <h5 className="h5 mb--4">
                                  Ready to fall in love with Autumn collection!
                                </h5>
                              </div>
                              <Link
                                className="rbt-btn rbt-bg-color-secondary rbt-btn-sm"
                                href={`/shop`}
                              >
                                Shop Collection
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeIndex == 1 ? "show active" : ""
                    } `}
                  >
                    <div className="d-flex flex-column justify-content-between">
                      <div className="row row--24">
                        {productDetailPages.map((col, colIndex) => (
                          <div
                            key={colIndex}
                            className="col-xl-3 single-mega-item"
                          >
                            <h6 className="rbt-short-title">{col.title}</h6>
                            <ul className="mega-menu-item">
                              {col.items.map((item, itemIndex) => {
                                const isInternal = item.href.startsWith("/");
                                const Wrapper = isInternal ? Link : "a";
                                const props = isInternal
                                  ? { href: item.href }
                                  : { href: item.href };

                                return (
                                  <li key={itemIndex}>
                                    <Wrapper {...props}>
                                      {item.label}
                                      {item.badge && (
                                        <div
                                          className={`rbt-product-badge rbt-product-badge-bg-${
                                            item.badgeColor
                                          } border-rounded${
                                            item.ml ? " ml--8" : ""
                                          }`}
                                        >
                                          {item.badge}
                                        </div>
                                      )}
                                    </Wrapper>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="row row--24">
                        <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                        <div className="col-lg-12">
                          <Reviews />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeIndex == 2 ? "show active" : ""
                    } `}
                  >
                    <div className="row row--24">
                      <div className="col-xl-8">
                        <div className="row row--8">
                          {productsVarientPage.map((column, colIndex) => (
                            <div
                              key={colIndex}
                              className="col-xl-4 single-mega-item"
                            >
                              <h6 className="rbt-short-title">
                                {column.title}
                              </h6>
                              <ul className="mega-menu-item">
                                {column.items.map((item, itemIndex) => {
                                  const Wrapper = item.href.startsWith("/")
                                    ? Link
                                    : "a";
                                  const props = item.href.startsWith("/")
                                    ? { href: item.href }
                                    : { href: item.href };

                                  return (
                                    <li key={itemIndex}>
                                      <Wrapper {...props}>
                                        {item.label}
                                        {item.badge && (
                                          <div
                                            className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                                          >
                                            {item.badge}
                                          </div>
                                        )}
                                      </Wrapper>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                          <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--24 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                          <div className="col-lg-12">
                            <ul className="rbt-nav-brand-list liststyle d-flex justify-content-between">
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-01.webp"
                                    width={90}
                                    height={30}
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-02.webp"
                                    width={137}
                                    height={26}
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-03.webp"
                                    width={91}
                                    height={16}
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-04.webp"
                                    width={91}
                                    height={18}
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-05.webp"
                                    width={106}
                                    height={26}
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link href={`/shop-by-brands`}>
                                  <Image
                                    alt="Ecommerce Brand Image"
                                    src="/assets/images/brands/brand-a-06.webp"
                                    width={119}
                                    height={14}
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-four h-100">
                          <div className="mega-top-banner h-100 align-items-end justify-content-start">
                            <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-start text-left">
                              <div className="rbt-banner-content">
                                <p className="b4 subtitle rbt-text-color-white mb--0">
                                  Embrace comfy wear
                                </p>
                                <h5 className="h5 mt--4 mb--0 rbt-text-color-white">
                                  Ready to fall in love with Autumn collection!
                                </h5>
                              </div>
                              <a
                                className="rbt-btn rbt-bg-color-secondary rbt-btn-sm"
                                href="#"
                              >
                                Shop Collection
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeIndex == 3 ? "show active" : ""
                    } `}
                  >
                    <div className="row row--24">
                      <div className="col-xl-8">
                        <div className="row row--8">
                          {featureMenuColumns.map((column, colIndex) => (
                            <div
                              key={colIndex}
                              className="col-xl-4 single-mega-item"
                            >
                              <h6 className="rbt-short-title">
                                {column.title}
                              </h6>
                              <ul className="mega-menu-item">
                                {column.items.map((item, itemIndex) => {
                                  const Wrapper = item.href.startsWith("/")
                                    ? Link
                                    : "a";
                                  const props = item.href.startsWith("/")
                                    ? { href: item.href }
                                    : { href: item.href };

                                  return (
                                    <li key={itemIndex}>
                                      <Wrapper {...props}>
                                        {item.label}
                                        {item.badge && (
                                          <div
                                            className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                                          >
                                            {item.badge}
                                          </div>
                                        )}
                                      </Wrapper>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="rbt-swiper-container">
                          <NavProducts />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Mega Menu  */}
    </li>
  );
}
