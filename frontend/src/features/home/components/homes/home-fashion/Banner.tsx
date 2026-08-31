"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-100 p-8 md:p-12 h-[380px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                alt="Ecommerce Product Banner Image"
                src="/assets/images/product-banner/product-banner-img-04.webp"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-sm">
              <span className="inline-block text-sm font-bold tracking-widest text-red-500 uppercase mb-3">
                HURRY SALE 50%
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
                <span className="font-bold">Trends</span> to Style
              </h2>
              <p className="text-gray-600 mb-8 line-clamp-3">
                Discover curated fashion pieces designed for timeless style, and
                effortless confidence.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-100 p-8 md:p-12 h-[380px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                alt="Ecommerce Product Banner Image"
                src="/assets/images/product-banner/product-banner-img-05.webp"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-sm">
              <span className="inline-block text-sm font-bold tracking-widest text-red-500 uppercase mb-3">
                SALE UP TO 70%
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
                <span className="font-bold">Seal The</span> Deal Now
              </h2>
              <p className="text-gray-600 mb-8 line-clamp-3">
                Refresh your wardrobe with trend-forward styles and exclusive
                deals made for you.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
