"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoWishlist2 from "@/shared/components/common/AddtoWishlist2";
import { Product } from "@/shared/types";
import AddToCart from "@/shared/components/common/AddToCart";
import { Button, buttonVariants } from "@/shared/components/ui/button";

import { cn } from "@/lib/utils";

export default function ProductCardSmall({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);

  return (
    <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden group/image">
        <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
          <Image
            className="object-cover w-full h-full transition-transform duration-500 group-hover/image:scale-105"
            alt="Product"
            src={selectedVariant}
            width={624}
            height={624}
          />
        </Link>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className={cn("text-xs font-semibold px-2 py-1 rounded", product.badge.bg)}>
              {product.badge.text}
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 opacity-0 translate-x-4 group-hover/image:opacity-100 group-hover/image:translate-x-0 transition-all duration-300">
          <AddtoWishlist2
            parentClass="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
        </div>
        
        <ul className="absolute bottom-0 left-0 w-full flex m-0 p-0 list-none h-1 z-10">
          {product.variants?.map((variant, index) => (
            <li key={index} className="flex-1 h-full relative group/variant cursor-pointer">
              <Link
                href={`/product-single-default/${product.id}`}
                className={cn("absolute inset-0 block h-full bg-transparent group-hover/variant:bg-primary/30 transition-colors", selectedVariant === variant.src ? "bg-primary/50" : "")}
                onMouseOver={(e) => {
                  e.preventDefault();
                  if (variant.src) {
                    setSelectedVariant(variant.src);
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 flex flex-col flex-grow bg-white">
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-3">
            <ul className="flex items-center gap-1.5 m-0 p-0 list-none">
              {product.variants?.map((variant, idx) => (
                <li
                  key={idx}
                  className={cn("rounded-full p-0.5 border-2 transition-colors", selectedVariant === variant.src ? "border-primary" : "border-transparent hover:border-gray-300")}
                >
                  <a
                    href="#"
                    className="block w-4 h-4 rounded-full tooltips"
                    data-tooltip={variant.tooltip}
                    data-tooltip-position="top"
                    style={{ backgroundColor: variant.hex }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.src) {
                        setSelectedVariant(variant.src);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
            {product.moreItemsLink && (
              <Link
                className="text-[10px] text-gray-500 hover:text-primary transition-colors"
                href={`/product-single-default/${product.id}`}
              >
                +{product.moreItemsLink} More Items
              </Link>
            )}
          </div>

          {product.category?.length && product.category.length > 0 && (
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-category`}
                  className="text-xs text-gray-500 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {item}
                  {index < (product.category?.length || 0) - 1 ? "," : ""}
                </Link>
              ))}
            </div>
          )}

          <h6 className="font-semibold text-sm text-gray-900 mb-2 leading-tight">
            <Link href={`/product-single-default/${product.id}`} className="hover:text-primary transition-colors">
              {product.title}
            </Link>
          </h6>

          <div className="flex items-center gap-2 mb-2 mt-auto">
            <ul className="flex items-center gap-1 text-yellow-400 text-[10px] list-none p-0 m-0">
              {[...Array(product.rating ?? 0)].map((_, i) => (
                <li key={i}>
                  <i className="fa-solid fa-star" />
                </li>
              ))}
              {[...Array(5 - (product.rating ?? 0))].map((_, index) => (
                <li key={`empty-${index}`}>
                  <i className="fa-regular fa-star" />
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-gray-500 m-0">({product.reviewCount})</p>
          </div>

          <div className="flex items-center flex-wrap gap-2 mb-4">
            {product.oldPrice && (
              <del className="text-xs text-gray-400 font-medium">${product.oldPrice?.toFixed(2)}</del>
            )}
            <span className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
        </div>

        <div className="w-full mt-auto">
          <div className="flex items-center gap-2">
            <AddToCart
              variant="default"
              size="sm"
              className="flex-grow font-semibold"
              product={product}
            />
            <a
              className={buttonVariants({ variant: "outline", size: "sm", className: "shrink-0 w-9 h-9 p-0 rounded-md flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-colors" })}
              href="#"
              title="Add To Compare"
            >
              <i className="fa-regular fa-file-plus-minus" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
