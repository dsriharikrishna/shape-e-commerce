"use client";
import { useContextElement } from "@/shared/store/Context";

export default function CartItemsLength() {
  const { cartProducts } = useContextElement();
  return <>{cartProducts.length}</>;
}
