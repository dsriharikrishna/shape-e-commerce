"use client";
import type { Swiper as SwiperClass } from "swiper";
import ProductCard1 from "@/features/products/components/productCards/ProductCard1";
import { fashionProducts2 } from "@/features/products/data/products/fashion";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LookbookProducts() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const dots = [
    { top: "35%", left: "30%", slide: 0 },
    { top: "33%", left: "71%", slide: 1 },
    { top: "87%", left: "26%", slide: 2 },
    { top: "75%", left: "73%", slide: 3 },
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* Lookbook Image Area */}
          <div className="relative mx-auto w-full max-w-2xl xl:max-w-none">
            <div className="relative aspect-[1920/1734] w-full overflow-hidden rounded-3xl bg-gray-100">
              <Image
                alt="Lookbook Image"
                src="/assets/images/lookbook-images/lookbook-image-01.webp"
                fill
                className="object-cover"
              />

              {/* Hotspots */}
              {dots.map((dot, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    swiperRef.current?.slideTo(dot.slide);
                  }}
                  className="absolute w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow-lg flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform"
                  style={{ top: dot.top, left: dot.left }}
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full group-hover:scale-150 transition-transform" />

                  {/* Ping Animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50" />
                </button>
              ))}
            </div>
          </div>

          {/* Swiper Area */}
          <div className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                Lookbook <span className="font-bold">Special Denim</span>
              </h2>
            </div>

            <div className="relative">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="pb-16"
                slidesPerView={1.2}
                spaceBetween={24}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  el: ".lookbook-pagination",
                }}
                navigation={{
                  nextEl: ".lookbook-next",
                }}
                breakpoints={{
                  481: { slidesPerView: 2 },
                  768: { slidesPerView: 2.5 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 2 },
                }}
                modules={[Navigation, Pagination, Autoplay]}
              >
                {fashionProducts2.map((product, i) => (
                  <SwiperSlide key={i}>
                    <ProductCard1 product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="lookbook-next absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-black hover:text-white transition-all xl:translate-x-6">
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="lookbook-pagination absolute bottom-0 w-full flex justify-center gap-2 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
