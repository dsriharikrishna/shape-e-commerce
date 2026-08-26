"use client";

import { useUiElement } from "@/context/uiStore";
import { useEffect } from "react";

/**
 * Syncs body classes with UI store so CSS that targets body still works.
 */
export default function BodyUiSync() {
  const { cartSidebarOpen, comparePanelOpen, categorySidebarOpen } =
    useUiElement();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (cartSidebarOpen) body.classList.add("cart-sidenav-menu-active");
    else body.classList.remove("cart-sidenav-menu-active");
  }, [cartSidebarOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (comparePanelOpen) body.classList.add("offcanvas-menu-active");
    else body.classList.remove("offcanvas-menu-active");
  }, [comparePanelOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (categorySidebarOpen) body.classList.add("cart-sidenav-menu-active");
    else body.classList.remove("cart-sidenav-menu-active");
  }, [categorySidebarOpen]);

  return null;
}
