"use client";

import { useUiElement } from "@/context/uiStore";

export default function CategorySidebarToggler({
  parentClass = "rbt-offcanvas-trigger-btn rbt-cat-offcanvas-activation rbt-burger-menu-bar",
}) {
  const { openCategorySidebar } = useUiElement();
  return (
    <a
      className={parentClass}
      href="#!"
      onClick={openCategorySidebar}
    >
      <div className="rbt-burger-menu-bar-wrapper">
        <i className="rbt-line-btn">
          <span className="rbt-lines" />
        </i>
        <i className="rbt-line-btn rbt-hover-effect">
          <span className="rbt-lines" />
        </i>
      </div>
    </a>
  );
}
