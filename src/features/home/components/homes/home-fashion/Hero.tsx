"use client";

import { collections } from "@/shared/data/collections";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative">
          <Swiper
            className="w-full"
            spaceBetween={24}
            loop={true}
            autoplay={false}
            pagination={{
              clickable: true,
              el: ".hero-pagination",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1.6 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {collections.map((product) => (
              <SwiperSlide key={product.id} className="pb-12">
                <div className="group relative overflow-hidden rounded-3xl bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image Container */}
                  <div
                    className={`relative h-[400px] w-full overflow-hidden ${product.bgClass}`}
                  >
                    <Link href="/shop" className="block w-full h-full">
                      <Image
                        src={product.image || ""}
                        alt={product.title || "Product Image"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link
                        href="/shop"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 text-center bg-white border-t border-gray-100">
                    <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                      {product.subtitle}
                    </span>
                    <h4 className="mt-2 text-2xl font-bold text-gray-900">
                      <Link href="/shop" className="hover:text-black">
                        <span className="font-extrabold mr-1">
                          {product.titleBold}
                        </span>
                        <span className="font-light">{product.title}</span>
                      </Link>
                    </h4>
                    <Link
                      href="/shop"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-black hover:text-white"
                    >
                      <span>Shop Products</span>
                      <ShoppingBag className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination Container */}
          <div className="hero-pagination absolute bottom-0 left-0 flex w-full justify-center gap-2" />
        </div>
      </div>
    </div>
  );
}
