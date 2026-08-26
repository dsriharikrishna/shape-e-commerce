"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUiElement } from "@/context/Context";
import {
  categoryMegamenus,
  categorySimpleLinks,
  shopPages,
  supportMenuItems,
} from "@/data/menu";
import type { MenuItem } from "@/types";

const BADGE_CLASS: Record<string, string> = {
  green: "rbt-product-badge-bg-green",
  primary: "rbt-product-badge-bg-primary",
  danger: "rbt-product-badge-bg-danger",
  yellow: "rbt-product-badge-bg-yellow",
  red: "rbt-product-badge-bg-red",
  success: "rbt-product-badge-bg-success",
  secondary: "rbt-product-badge-bg-secondary",
};

function getBadgeClass(color?: string) {
  return color && BADGE_CLASS[color]
    ? BADGE_CLASS[color]
    : "rbt-product-badge-bg-primary";
}

function MenuItemLink({ item }: { item: MenuItem }) {
  const badge = item.badge ? (
    <div
      className={`rbt-product-badge ${getBadgeClass(item.badgeColor)} border-rounded ml--8`}
    >
      {item.badge}
    </div>
  ) : null;
  const content = (
    <>
      {item.label}
      {badge}
    </>
  );
  if (item.useLink) return <Link href={item.href}>{content}</Link>;
  if (item.href.startsWith("http") || item.href === "#!" || item.href === "#") {
    return (
      <a href={item.href === "#!" || item.href === "#" ? "#!" : item.href}>
        {content}
      </a>
    );
  }
  return <Link href={item.href}>{content}</Link>;
}

