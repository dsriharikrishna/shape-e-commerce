"use client";

import { useCallback } from "react";

const HOVER_OUT_DELAY = 200;

let globalHoverOutTimer: ReturnType<typeof setTimeout> | undefined = undefined;
let activeHoverCount = 0;

export function useMenuHover() {
  const handleMouseEnter = useCallback(() => {
    activeHoverCount++;
    
    if (globalHoverOutTimer) {
      clearTimeout(globalHoverOutTimer);
      globalHoverOutTimer = undefined;
    }
    
    document.documentElement.classList.add("header-top-menu-nav-opened");
  }, []);

  const handleMouseLeave = useCallback(() => {
    activeHoverCount = Math.max(0, activeHoverCount - 1);
    
    if (globalHoverOutTimer) {
      clearTimeout(globalHoverOutTimer);
    }
    
    const currentCount = activeHoverCount;
    globalHoverOutTimer = setTimeout(() => {
      if (activeHoverCount === 0 && currentCount === 0) {
        document.documentElement.classList.remove("header-top-menu-nav-opened");
      }
      globalHoverOutTimer = undefined;
    }, HOVER_OUT_DELAY);
  }, []);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}
