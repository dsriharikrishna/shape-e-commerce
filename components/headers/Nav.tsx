"use client";
import Link from "next/link";
import { categoryMegamenus, shopPages, supportMenuItems } from "@/data/menu";
import { useMenuHover } from "@/hooks/useMenuHover";

export default function Nav() {
  const menuHover = useMenuHover();
  return (
    <>
      {/* Home */}
      <li>
        <Link href="/">Home</Link>
      </li>

      {/* Collections — category megamenu */}
      <li
        className="with-rbt-megamenu has-menu-child-item position-static"
        {...menuHover}
      >
        <a href="#!">
          Collections <i className="fa-regular fa-chevron-down" />
        </a>
        <div className="rbt-megamenu rbt-width-fullscreen">
          <div className="rbt-megamenu-wrapper">
            <div className="container">
              <div className="row row--24">
                {categoryMegamenus.map((cat, catIndex) => (
                  <div
                    key={catIndex}
                    className="col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
                  >
                    <h6 className="rbt-short-title">
                      <i className={`${cat.icon} mr--8`} />
                      <Link href={cat.href}>{cat.label}</Link>
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
                                <Link href={item.href}>{item.label}</Link>
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
          </div>
        </div>
      </li>

      {/* Shop — clean dropdown */}
      <li className="has-dropdown position-relative" {...menuHover}>
        <a href="#!">
          Shop <i className="fa-regular fa-chevron-down" />
        </a>
        <ul className="submenu">
          {shopPages.flatMap((section) => section.items).map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                {item.label}
                {item.badge && (
                  <div
                    className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                  >
                    {item.badge}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* New Arrivals — direct link */}
      <li>
        <Link href="/shop">
          New Arrivals
          <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded ml--8">
            New
          </div>
        </Link>
      </li>

      {/* Blog — direct link */}
      <li>
        <Link href="/blog-default">Blog</Link>
      </li>

      {/* Support — dropdown */}
      <li className="has-dropdown position-relative" {...menuHover}>
        <a href="#!">
          Support <i className="fa-regular fa-chevron-down" />
        </a>
        <ul className="submenu">
          {supportMenuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                {item.label}
                {item.badge && (
                  <div
                    className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                  >
                    {item.badge}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
