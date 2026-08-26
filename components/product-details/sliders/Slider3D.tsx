"use client";

import { useEffect, useRef } from "react";

export default function Slider3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    import("js-cloudimage-360-view").then((module) => {
      const cloudimage360 = new module.default();
      const options = {
        folder: "https://scaleflex.cloudimg.io/v7/demo/360-nike/",
        filenameX: "nike-{index}.jpg",
        amountX: 35,
        speed: 100,
        dragSpeed: 120,
        autoplay: true,
        filenameY: "nike-y-{index}.jpg",
        amountY: 36,
        autoplayBehavior: "spin-xy",
      };

      cloudimage360.init(containerRef.current!, options);
    });
  }, []);

  return <div ref={containerRef} className="cloudimage-360" />;
}
