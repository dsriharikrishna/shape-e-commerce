"use client";

import { useCallback, useEffect } from "react";

function clearMenuOverlay() {
  document.documentElement.classList.remove("header-top-menu-nav-opened");
}

export function useMenuHover() {
  const handleMouseEnter = useCallback(() => {
    document.documentElement.classList.add("header-top-menu-nav-opened");
  }, []);

  const handleMouseLeave = useCallback(() => {
    requestAnimationFrame(() => {
      if (!document.querySelector(".mainmenu:hover")) {
        clearMenuOverlay();
      }
    });
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Element && !target.closest(".mainmenu")) {
        clearMenuOverlay();
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
