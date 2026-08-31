"use client";

import { useContextElement } from "@/shared/store/Context";

export default function CompareItemLength() {
  const { compareItem } = useContextElement();
  return <>{compareItem.length}</>;
}
