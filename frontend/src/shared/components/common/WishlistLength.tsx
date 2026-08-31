"use client";

import { useContextElement } from "@/shared/store/Context";

export default function WishlistLength() {
  const { wishList } = useContextElement();
  return <>{wishList.length}</>;
}
