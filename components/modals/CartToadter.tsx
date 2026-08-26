"use client";

import { useState } from "react";

export default function CartToadter() {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`rbt-toaster-style-2 rbt-toaster-activation ${
        show ? "isVisible" : ""
      } `}
    >
      <div className="rbt-innter">
        <button
          className="rbt-close-btn close-toaster"
          onClick={() => setShow(false)}
        >
          <i className="fa-sharp fa-solid fa-xmark" />
        </button>
        <p className="b3 mb--8 rbt-text-color-gray-100">
          “Fresh Cream Milk Powder 1kg” has been added to cart
        </p>
        <a
          href="#"
          className="rbt-underline-btn btn-white border-bottom border-1"
        >
          View Cart
          <i className="fa-regular fa-chevron-right" />
        </a>
      </div>
    </div>
  );
}
