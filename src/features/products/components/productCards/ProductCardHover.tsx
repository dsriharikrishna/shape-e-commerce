import RatingStars from "@/shared/components/ui/RatingStars";
import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist2 from "@/shared/components/common/AddtoWishlist2";
import { Product } from "@/shared/types";
import { cn } from "@/lib/utils";

export default function ProductCardHover({
  product,
  imbBgClass = "",
  contentBgClass = "",
  starClass = "",
}: {
  product: Product;
  imbBgClass?: string;
  contentBgClass?: string;
  starClass?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100",
      )}
    >
      <div className="relative w-full aspect-square rounded-t-xl overflow-hidden bg-gray-50 group/image">
        <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={312}
            height={312}
            className={cn("object-cover w-full h-full transition-all duration-500", product.hoverImg ? "group-hover/image:opacity-0" : "group-hover/image:scale-105")}
          />

          {product.hoverImg && (
            <Image
              alt="Card Image"
              src={product.hoverImg}
              width={312}
              height={312}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 scale-105"
            />
          )}
        </Link>
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className={cn("text-xs font-semibold px-2 py-1 rounded", product.badge.bg)}>
              {product.badge.text}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-4 group-hover/image:opacity-100 group-hover/image:translate-x-0 transition-all duration-300">
          <AddtoWishlist2
            parentClass="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
          <AddtoQuickview1
            product={product}
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            data-tooltip="Quick View"
            data-tooltip-position="left"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fa-sharp fa-regular fa-magnifying-glass" />
          </AddtoQuickview1>
        </div>

        <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-300">
          <AddtoQuickview1
            typeAnchor
            product={product}
            className="w-full bg-primary text-white text-center py-2 text-sm font-semibold hover:bg-primary-dark transition-colors"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            Select Option
          </AddtoQuickview1>
        </div>
      </div>
      <div className={cn("p-4 flex flex-col items-center text-center flex-grow", contentBgClass)}>
        {product.category?.length && product.category.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
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
        <h6 className="font-semibold text-base text-gray-900 mb-2 leading-tight">
          <Link href={`/product-single-default/${product.id}`} className="hover:text-primary transition-colors">
            {product.title}
          </Link>
        </h6>
        <div className="flex items-center justify-center gap-2 mb-2">
          <ul className={cn("flex items-center gap-1 text-yellow-400 text-[10px] list-none p-0 m-0", starClass)}>
            <RatingStars rating={product.rating} />
          </ul>
          <p className="text-[10px] text-gray-500 m-0">({product.reviewCount})</p>
          <span className="text-gray-400 text-xs ml-1">
            <i className="fa-sharp fa-solid fa-truck-fast" />
          </span>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 mt-auto">
          {product.oldPrice && (
            <del className="text-sm text-gray-400 font-medium">${product.oldPrice.toFixed(2)}</del>
          )}
          <span className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.discountPercentage && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
