"use client";

import { useUiElement } from "@/shared/store/uiStore";

export default function CartSidebarToggler({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const { openCartSidebar } = useUiElement();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        openCartSidebar();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
