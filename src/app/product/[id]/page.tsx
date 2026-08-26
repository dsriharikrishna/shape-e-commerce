"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  Truck,
  ShoppingCart,
  CheckCircle2,
  ChevronRight,
  Heart,
  Share2,
} from "lucide-react";
import { allProducts as products } from "@/features/products/data/products";
import Header3 from "@/shared/components/layout/headers/Header3";
import Footer3 from "@/shared/components/layout/footers/Footer3";
import { Button } from "@/shared/components/ui/button";
import { useContextElement } from "@/shared/store/store";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import ProductCard1 from "@/features/products/components/productCards/ProductCard1";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  const {
    addProductToCart,
    isAddedToCartProducts,
    quantityInCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isAddedtoWishlist,
  } = useContextElement();

  const isAddedToCart = isAddedToCartProducts(product.id);
  const cartQuantity = quantityInCart(product.id);
  const isWishlisted = isAddedtoWishlist(product.id);

  const [localQuantity, setLocalQuantity] = useState(
    cartQuantity > 0 ? cartQuantity : 1
  );
  const [activeImage, setActiveImage] = useState(0);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

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
    <>
      <Header3 sticky={true} />

      {/* Breadcrumb Header */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-black transition-colors">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-black font-semibold truncate">
              {product.title}
            </span>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={
                    product.variants?.[activeImage]?.src || product.imgSrc || ""
                  }
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {product.variants && product.variants.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx
                          ? "border-black"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={variant.src || ""}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              {/* Badges */}
              {product.badge && (
                <div className="mb-4">
                  <span
                    className={`text-xs font-bold uppercase px-3 py-1 rounded-full text-white bg-black`}
                  >
                    {product.badge.text}
                  </span>
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              {/* Rating & Stock Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < (product.rating || 5) ? "fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1 font-medium">
                    ({product.reviewCount || 0} Reviews)
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-200" />
                <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                  In Stock
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
                {(product.discount ?? 0) > 0 && (
                  <span className="text-sm font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Elevate your everyday style with our premium {product.title}.
                Crafted from high-quality materials, this piece offers both
                unparalleled comfort and a modern aesthetic.
              </p>

              {/* Options */}
              <div className="space-y-6 mb-8">
                {/* Color */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">
                    Color
                  </h4>
                  <div className="flex gap-2">
                    {["bg-black", "bg-gray-300", "bg-blue-900"].map(
                      (color, idx) => (
                        <button
                          key={idx}
                          className={`w-10 h-10 rounded-full ${color} border border-gray-200 shadow-sm ring-2 ${idx === 0 ? "ring-black ring-offset-2" : "ring-transparent hover:ring-gray-300"} transition-all`}
                        />
                      )
                    )}
                  </div>
                </div>
                {/* Size */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center justify-between">
                    Size
                    <a
                      href="#"
                      className="text-xs text-gray-500 hover:text-black underline"
                    >
                      Size Guide
                    </a>
                  </h4>
                  <div className="flex gap-2 text-sm font-medium">
                    {["S", "M", "L", "XL"].map((size, idx) => (
                      <button
                        key={idx}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl border ${idx === 1 ? "border-black bg-black text-white" : "border-gray-200 text-gray-600 hover:border-black"} transition-all`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center rounded-xl border border-gray-200 p-1 bg-white h-14">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-gray-900">
                    {localQuantity}
                  </span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAddedToCart}
                  className={`flex-1 h-14 rounded-xl font-semibold text-base transition-colors ${
                    isAddedToCart
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-black text-white hover:bg-gray-900"
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" /> Added To Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" /> Add To Cart
                    </>
                  )}
                </Button>

                <Button
                  onClick={toggleWishlist}
                  variant="outline"
                  size="icon"
                  className={`h-14 w-14 rounded-xl flex-shrink-0 ${isWishlisted ? "text-red-500 border-red-200 bg-red-50" : ""}`}
                >
                  <Heart
                    className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </Button>
              </div>

              {/* Features List */}
              <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">
                      Free Delivery
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      Enter your Postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-200 w-full" />
                <div className="flex items-start gap-3">
                  <Share2 className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">
                      Return Delivery
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-24">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full flex flex-col sm:flex-row justify-start gap-2 bg-transparent h-auto mb-8 border-b border-gray-200 rounded-none p-0">
                <TabsTrigger
                  value="description"
                  className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-4"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="additional"
                  className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-4"
                >
                  Additional Information
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-4"
                >
                  Reviews (3)
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="description"
                className="text-gray-600 leading-relaxed max-w-4xl space-y-4"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-900 font-medium mt-6">
                  <li>100% Cotton material</li>
                  <li>Machine washable</li>
                  <li>True to size fit</li>
                  <li>Breathable and comfortable</li>
                </ul>
              </TabsContent>
              <TabsContent value="additional" className="text-gray-600">
                <div className="max-w-xl">
                  <div className="flex py-3 border-b border-gray-100">
                    <span className="w-1/3 font-semibold text-gray-900">
                      Weight
                    </span>
                    <span className="w-2/3 text-gray-600">0.5 kg</span>
                  </div>
                  <div className="flex py-3 border-b border-gray-100">
                    <span className="w-1/3 font-semibold text-gray-900">
                      Dimensions
                    </span>
                    <span className="w-2/3 text-gray-600">10 × 10 × 15 cm</span>
                  </div>
                  <div className="flex py-3 border-b border-gray-100">
                    <span className="w-1/3 font-semibold text-gray-900">
                      Materials
                    </span>
                    <span className="w-2/3 text-gray-600">100% Cotton</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="text-gray-600">
                <p>Customer reviews will be displayed here.</p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Products
              </h2>
              <Link
                href="/shop"
                className="text-black font-semibold hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(10, 14).map((relatedProduct) => (
                <ProductCard1
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer3 />
    </>
  );
}
