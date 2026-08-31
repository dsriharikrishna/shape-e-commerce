"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { blogPosts26 } from "@/shared/data/blogs";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { buttonVariants } from "@/shared/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSlider({
  className = "bg-gray-50 py-16 md:py-24",
}) {
  return (
    <div className={className}>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm relative">
          <Swiper
            className="pb-12 md:pb-0"
            {...{
              slidesPerView: 1,
              spaceBetween: 24,
              slidesPerGroup: 1,
              loop: true,
              draggable: true,
              navigation: {
                prevEl: ".blog-slider-prev",
                nextEl: ".blog-slider-next",
              },
            }}
            modules={[Navigation]}
          >
            {blogPosts26.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row p-6 md:p-12 gap-8 md:gap-12 items-center">
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start text-left">
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium tracking-wide uppercase mb-4">
                      <Link href="#" className="hover:text-primary transition-colors">{post.category}</Link>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <Link href="#" className="hover:text-primary transition-colors">{post.date}</Link>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
                      <Link href={`/blog-single`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
                      {post.description}
                    </p>
                    <Link
                      className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8")}
                      href={`/blog-single`}
                    >
                      Continue Reading
                    </Link>
                  </div>

                  {/* Image Slider Section */}
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="rounded-2xl overflow-hidden relative shadow-md aspect-[4/3] w-full group">
                      <Swiper
                        className="h-full w-full"
                        {...{
                          slidesPerView: 1,
                          loop: true,
                          autoplay: {
                            delay: 3000,
                          },
                          pagination: {
                            el: `.blog-inner-slider-${index}`,
                            clickable: true,
                          },
                          navigation: false,
                        }}
                        modules={[Pagination, Autoplay]}
                      >
                        {post.images?.map((img, i) => (
                          <SwiperSlide key={i} className="h-full w-full">
                            <Image
                              alt={post.title}
                              src={img}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {/* Pagination */}
                      <div
                        className={cn(
                          `blog-inner-slider-${index}`,
                          "absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Global Navigation Arrows */}
          <button className="blog-slider-prev absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-primary hover:text-white transition-all disabled:opacity-50 xl:-translate-x-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="blog-slider-next absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 hover:bg-primary hover:text-white transition-all disabled:opacity-50 xl:translate-x-6">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
