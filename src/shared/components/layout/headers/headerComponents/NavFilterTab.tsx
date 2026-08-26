import React from "react";

export default function NavFilterTab() {
  return (
    <div className="rbt-product-nav-section rbt-nav-effect-activation rbt-product-nav-var-black rbt-scroll-trigger fade_in animation-order-2">
      <ul className="rbt-product-nav-grp">
        <li>
          <a href="#" className="rbt-product-nav">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="rbt-product-nav active">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="rbt-product-nav">
            Kids
          </a>
        </li>
      </ul>
      <span
        className="rbt-bg-highlight"
        style={{
          width: "84.95px",
          height: "30.4px",
          left: 8,
          top: 6,
        }}
      />
    </div>
  );
}
