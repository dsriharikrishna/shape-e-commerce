"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

type TabOption = {
  id: string;
  label: string;
};

type NavEffectTabsProps = {
  parentClassName?: string;
  options: TabOption[];
  active: string;
  setActive: (id: string) => void;
};

export default function NavEffectTabs({
  parentClassName = "",
  options,
  active,
  setActive,
}: NavEffectTabsProps) {
  const [highlightStyle, setHighlightStyle] = useState<
    React.CSSProperties | undefined
  >();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const updateHighlight = useCallback(() => {
    if (!containerRef.current) return;

    const currentEl = itemRefs.current[active];
    if (!currentEl) return;

    const itemRect = currentEl.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setHighlightStyle({
      width: itemRect.width,
      height: itemRect.height,
      left: itemRect.left - containerRect.left,
      top: itemRect.top - containerRect.top,
    });
  }, [active]);

  useEffect(() => {
    updateHighlight();
  }, [updateHighlight]);

  useEffect(() => {
    const handleResize = () => {
      updateHighlight();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateHighlight]);

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActive(id);
    };

  return (
    <div
      ref={containerRef}
      className={`rbt-nav-effect-activation ${parentClassName}`.trim()}
    >
      <ul className="rbt-product-nav-grp">
        {options.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              ref={(el) => {
                if (el) {
                  itemRefs.current[tab.id] = el;
                }
              }}
              className={`rbt-product-nav${active === tab.id ? " active" : ""}`}
              onClick={handleClick(tab.id)}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="rbt-bg-highlight" style={highlightStyle} />
    </div>
  );
}
