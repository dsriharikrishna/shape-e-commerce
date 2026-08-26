"use client";
import Image from "next/image";

import { useEffect } from "react";
import Drift from "drift-zoom";
export default function GalleryZoom1() {
  useEffect(() => {
    // Function to initialize Drift
    // Function to check window width
    const checkWindowSize = () => window.innerWidth >= 1200;

    // Only proceed if window is wide enough
    if (!checkWindowSize()) return;

    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom");
      const pane = document.querySelector(".tf-zoom-main");

      driftAll.forEach((el) => {
        new Drift(el as HTMLElement, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    };
    imageZoom();
    const zoomElements = document.querySelectorAll(".tf-image-zoom");

    const handleMouseOver = (event: Event) => {
      const parent = (event.target as Element | null)?.closest(".section-image-zoom");
      if (parent) {
        parent.classList.add("zoom-active");
      }
    };

    const handleMouseLeave = (event: Event) => {
      const parent = (event.target as Element | null)?.closest(".section-image-zoom");
      if (parent) {
        parent.classList.remove("zoom-active");
      }
    };

    zoomElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      zoomElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only once on mount
  return (
    <div className="thumbnail rbt-sticky-top-150 section-image-zoom">
      <a
        href="/assets/images/product-img/fashion/product-a-01.webp"
        data-fancybox="gallery"
        className="rbt-product-single-img"
      >
        <Image
          className="rbt-rounded--12 zoom_window tf-image-zoom"
          data-zoom="/assets/images/product-img/fashion/product-a-01.webp"
          alt="Product Images"
          src="/assets/images/product-img/fashion/product-a-01.webp"
          width={624}
          height={846}
        />
      </a>
    </div>
  );
}
