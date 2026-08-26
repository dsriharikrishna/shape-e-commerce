"use client";
import { useEffect, useRef, useState } from "react";
export default function TypeAnimation({
  strings = [
    "Search for something...",
    "Looking for something specific?",
    "Explore what you need...",
  ],
}: {
  strings?: string[];
}) {
  const [activeStingIndex, setActiveStingIndex] = useState(0);
  const typeidRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typeidRef.current) return;
    typeidRef.current.style.width = typeidRef.current.scrollWidth + "px";

    const reapedTyping = setInterval(() => {
      if (typeidRef.current) typeidRef.current.style.width = "0px";
      setTimeout(() => {
        setActiveStingIndex((pre) => {
          if (pre == strings.length - 1) {
            return 0;
          } else {
            return pre + 1;
          }
        });
        if (typeidRef.current) {
          typeidRef.current.style.width = typeidRef.current.scrollWidth + "px";
        }
      }, 600);
    }, 2200);

    // Cleanup function to destroy the Typed instance
    return () => {
      clearInterval(reapedTyping);
    };
  }, [strings.length]);
  return (
    <>
      {" "}
      <span ref={typeidRef} className="cd-words-wrapper type-animation">
        {strings.map((elm, i) => (
          <b
            key={i}
            className={`item-text pr-3 ${
              activeStingIndex == i ? "is-visible" : "is-hidden"
            } `}
          >
            {elm}
          </b>
        ))}
      </span>
    </>
  );
}