export default function MobileMenu() {
  const { toggleMobileMenu, mobileMenuOpen } = useUiElement();
  const [openMenuIds, setOpenMenuIds] = useState<Set<string>>(new Set());

  const closeMenu = () => {
    setOpenMenuIds(new Set());
    toggleMobileMenu();
  };

  const toggleMenu = (id: string) => {
    setOpenMenuIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleBackdropClick = () => {
    if (mobileMenuOpen) closeMenu();
  };

  return (
    <div
      className={`popup-mobile-menu ${mobileMenuOpen ? "active" : ""}`}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="inner-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-top">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    alt="Unimart Logo Images"
                    src="/assets/images/logo/logo.webp"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <p className="description">
              Unimart is a E-commerce Template. Worldwide electronics store
              since 1978.
            </p>
            <div className="rbt-inner-search-field style-one rbt-search-field-rounded rbt-search-field-sm-width">
              <input type="text" placeholder="Search for products" />
              <button
                className="rbt-round-btn search-btn rbt-text-color-gray-500"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="rbt-tab rbt-round-shape-tab">
            <ul
              className="nav nav-tabs mb--0"
              id="mobile-menuTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="rbt-tab-mobilemenu-1"
                  data-bs-toggle="tab"
                  data-bs-target="#rbt-tab-pane-mobilemenu-1"
                  type="button"
                  role="tab"
                  aria-controls="rbt-tab-pane-mobilemenu-1"
                  aria-selected="true"
                >
                  <i className="fa-solid fa-bars-sort" />
                  Menu
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="rbt-tab-mobilemenu-2"
                  data-bs-toggle="tab"
                  data-bs-target="#rbt-tab-pane-mobilemenu-2"
                  type="button"
                  role="tab"
                  aria-controls="rbt-tab-pane-mobilemenu-2"
                  aria-selected="false"
                >
                  <i className="fa-sharp fa-regular fa-layer-group" />
                  Catagories
                </button>
              </li>
            </ul>
            <div className="tab-content" id="mobile-menuTabContent">
              <div
                className="tab-pane fade show active"
                id="rbt-tab-pane-mobilemenu-1"
                role="tabpanel"
                aria-labelledby="rbt-tab-mobilemenu-1"
                tabIndex={0}
              >
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu">
                    {/* Home */}
                    <li>
                      <Link href="/" onClick={closeMenu}>
                        Home
                      </Link>
                    </li>

                    {/* Collections */}
                    <li className="with-rbt-megamenu has-menu-child-item position-static">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-collections");
                        }}
                        className={
                          openMenuIds.has("menu-collections") ? "open" : ""
                        }
                        role="button"
                        aria-expanded={openMenuIds.has("menu-collections")}
                      >
                        Collections <i className="fa-regular fa-chevron-down" />
                      </a>
                      <div
                        className={`rbt-megamenu grid-item-3 pl_sm--0 pl_md--0 pl_lg--0 ${openMenuIds.has("menu-collections") ? "active" : ""}`}
                      >
                        <div className="rbt-megamenu-wrapper">
                          {categoryMegamenus.map((cat, catIndex) => (
                            <div key={catIndex} className="mb--16">
                              <h6 className="rbt-short-title">
                                <i className={`${cat.icon} mr--8`} />
                                <Link href={cat.href} onClick={closeMenu}>
                                  {cat.label}
                                </Link>
                              </h6>
                              <div className="row row--8 mt--8">
                                {cat.sections.map((section, secIdx) => (
                                  <div key={secIdx} className="col-6">
                                    <h6 className="rbt-short-title rbt-text-color-gray-500 mb--8">
                                      {section.title}
                                    </h6>
                                    <ul className="mega-menu-item">
                                      {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                          >
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>

                    {/* Shop */}
                    <li className="has-dropdown position-relative">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-shop");
                        }}
                        className={openMenuIds.has("menu-shop") ? "open" : ""}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-shop")}
                      >
                        Shop <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul
                        className={`submenu ${openMenuIds.has("menu-shop") ? "active" : ""}`}
                      >
                        {shopPages
                          .flatMap((section) => section.items)
                          .map((item, index) => (
                            <li key={index}>
                              <MenuItemLink item={item} />
                            </li>
                          ))}
                      </ul>
                    </li>

                    {/* New Arrivals */}
                    <li>
                      <Link href="/shop" onClick={closeMenu}>
                        New Arrivals
                        <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
                          New
                        </div>
                      </Link>
                    </li>

                    {/* Blog */}
                    <li>
                      <Link href="/blog-default" onClick={closeMenu}>
                        Blog
                      </Link>
                    </li>

                    {/* Support */}
                    <li className="has-dropdown position-relative">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-support");
                        }}
                        className={
                          openMenuIds.has("menu-support") ? "open" : ""
                        }
                        role="button"
                        aria-expanded={openMenuIds.has("menu-support")}
                      >
                        Support <i className="fa-regular fa-chevron-down" />
                      </a>
                      <ul
                        className={`submenu ${openMenuIds.has("menu-support") ? "active" : ""}`}
                      >
                        {supportMenuItems.map((item) => (
                          <li key={item.href + item.label}>
                            <MenuItemLink item={item} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="tab-pane fade"
                id="rbt-tab-pane-mobilemenu-2"
                role="tabpanel"
                aria-labelledby="rbt-tab-mobilemenu-2"
                tabIndex={0}
              >
                <nav className="rbt-mainmenu-nav">
                  <ul className="mainmenu">
                    {categoryMegamenus.map((cat, catIndex) => {
                      const catMenuId = `cat-${catIndex}`;
                      return (
                        <li
                          key={cat.label}
                          className="with-rbt-megamenu has-menu-child-item position-static"
                        >
                          <a
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMenu(catMenuId);
                            }}
                            className={openMenuIds.has(catMenuId) ? "open" : ""}
                            role="button"
                            aria-expanded={openMenuIds.has(catMenuId)}
                          >
                            <span>
                              <i
                                className={`rbt-catagories-icon mr--8 ${cat.icon}`}
                              />
                            </span>
                            {cat.label}
                            <span className="rbt-chevron-right">
                              <i className="fa-regular fa-chevron-right" />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div
                            className={`rbt-megamenu grid-item-5 pl_sm--0 pl_md--0 pl_lg--0 ${openMenuIds.has(catMenuId) ? "active" : ""}`}
                          >
                            <div className="container p_sm--0 p_md--0 p_lg--0">
                              <div className="rbt-megamenu-wrapper">
                                <div className="row row--12">
                                  {cat.sections.map((section, sectionIdx) => (
                                    <div
                                      key={`${cat.label}-${section.title}-${sectionIdx}`}
                                      className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                                    >
                                      <h6 className="rbt-short-title">
                                        {section.title}
                                      </h6>
                                      <ul className="mega-menu-item">
                                        {section.items.map((item) => (
                                          <li
                                            key={`${item.href}-${item.label}`}
                                          >
                                            <MenuItemLink item={item} />
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                                    <div
                                      className={`rbt-menu-offer-card ${cat.banner.bannerCardClass ?? ""}`}
                                    >
                                      <div
                                        className={`mega-top-banner ${cat.banner.bannerInnerClass ?? ""}`}
                                      >
                                        <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                                          <div className="rbt-banner-content">
                                            <h5 className="title">
                                              {cat.banner.title}
                                            </h5>
                                            <p className="b3 desc">
                                              {cat.banner.desc}
                                            </p>
                                          </div>
                                          {cat.banner.btnHref.startsWith(
                                            "http",
                                          ) || cat.banner.btnHref === "#" ? (
                                            <a
                                              className="rbt-btn rbt-btn-sm rbt-btn-black"
                                              href={cat.banner.btnHref}
                                            >
                                              {cat.banner.btnText}
                                            </a>
                                          ) : (
                                            <Link
                                              className="rbt-btn rbt-btn-sm rbt-btn-black"
                                              href={cat.banner.btnHref}
                                            >
                                              {cat.banner.btnText}
                                            </Link>
                                          )}
                                          <a
                                            href="#"
                                            className="product-img position-bottom mt--24"
                                          >
                                            <Image
                                              alt="Ecommerce Product"
                                              src={cat.banner.imgSrc}
                                              width={cat.banner.imgWidth}
                                              height={cat.banner.imgHeight}
                                            />
                                          </a>
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
                    })}
                    {categorySimpleLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <span>
                            <i
                              className={`rbt-catagories-icon mr--8 ${link.icon}`}
                            />
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href={`/categories-list`}>
                        {" "}
                        View All Categories{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-bottom">
          <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Find With Us</span>
            <ul className="rbt-social-icon-list mt--12">
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-telegram" />
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-top-left rbt-information-list justify-content-center">
            <li>
              <a href="mailto:hello@example.com">
                <i className="fa-light fa-envelope" />
                example@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+302555-0107">
                <i className="fa-regular fa-phone" />
                (302) 555-0107
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
