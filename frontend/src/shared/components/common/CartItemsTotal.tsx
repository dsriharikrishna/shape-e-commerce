"use client";
import { useContextElement } from "@/shared/store/Context";

export default function CartItemsTotal() {
  const { totalPrice } = useContextElement();
  return <>{totalPrice.toFixed(2)}</>;
}
