import RatingStars from "@/shared/components/ui/RatingStars";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/shared/components/common/AddToCart";
import AddtoQuickview1 from "@/shared/components/common/AddtoQuickview1";
import AddtoWishlist from "@/shared/components/common/AddtoWishlist";
import Countdown from "@/shared/components/common/Countdown";
import Facts from "@/shared/components/common/Facts";

import { Product } from "@/shared/types";
import AddtoCompare3 from "@/shared/components/common/AddtoCompare3";
import { Button, buttonVariants } from "@/shared/components/ui/button";

import { cn } from "@/lib/utils";

export default function ProductCardList({ product }: { product: Product }) {
  return (
    <>
      <div
        className={cn(
          "group relative flex flex-col md:flex-row bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden",
          product.isStockOut ? "opacity-75" : ""
        )}
      >
        <div className="flex flex-col md:flex-row w-full p-4 gap-6">
          <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto md:min-h-[250px] rounded-lg overflow-hidden bg-gray-50 group/image shrink-0">
            <Link href={`/product-single-default/${product.id}`} className="block w-full h-full">
              <Image
                className={cn("object-cover w-full h-full transition-all duration-500", product.hoverImgSrc ? "group-hover/image:opacity-0" : "group-hover/image:scale-105")}
                alt="Card Image"
                src={product.imgSrc}
                width={1246}
                height={976}
              />
              {product.hoverImgSrc && (
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
              <div className="absolute top-3 left-3 flex flex-col gap-1">
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
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded shadow-sm tooltips"
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
            <h6 className="font-semibold text-xl text-gray-900 mb-2 leading-tight">
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
            <div className="flex items-center flex-wrap gap-2 mb-4">
              {product.oldPrice && (
                <del className="text-sm text-gray-400 font-medium">${product.oldPrice.toFixed(2)}</del>
              )}
              <span className="text-lg font-bold text-gray-900">
                {typeof product.price === "number"
                  ? `$${product.price.toFixed(2)}`
                  : product.price}
              </span>

              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-600">-30%</span>

              {product.pricingBadges &&
                product.pricingBadges.map((badge, index) => (
                  <div key={index} className={`text-xs font-semibold px-2 py-0.5 rounded ${badge.bg}`}>
                    {badge.text}
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-auto">
              {product.isStockOut ? (
                <a
                  className={buttonVariants({ variant: "outline", size: "sm", className: "w-full md:w-auto text-xs font-semibold" })}
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
                  className="w-full md:w-auto font-semibold"
                  product={product}
                />
              )}
              <AddtoCompare3 product={product} />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50 p-4 border-t border-gray-100">
          <div className="w-full relative h-[100px] overflow-hidden">
            <ul className="flex flex-col gap-2 mb-4 list-none p-0">
              {product.productDetails &&
                product.productDetails.map((detail, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="font-semibold text-gray-900 shrink-0">{detail.label} :</span>
                    <div className="text-gray-600">
                      {Array.isArray(detail.text) ? (
                        detail.text.map((line, lineIndex) => (
                          <span
                            key={lineIndex}
                            className={lineIndex > 0 ? "block mt-1" : ""}
                          >
                            {line}
                          </span>
                        ))
                      ) : (
                        <span>{detail.text}</span>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {product.shipmentDetails &&
                product.shipmentDetails.map((shipment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">
                      <i className={shipment.icon} />
                    </span>
                    <div className="flex flex-col text-sm">
                      {shipment.label && (
                        <span className="font-semibold text-gray-900">
                          {shipment.label} :
                        </span>
                      )}
                      {shipment.text && (
                        <span className="text-gray-600">{shipment.text}</span>
                      )}
                      {shipment.link && (
                        <a
                          href={shipment.link.href}
                          className="text-primary hover:underline font-medium text-xs mt-1"
                        >
                          {shipment.link.text}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-full text-center mt-2 relative z-10 before:absolute before:bottom-full before:left-0 before:w-full before:h-12 before:bg-gradient-to-t before:from-gray-50 before:to-transparent">
            <button className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-200">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
}
