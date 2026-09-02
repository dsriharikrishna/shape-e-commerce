"use client";

import { useState, useEffect, useCallback } from "react";

const DEFAULT_THRESHOLD = 200;

export function useSticky(threshold: number = DEFAULT_THRESHOLD) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isSticky;
}
