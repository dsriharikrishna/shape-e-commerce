"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist2 from "@/shared/components/common/AddtoWishlist2";
import AddtoCompare2 from "@/shared/components/common/AddtoCompare2";

import { Product } from "@/shared/types";
import AddToCart3 from "@/shared/components/common/AddToCart2";
import { cn } from "@/lib/utils";

export default function ProductCardVariant({
  product,
  cardBodyClass = "p-5 flex flex-col flex-grow relative bg-white rounded-b-2xl",
}: {
  product: Product;
  cardBodyClass?: string;
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.imgSrc);
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden h-full">
      <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden group/image rounded-t-2xl">
        <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
          <Image
            className="object-cover w-full h-full transition-transform duration-500 group-hover/image:scale-105"
            alt="Card Image"
            src={selectedVariant}
            width={624}
            height={846}
          />
        </Link>
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className={cn("text-xs font-semibold px-2 py-1 rounded", product.badge.bg)}>
              {product.badge.text}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 opacity-0 translate-x-4 group-hover/image:opacity-100 group-hover/image:translate-x-0 transition-all duration-300">
          <AddtoWishlist2
            parentClass="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
        </div>
      </div>
      <div className={cardBodyClass}>
        {product.hotSell && (
          <div className="w-full overflow-hidden bg-primary/10 text-primary py-1.5 px-3 -mx-5 -mt-5 mb-4 border-b border-primary/20">
            <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite] gap-8">
              {[...Array(7)].map((_, i) => (
                <a href="#!" key={i} className="flex items-center gap-2 text-xs font-semibold hover:text-primary-dark">
                  <span>
                    <Image
                      alt="icon"
                      src="/assets/images/icons/scroll-icon-01.svg"
                      width={16}
                      height={16}
                    />
                  </span>
                  Hot Sell 50% Off
                </a>
              ))}
            </div>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <AddtoCompare2
            className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
          <AddtoQuickview1
            product={product}
            className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors tooltips"
            data-tooltip="Quick View"
            data-tooltip-position="left"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fa-sharp fa-regular fa-eye" />
          </AddtoQuickview1>
        </div>

        <div className="flex flex-col flex-grow relative z-0 pr-12">
          <div className="flex items-center gap-2 mb-3">
            <ul className="flex items-center gap-2 m-0 p-0 list-none">
              {product.variants?.map((variant, index) => (
                <li
                  className={cn("rounded-md overflow-hidden border-2 transition-all cursor-pointer", selectedVariant === variant.src ? "border-primary" : "border-transparent hover:border-gray-300")}
                  key={index}
                >
                  <a
                    className="block w-10 h-10 relative"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (variant.src) {
                        setSelectedVariant(variant.src);
                      }
                    }}
                  >
                    {variant.src && (
                      <Image
                        className="object-cover w-full h-full"
                        alt="Product Image"
                        src={variant.src}
                        width={624}
                        height={846}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            {product.moreText && (
              <Link
                className="text-xs text-gray-500 hover:text-primary transition-colors font-medium ml-2"
                href={`/product-single-default/${product.id}`}
              >
                +{product.moreText} More
              </Link>
            )}
          </div>
          
          {product.category?.length && product.category.length > 0 && (
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              {product.category?.map((item, index) => (
                <Link
                  key={index}
                  href={`/shop-by-categories`}
                  className="text-[10px] text-gray-500 hover:text-primary transition-colors uppercase tracking-wider font-semibold"
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
          <div className="flex items-center gap-2 mb-2">
            <ul className="flex items-center gap-1 text-yellow-400 text-[10px] list-none p-0 m-0">
              {[...Array(product.rating)].map((_, i) => (
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
            <p className="text-[10px] text-gray-500 m-0 font-medium">({product.reviewCount})</p>
          </div>
          <div className="flex items-center flex-wrap gap-2 mb-4 mt-auto">
            {product.oldPrice && (
              <del className="text-sm text-gray-400 font-medium">${product.oldPrice?.toFixed(2)}</del>
            )}
            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.discount && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">
                -{product.discount}%
              </span>
            )}
          </div>
        </div>
        <div className="w-full mt-auto pt-4 border-t border-gray-50">
          <AddToCart3 variant="default" size="sm" className="w-full font-semibold" product={product} />
        </div>
      </div>
    </div>
  );
}
