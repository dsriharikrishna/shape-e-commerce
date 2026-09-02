"use client";

import Countdown from "@/shared/components/common/Countdown";
import ProductCardVariant from "@/features/products/components/productCards/ProductCardVariant";
import { fashionProducts } from "@/shared/data/products/fashion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

export default function Products2() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
              <span className="font-bold">Last Chance</span> Clearance Sale
            </h4>
            <p className="text-gray-500">
              Hurry up! These offers are ending soon.
            </p>
          </div>
          <div>
            <Countdown />
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            className="pb-12"
            slidesPerView={1.2}
            spaceBetween={24}
            loop={false}
            modules={[Navigation]}
            navigation={{
              prevEl: ".products2-prev",
              nextEl: ".products2-next",
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {fashionProducts.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCardVariant product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="products2-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-black hover:text-white transition-all disabled:opacity-50 xl:-translate-x-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="products2-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-black hover:text-white transition-all disabled:opacity-50 xl:translate-x-6">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
