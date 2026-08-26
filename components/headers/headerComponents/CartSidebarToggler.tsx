"use client";

import { useUiElement } from "@/context/uiStore";

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
