"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useUiElement } from "@/context/uiStore";

export default function Overlay() {
  const pathname = usePathname();
  const { closeAll } = useUiElement();

  useEffect(() => {
    // Clean up classes and modals on navigation
    const cleanup = () => {
      // Close all UI elements from store
      closeAll();

      // Remove header navigation class
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("header-top-menu-nav-opened");
      }
    };

    cleanup();

    return () => {
      cleanup();
    };
  }, [pathname, closeAll]);

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        closeAll();
      }}
      className="close_side_menu catagories-close_side_menu"
      href="#"
    />
  );
}
