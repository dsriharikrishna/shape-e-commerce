"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoCompare1 from "@/shared/components/common/AddtoCompare1";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist from "@/shared/components/common/AddtoWishlist";
import Countdown from "@/shared/components/common/Countdown";
import Facts from "@/shared/components/common/Facts";

import { Product } from "@/shared/types";
import AddToCart from "@/shared/components/common/AddToCart";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProductCardAction({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100",
        product.isStockOut ? "opacity-75" : ""
      )}
    >
      <div
        className={cn("p-4 flex flex-col h-full")}
      >
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-50 mb-4 group/image">
          <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
            <Image
              className={cn("object-cover w-full h-full transition-all duration-500", product.hoverImgSrc || product.hoverVideoSrc ? "group-hover/image:opacity-0" : "group-hover/image:scale-105")}
              alt="Card Image"
              src={selectedVariant}
              width={1024}
              height={793}
            />
            {product.hoverVideoSrc && (
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
                src={product.hoverVideoSrc}
                muted
                loop
                autoPlay
              />
            )}
            {product.hoverImgSrc && !product.hoverVideoSrc && (
              <Image
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 scale-105"
                alt="Card Image"
                src={product.hoverImgSrc}
                width={1246}
                height={976}
              />
            )}
          </Link>
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.badges.map((badge, index) => (
                <div
                  key={index}
                  className={`text-xs font-semibold px-2 py-1 rounded ${badge.bg}`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          )}
          {product.watchingTooltip && (
            <div
              className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded shadow-sm tooltips"
              data-tooltip={`👁️ ${product.watchingTooltip} People Are Watching This Item`}
              data-tooltip-position="bottom"
            >
              <span>
                <i className="fa-regular fa-eye mr-1" />
                {product.watchingTooltip}
              </span>
            </div>
          )}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 translate-y-4 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-300">
            <AddtoQuickview1
              product={product}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
              data-tooltip="Quick View"
              data-tooltip-position="left"
            >
              <i className="fa-regular fa-magnifying-glass-plus" />
            </AddtoQuickview1>
            <AddtoWishlist product={product} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors" />
          </div>
          {product.countdown && (
            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-center py-2">
              <Countdown />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          {product.variants && product.variants.length > 0 && (
            <div className="flex items-center justify-between mb-3">
              <ul className="flex items-center gap-2 m-0 p-0 list-none">
                {product.variants.map((variant, index) => (
                  <li
                    key={index}
                    className={cn(
                      "rounded-full p-0.5 border-2 transition-colors",
                      selectedVariant === variant.imgSrc ? "border-primary" : "border-transparent hover:border-gray-300"
                    )}
                  >
                    <a
                      className="block w-5 h-5 rounded-full tooltips"
                      data-switcher-color={variant.color}
                      data-src={variant.imgSrc}
                      data-tooltip={variant.tooltip}
                      data-tooltip-position="top"
                      href="#"
                      style={{ backgroundColor: variant.color }}
                      onClick={(e) => {
                        e.preventDefault();
                        if (variant.imgSrc) {
                          setSelectedVariant(variant.imgSrc);
                        }
                      }}
                    >
                    </a>
                  </li>
                ))}
              </ul>
              {product.moreVariantsText && (
                <Link
                  className="text-xs text-gray-500 hover:text-primary transition-colors"
                  href={`/product-single-default/${product.id}`}
                >
                  +{product.moreVariantsText} More Items
                </Link>
              )}
            </div>
          )}
          {product.category?.length && product.category.length > 0 && (
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-categories`}
                  className="text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {item}
                  {index < (product.category?.length || 0) - 1 ? "," : ""}
                </Link>
              ))}
            </div>
          )}
          <h6 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">
            <Link href={`/product-single-default/${product.id}`} className="hover:text-primary transition-colors">
              {product.title}
            </Link>
          </h6>
          <div className="flex items-center gap-2 mb-3">
            <ul className="flex items-center gap-1 text-yellow-400 text-sm list-none p-0 m-0">
              {[...Array(product.rating)].map((_, index) => (
                <li key={index}>
                  <i className="fa-solid fa-star" />
                </li>
              ))}
              {[...Array(5 - (product.rating ?? 0))].map((_, index) => (
                <li key={`empty-${index}`}>
                  <i className="fa-regular fa-star" />
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 m-0">({product.reviewCount})</p>
            {product.extraInfo && product.extraInfo.length > 0 && <Facts />}
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-4 mt-auto">
            {product.oldPrice && (
              <del className="text-sm text-gray-400 font-medium">${product.oldPrice.toFixed(2)}</del>
            )}
            <span className="text-lg font-bold text-gray-900">
              {typeof product.price === "number"
                ? `$${product.price.toFixed(2)}`
                : product.price}
            </span>
            {product.discountPercentage && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-600">
                -{product.discountPercentage}%
              </span>
            )}
            {product.pricingBadges &&
              product.pricingBadges.map((badge, index) => (
                <div key={index} className={`text-xs font-semibold px-2 py-0.5 rounded ${badge.bg}`}>
                  {badge.text}
                </div>
              ))}
          </div>
          {product.quantityArea && (
            <div className="mb-4">
              <p className="text-xs text-gray-600 mb-1">
                Only <strong className="text-gray-900">{product.quantityArea.text}</strong> items left
              </p>
              <div
                className="w-full bg-gray-200 rounded-full h-1.5"
                role="progressbar"
                aria-label="Shipping-progress"
                aria-valuenow={product.quantityArea.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: `${product.quantityArea.progress}%` }}
                />
              </div>
            </div>
          )}
          <div className="flex items-center gap-2 mt-auto">
            {product.isStockOut ? (
              <a
                className={buttonVariants({ variant: "outline", size: "sm", className: "w-full text-xs font-semibold" })}
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#notifyModal"
              >
                <i className="fa-regular fa-bell mr-2" /> Notify Me
              </a>
            ) : (
              <AddToCart
                variant="default"
                size="sm"
                className="w-full font-semibold"
                product={product}
              />
            )}
            <AddtoCompare1 product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
