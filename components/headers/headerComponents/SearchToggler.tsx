"use client";

import { useEffect } from "react";
import { useUiElement } from "@/context/uiStore";

export default function SearchToggler() {
  const { searchOpen, toggleSearch, closeSearch } = useUiElement();

  useEffect(() => {
    window.addEventListener("scroll", closeSearch);
    return () => window.removeEventListener("scroll", closeSearch);
  }, [closeSearch]);

  return (
    <a
      className={`search-trigger-active rbt-round-btn rbt-bg-static-gray rbt-modern-close-btn${searchOpen ? " open" : ""}`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggleSearch();
      }}
    >
      <i className="fa-regular fa-search search-icon" />
      <div className="modern-close-wrapper" />
    </a>
  );
}
