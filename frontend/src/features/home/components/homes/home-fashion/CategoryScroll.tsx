"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  "NICE AND COMFY SHIRT",
  "JACKET THAT YOU LOVE",
  "COLORFUL TSHIRT",
  "SHORT PANTS FOR BEACH",
  "ZEN COLLECTION 2823",
  "SHORT PANTS FOR BEACH",
  "COLORFUL TSHIRT",
  "NICE AND COMFY SHIRT",
  "JACKET THAT YOU LOVE",
  "COLORFUL TSHIRT",
  "SHORT PANTS FOR BEACH",
  "ZEN COLLECTION 2823",
];

export default function CategoryScroll() {
  return (
    <div className="bg-white py-8 border-b border-gray-100 overflow-hidden relative flex group/marquee">
      {/* First Container for the marquee effect */}
      <div 
        className="flex whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused]"
        style={{ animationDuration: '50s' }}
      >
        {[...categories, ...categories].map((category, index) => (
          <Link
            key={index}
            href="/shop"
            className="group flex items-center mx-8 text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors"
          >
            <span className="mr-4 inline-flex items-center justify-center">
              <Image
                alt="icon"
                src="/assets/images/icons/scroll-icon-01.svg"
                width={16}
                height={16}
                className="transition-transform group-hover:rotate-180"
              />
            </span>
            {category}
          </Link>
        ))}
      </div>
      
      {/* Second identical Container to create a seamless infinite scroll without gaps */}
      <div 
        className="flex whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused]"
        aria-hidden="true"
        style={{ animationDuration: '50s' }}
      >
        {[...categories, ...categories].map((category, index) => (
          <Link
            key={index + "dup"}
            href="/shop"
            className="group flex items-center mx-8 text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-gray-500 transition-colors"
          >
            <span className="mr-4 inline-flex items-center justify-center">
              <Image
                alt="icon"
                src="/assets/images/icons/scroll-icon-01.svg"
                width={16}
                height={16}
                className="transition-transform group-hover:rotate-180"
              />
            </span>
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
