"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUiElement } from "@/shared/store/Context";
import {
  categoryMegamenus,
  categorySimpleLinks,
  shopPages,
  supportMenuItems,
} from "@/shared/data/menu";
import type { MenuItem } from "@/shared/types";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { cn } from "@/lib/utils";

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
      className={cn(
        "fixed inset-0 z-[9999] bg-black/60 transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div 
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[320px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex flex-col p-6 bg-gray-50 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    alt="TryShape Logo Images"
                    src="/assets/images/logo/logo.svg"
                    width={1487}
                    height={334}
                  />
                </Link>
              </div>
              <div className="">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:bg-black hover:text-white transition-all"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              TryShape is a E-commerce Template. Worldwide electronics store
              since 1978.
            </p>
            <div className="relative">
              <Input className="w-full pl-4 pr-12 py-2.5 bg-white border-transparent focus:border-primary shadow-sm rounded-full" type="text" placeholder="Search for products" />
              <button
                className="absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors bg-transparent border-0"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="px-4 py-4">
            <ul className="flex border-b border-gray-100 mb-4" role="tablist">
              <li className="flex-1" role="presentation">
                <button
                  className={cn(
                    "w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors",
                    "border-primary text-primary" // Assuming active tab for now, since it doesn't have React state for tabs, just bootstrap data-bs
                  )}
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
              <li className="flex-1" role="presentation">
                <button
                  className={cn(
                    "w-full py-3 text-sm font-medium text-gray-500 flex items-center justify-center gap-2 border-b-2 border-transparent hover:text-primary transition-colors"
                  )}
                  id="rbt-tab-mobilemenu-2"
                  data-bs-toggle="tab"
                  data-bs-target="#rbt-tab-pane-mobilemenu-2"
                  type="button"
                  role="tab"
                  aria-controls="rbt-tab-pane-mobilemenu-2"
                  aria-selected="false"
                >
                  <i className="fa-sharp fa-regular fa-layer-group" />
                  Categories
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
                <nav className="flex flex-col gap-2">
                  <ul className="flex flex-col">
                    {/* Home */}
                    <li>
                      <Link href="/" onClick={closeMenu} className="block py-3 text-base font-semibold text-gray-900 border-b border-gray-100 hover:text-primary transition-colors">
                        Home
                      </Link>
                    </li>

                    {/* Collections */}
                    <li className="flex flex-col border-b border-gray-100">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-collections");
                        }}
                        className={cn(
                          "flex items-center justify-between py-3 text-base font-semibold transition-colors",
                          openMenuIds.has("menu-collections") ? "text-primary" : "text-gray-900 hover:text-primary"
                        )}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-collections")}
                      >
                        Collections 
                        <i className={cn(
                          "fa-regular fa-chevron-down text-sm transition-transform duration-300",
                          openMenuIds.has("menu-collections") ? "rotate-180" : ""
                        )} />
                      </a>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          openMenuIds.has("menu-collections") ? "max-h-[1000px] opacity-100 mb-4" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="flex flex-col gap-4 pl-4 border-l border-gray-100 ml-2">
                          {categoryMegamenus.map((cat, catIndex) => (
                            <div key={catIndex} className="flex flex-col gap-2">
                              <h6 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-1">
                                <i className={cn(cat.icon, "text-gray-400")} />
                                <Link href={cat.href} onClick={closeMenu} className="hover:text-primary transition-colors">
                                  {cat.label}
                                </Link>
                              </h6>
                              <div className="grid grid-cols-2 gap-4">
                                {cat.sections.map((section, secIdx) => (
                                  <div key={secIdx} className="flex flex-col">
                                    <h6 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                      {section.title}
                                    </h6>
                                    <ul className="flex flex-col gap-2">
                                      {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                          <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="text-sm text-gray-600 hover:text-primary transition-colors block"
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
                    <li className="flex flex-col border-b border-gray-100">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu("menu-shop");
                        }}
                        className={cn(
                          "flex items-center justify-between py-3 text-base font-semibold transition-colors",
                          openMenuIds.has("menu-shop") ? "text-primary" : "text-gray-900 hover:text-primary"
                        )}
                        role="button"
                        aria-expanded={openMenuIds.has("menu-shop")}
                      >
                        Shop 
                        <i className={cn(
                          "fa-regular fa-chevron-down text-sm transition-transform duration-300",
                          openMenuIds.has("menu-shop") ? "rotate-180" : ""
                        )} />
                      </a>
                      <ul
                        className={cn(
                          "flex flex-col gap-2 pl-4 border-l border-gray-100 ml-2 overflow-hidden transition-all duration-300 ease-in-out",
                          openMenuIds.has("menu-shop") ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
                        )}
                      >
                        {shopPages
                          .flatMap((section) => section.items)
                          .map((item, index) => (
                            <li key={index}>
                              <div className="text-sm text-gray-600 hover:text-primary transition-colors py-1 block">
                                <MenuItemLink item={item} />
                              </div>
                            </li>
                          ))}
                      </ul>
                    </li>

                    {/* New Arrivals */}
                    <li>
                      <Link href="/shop?collection=new-arrivals" onClick={closeMenu} className="flex items-center py-3 text-base font-semibold text-gray-900 border-b border-gray-100 hover:text-primary transition-colors">
                        New Arrivals
                        <div className="ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-red-500 rounded-full">
                          New
                        </div>
                      </Link>
                    </li>

                    {/* Blog */}
                    <li>
                      <Link href="/blog-default" onClick={closeMenu} className="block py-3 text-base font-semibold text-gray-900 border-b border-gray-100 hover:text-primary transition-colors">
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
                <nav className="flex flex-col gap-2">
                  <ul className="flex flex-col">
                    {categoryMegamenus.map((cat, catIndex) => {
                      const catMenuId = `cat-${catIndex}`;
                      return (
                        <li
                          key={cat.label}
                          className="flex flex-col border-b border-gray-100"
                        >
                          <a
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleMenu(catMenuId);
                            }}
                            className={cn(
                              "flex items-center justify-between py-3 text-base font-semibold transition-colors",
                              openMenuIds.has(catMenuId) ? "text-primary" : "text-gray-900 hover:text-primary"
                            )}
                            role="button"
                            aria-expanded={openMenuIds.has(catMenuId)}
                          >
                            <span className="flex items-center gap-2">
                              <i className={cn("text-gray-400 text-sm", cat.icon)} />
                              {cat.label}
                            </span>
                            <span className="text-sm">
                              <i className={cn(
                                "fa-regular fa-chevron-down transition-transform duration-300",
                                openMenuIds.has(catMenuId) ? "rotate-180" : ""
                              )} />
                            </span>
                          </a>
                          {/* Start Mega Menu  */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300 ease-in-out",
                              openMenuIds.has(catMenuId) ? "max-h-[2000px] opacity-100 mb-4" : "max-h-0 opacity-0"
                            )}
                          >
                            <div className="flex flex-col gap-6 pl-4 border-l border-gray-100 ml-2">
                              <div className="flex flex-col gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                  {cat.sections.map((section, sectionIdx) => (
                                    <div
                                      key={`${cat.label}-${section.title}-${sectionIdx}`}
                                      className="flex flex-col"
                                    >
                                      <h6 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        {section.title}
                                      </h6>
                                      <ul className="flex flex-col gap-2">
                                        {section.items.map((item) => (
                                          <li
                                            key={`${item.href}-${item.label}`}
                                          >
                                            <div className="text-sm text-gray-600 hover:text-primary transition-colors block">
                                              <MenuItemLink item={item} />
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-4">
                                  <div
                                    className="rounded-xl overflow-hidden shadow-sm relative p-4 flex flex-col items-center text-center justify-center bg-gray-50 border border-gray-100"
                                  >
                                    <div className="z-10 flex flex-col items-center">
                                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                                        {cat.banner.title}
                                      </h5>
                                      <p className="text-sm text-gray-600 mb-4">
                                        {cat.banner.desc}
                                      </p>
                                      {cat.banner.btnHref.startsWith(
                                        "http"
                                      ) || cat.banner.btnHref === "#" ? (
                                        <a
                                          className={buttonVariants({ variant: "black", size: "sm" })}
                                          href={cat.banner.btnHref}
                                        >
                                          {cat.banner.btnText}
                                        </a>
                                      ) : (
                                        <Link
                                          className={buttonVariants({ variant: "black", size: "sm" })}
                                          href={cat.banner.btnHref}
                                        >
                                          {cat.banner.btnText}
                                        </Link>
                                      )}
                                      <a
                                        href="#"
                                        className="mt-4 block"
                                      >
                                        <Image
                                          alt="Ecommerce Product"
                                          src={cat.banner.imgSrc}
                                          width={cat.banner.imgWidth}
                                          height={cat.banner.imgHeight}
                                          className="max-w-[120px] h-auto object-contain"
                                        />
                                      </a>
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
