"use client";

import type { Swiper as SwiperClass } from "swiper";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useContextElement } from "@/shared/store/Context";
import ColorSelect from "@/features/products/components/product-details/colorSelects/ColorSelect";
import QuantitySelect from "@/shared/components/common/QuantitySelect";
import Facts from "@/shared/components/common/Facts";
import { Button, buttonVariants } from "@/shared/components/ui/button";

const productImages = [
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-1.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-2.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-3.webp",
    width: 1024,
    height: 793,
  },
  {
    src: "/assets/images/product-img/electronics/electronics-bg-trans-01-a-4.webp",
    width: 1026,
    height: 793,
  },
];
export default function QuickView2() {
  const [quantity, setQuantity] = useState(1);
  const [thumbSlider, setThumbSlider] = useState<SwiperClass | null>(null);
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    updateQuantity,
    addToWishlist,
    isAddedtoWishlist,

    addToCompareItem,
    isAddedToCompareItem,
    quantityInCart,
  } = useContextElement();
  const slides = useMemo(() => {
    const updatedSlides = [...productImages];
    if (quickViewItem.imgSrc) {
                                          height: "71px",
                                        }}
                                        width={1024}
                                        height={793}
                                      />
}
