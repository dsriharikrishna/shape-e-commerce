"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/shared/data/products/fashion";
import ProductCardVariant from "@/features/products/components/productCards/ProductCardVariant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Products1() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="font-bold">Recommended</span> Just For You
          </h2>
          <p className="text-gray-500">
            Longline slim-fit coat in a soft recycled wool blend, featuring
            notched lapels, buttoned long sleeves and side flap pockets for a
            clean, tailored look.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            className="pb-16"
            slidesPerView={1.2}
            spaceBetween={24}
            loop={false}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".products1-pagination",
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".products1-prev",
              nextEl: ".products1-next",
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {[...products, ...products].map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCardVariant product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="products1-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-black hover:text-white transition-all disabled:opacity-50 xl:-translate-x-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="products1-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-black hover:text-white transition-all disabled:opacity-50 xl:translate-x-6">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Custom Pagination */}
          <div className="products1-pagination absolute bottom-0 left-0 w-full flex justify-center gap-2 mt-8" />
        </div>
      </div>
    </div>
  );
}
