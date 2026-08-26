"use client";

import { useUiElement } from "@/context/Context";

export default function MobileMenuToggler({
  parentClass = "hamburger-button rbt-round-btn",
}) {
  const { toggleMobileMenu } = useUiElement();
  return (
    <button className={parentClass} onClick={toggleMobileMenu}>
      <i className="fa-solid fa-bars" />
    </button>
  );
}
