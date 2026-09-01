"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light">
            <span className="font-bold">Categories</span> You May Interested
          </h2>
        </div>

        {/* CSS Grid for Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Box 1: Small */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 aspect-square">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-01.webp"
                alt="Sports Caps"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Sports Caps
              </Link>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 2: Small */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 aspect-square">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-02.webp"
                alt="Leather Bags"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Leather Bags
              </Link>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 3: Wide (Col Span 2) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 col-span-2 aspect-[2/1] lg:aspect-auto">
            <Link
              href="/shop?collection=new-arrivals"
              className="block w-full h-full relative"
            >
              <Image
                src="/assets/images/catagory-img/cat-bg-lg-01.webp"
                alt="Stylish & Trending"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
              <div>
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-2 uppercase">
                  Exclusive
                </span>
                <p className="text-sm font-medium tracking-widest text-gray-800 uppercase mb-1">
                  New Arrivals
                </p>
                <h5 className="text-3xl font-light text-gray-900">
                  <span className="font-bold">Stylish</span> & Trending
                </h5>
              </div>
              <div>
                <Link
                  href="/shop?collection=new-arrivals"
                  className="pointer-events-auto inline-block px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors"
                >
                  See Collection
                </Link>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop?collection=new-arrivals"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 5: Small */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 aspect-square">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-03.webp"
                alt="Watches"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Watches
              </Link>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 6: Wide (Col Span 2) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 col-span-2 aspect-[2/1] lg:aspect-auto">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-lg-02.webp"
                alt="Made for Comfort"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-full mb-2 uppercase">
                  Trending
                </span>
                <p className="text-sm font-medium tracking-widest text-gray-800 uppercase mb-1">
                  Online Exclusive
                </p>
                <h5 className="text-3xl font-light text-gray-900">
                  <span className="font-bold">Made for</span> Comfort
                </h5>
              </div>
              <div>
                <Link
                  href="/shop"
                  className="pointer-events-auto inline-block px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors"
                >
                  View All Collection
                </Link>
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 7: Small */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 aspect-square">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-04.webp"
                alt="Sports Caps"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Sports Caps
              </Link>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Box 8: Small */}
          <div className="group relative overflow-hidden rounded-3xl bg-gray-50 aspect-square">
            <Link href="/shop" className="block w-full h-full relative">
              <Image
                src="/assets/images/catagory-img/cat-bg-05.webp"
                alt="Stylish Polo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </Link>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-900 no-underline cursor-pointer hover:bg-black hover:text-white transition-colors whitespace-nowrap"
              >
                Stylish Polo
              </Link>
            </div>
            <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/shop"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
