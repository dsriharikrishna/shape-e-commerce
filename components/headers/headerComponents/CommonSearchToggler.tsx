"use client";

import { useEffect } from "react";
import { useUiElement } from "@/context/uiStore";

export default function CommonSearchToggler() {
  const { commonSearchOpen, toggleCommonSearch, closeCommonSearch } =
    useUiElement();

  useEffect(() => {
    window.addEventListener("scroll", closeCommonSearch);
    return () => window.removeEventListener("scroll", closeCommonSearch);
  }, [closeCommonSearch]);

  return (
    <a
      className={`rbt-round-btn has-rbt-md-fsize rbt-common-search-trigger-active rbt-modern-close-btn${commonSearchOpen ? " open" : ""}`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggleCommonSearch();
      }}
    >
      <i className="fa-regular fa-search search-icon" />
      <div className="modern-close-wrapper" />
    </a>
  );
}
