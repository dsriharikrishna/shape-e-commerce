"use client";

import { useUiElement } from "@/context/uiStore";

export default function Toasters() {
  const { toasterCompareVisible, toasterWishlistVisible } = useUiElement();
  return (
    <>
      <div
        className={`rbt-toaster rbt-toaster-compare${toasterCompareVisible ? " is-visible" : ""}`}
        role="alert"
        aria-atomic="true"
        aria-live="assertive"
      >
        <i className="fa-regular fa-check mr--8" />
        Added in Compare
      </div>
      <div
        className={`rbt-toaster rbt-toaster-wishlist${toasterWishlistVisible ? " is-visible" : ""}`}
        role="alert"
        aria-atomic="true"
        aria-live="assertive"
      >
        <i className="fa-regular fa-check mr--8" />
        Added in Wishlist
      </div>
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
}
