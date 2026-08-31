import RatingStars from "@/shared/components/ui/RatingStars";
import Image from "next/image";
import Link from "next/link";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist2 from "@/shared/components/common/AddtoWishlist2";
import AddtoCompare2 from "@/shared/components/common/AddtoCompare2";
import { Product } from "@/shared/types";
import AddToCart3 from "@/shared/components/common/AddToCart2";
import { cn } from "@/lib/utils";

const ProductCardGray = ({ product }: { product: Product }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full",
      )}
    >
      <div className="relative w-full aspect-[3/4] rounded-t-xl overflow-hidden bg-gray-100 group/image p-4 pb-0">
        <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
          <Image
            alt="Card Image"
            src={product.imgSrc}
            width={312}
            height={445}
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
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover/image:opacity-100 group-hover/image:translate-x-0 transition-all duration-300">
          <AddtoWishlist2
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
            product={product}
          />
          <AddtoCompare2
            className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors tooltips"
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
            <i className="fa-sharp fa-regular fa-eye" />
          </AddtoQuickview1>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center text-center flex-grow bg-gray-100 rounded-b-xl">
        <div className="flex flex-col flex-grow w-full items-center">
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
          <div className="flex items-center justify-center gap-2 mb-3">
            <ul className="flex items-center gap-1 text-yellow-400 text-[10px] list-none p-0 m-0">
              <RatingStars rating={product.rating} />
            </ul>
            <p className="text-[10px] text-gray-500 m-0">({product.reviewCount})</p>
            <span className="text-gray-400 text-xs ml-1">
              <i className="fa-sharp fa-solid fa-truck-fast" />
            </span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-4 mt-auto">
            {product.oldPrice && (
              <del className="text-sm text-gray-400 font-medium">${product.oldPrice?.toFixed(2)}</del>
            )}
            <span className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.discountPercentage && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-600">
                -{product.discountPercentage}%
              </span>
            )}
          </div>
        </div>
        <div className="w-full mt-auto">
          <AddToCart3
            variant="default"
            size="sm"
            className="w-full font-semibold"
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardGray;
