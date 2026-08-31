"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Star,
  Truck,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { singleStyleProducts2 } from "@/shared/data/products/others";
import { useContextElement } from "@/shared/store/store";
import "swiper/css";
import "swiper/css/navigation";

export default function SingleProduct() {
  const product = singleStyleProducts2[0];
  const {
    addProductToCart,
    isAddedToCartProducts,
    quantityInCart,
    updateQuantity,
  } = useContextElement();

  const isAddedToCart = isAddedToCartProducts(product.id);
  const cartQuantity = quantityInCart(product.id);

  // Local state for quantity before adding to cart
  const [localQuantity, setLocalQuantity] = useState(1);

  // Sync local quantity with cart quantity if item is in cart
  useEffect(() => {
    if (isAddedToCart && cartQuantity > 0) {
      setLocalQuantity(cartQuantity);
    }
  }, [isAddedToCart, cartQuantity]);

  const handleDecreaseQuantity = () => {
    if (isAddedToCart) {
      updateQuantity(product.id, Math.max(1, localQuantity - 1));
    } else {
      setLocalQuantity(Math.max(1, localQuantity - 1));
    }
  };

  const handleIncreaseQuantity = () => {
    if (isAddedToCart) {
      updateQuantity(product.id, localQuantity + 1);
    } else {
      setLocalQuantity(localQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      addProductToCart(product.id, localQuantity);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            <span className="font-bold">Item</span> Of The Week
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Swiper Column */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              loop={false}
              modules={[Navigation]}
              navigation={{
                prevEl: ".single-product-prev",
                nextEl: ".single-product-next",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
            >
              {product?.frameSlides?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-100">
                    {slide.src && (
                      <Image
                        src={slide.src}
                        alt="Product Image"
                        fill
                        className="object-cover"
                      />
                    )}
                    {/* Badges */}
                    {slide.badges?.map((badge, idx) => (
                      <div key={idx} className="absolute top-4 left-4">
                        <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                          {badge.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <button className="single-product-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg text-gray-800 hover:bg-black hover:text-white transition-all">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="single-product-next absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg text-gray-800 hover:bg-black hover:text-white transition-all">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="mb-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Casual Wear
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <Link
                href={`/product/${product.id}`}
                className="hover:text-gray-600"
              >
                {product.title}
              </Link>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Elevate your casual wardrobe with this stylish Zipper Neckline
              Bateau T-Shirt. Featuring a modern bateau neckline with a unique
              zipper detail.
            </p>

            {/* Rating & Stock Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-1 font-medium">
                  (46)
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <Truck className="h-5 w-5" />
              </div>
              <div className="w-px h-6 bg-gray-200" />
              <div className="text-sm text-gray-600">
                <span className="font-bold mr-1">SKU:</span> HN-508801
              </div>
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                9 in Stock
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                -30%
              </span>
            </div>

            {/* Options */}
            <div className="space-y-6 mb-8">
              {/* Color */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">Color</h4>
                <div className="flex gap-2">
                  {["bg-red-500", "bg-blue-500", "bg-green-500"].map(
                    (color, idx) => (
                      <button
                        key={idx}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-white shadow-sm ring-2 ${idx === 0 ? "ring-black" : "ring-transparent hover:ring-gray-300"} transition-all`}
                      />
                    )
                  )}
                </div>
              </div>
              {/* Size */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">Size</h4>
                <div className="flex gap-2 text-sm font-medium">
                  {["S", "M", "L", "XL"].map((size, idx) => (
                    <button
                      key={idx}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg border ${idx === 1 ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-gray-400"} transition-all`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <div className="flex items-center rounded-xl border border-gray-200 p-1">
                <button
                  onClick={handleDecreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-gray-900">
                  {localQuantity}
                </span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={isAddedToCart}
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors ${
                  isAddedToCart
                    ? "bg-green-600 text-white hover:bg-green-700 cursor-default"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                {isAddedToCart ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Added To Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add To Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
