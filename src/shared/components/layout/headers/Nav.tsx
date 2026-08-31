"use client";
import Link from "next/link";
import {
  categoryMegamenus,
  shopPages,
  supportMenuItems,
} from "@/shared/data/menu";
import { useMenuHover } from "@/shared/hooks/useMenuHover";

export default function Nav() {
  const menuHover = useMenuHover();
  return (
    <>
      {/* Home */}
      <li>
        <Link href="/">Home</Link>
      </li>

      {/* Collections — simple dropdown */}
      <li className="has-dropdown position-relative" {...menuHover}>
        <a href="#!">
          Collections <i className="fa-regular fa-chevron-down" />
        </a>
        <ul className="submenu">
          {categoryMegamenus.map((cat, index) => (
            <li key={index}>
              <Link href={cat.href}>
                <i className={`${cat.icon} mr--8`} /> {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Shop — clean dropdown */}
      <li className="has-dropdown position-relative" {...menuHover}>
        <a href="#!">
          Shop <i className="fa-regular fa-chevron-down" />
        </a>
        <ul className="submenu">
          {shopPages
            .flatMap((section) => section.items)
            .map((item, index) => (
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
        <Link href="/shop?collection=new-arrivals">
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
