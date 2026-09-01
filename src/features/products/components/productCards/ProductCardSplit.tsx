import RatingStars from "@/shared/components/ui/RatingStars";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/shared/components/common/AddToCart";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist2 from "@/shared/components/common/AddtoWishlist2";
import AddtoCompare2 from "@/shared/components/common/AddtoCompare2";

import { Product } from "@/shared/types";
import { cn } from "@/lib/utils";

export default function ProductCardSplit({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden h-full">
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden group/image shrink-0">
        <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={1162}
            height={892}
            className="object-cover w-full h-full transition-transform duration-500 group-hover/image:scale-105"
          />
        </Link>
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className={cn("text-xs font-semibold px-2 py-1 rounded", product.badge.bg)}>
              {product.badge.text}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 opacity-0 translate-x-4 group-hover/image:opacity-100 group-hover/image:translate-x-0 transition-all duration-300">
          <AddtoWishlist2
            parentClass="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="flex flex-col">
            {product.category?.length && product.category.length > 0 && (
              <div className="flex items-center gap-2 mb-1 flex-wrap">
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
            <div className="flex items-center gap-2">
              <ul className="flex items-center gap-1 text-yellow-400 text-[10px] list-none p-0 m-0">
                <RatingStars rating={product.rating} />
              </ul>
              <p className="text-[10px] text-gray-500 m-0">({product.reviewCount})</p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end shrink-0">
            <div className="flex items-center gap-2 mb-1">
              {product.oldPrice && (
                <del className="text-sm text-gray-400 font-medium">
                  ${product.oldPrice.toFixed(2)}
                </del>
              )}
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            {product.discount && (
              <div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">
                  Save {product.discount}%
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
          <AddToCart variant="default" size="sm" className="flex-1 font-semibold" product={product} />
          <div className="flex items-center gap-2 shrink-0">
            <AddtoCompare2
              className="w-9 h-9 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors tooltips"
              product={product}
            />
            <AddtoQuickview1
              product={product}
              className="w-9 h-9 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors tooltips"
              data-tooltip="Quick View"
              data-tooltip-position="top"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
              <i className="fa-sharp fa-regular fa-eye" />
            </AddtoQuickview1>
          </div>
        </div>
      </div>
    </div>
  );
}
