"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {});
    }
  }, []);
  useEffect(() => {
    // Class names for different scroll and animation states
    const RBT_SCROLL_ACTIVATION = "rbt-scroll-trigger";
    const RBT_SCROLL_OFFSCREEN_ACTIVATION = "rbt-scroll-trigger--offscreen";
    const RBT_SCROLL_ZOOM_IN_ACTIVATION = "animate--zoom-in";
    const RBT_SCROLL_CANCEL_ACTIVATION = "rbt-scroll-trigger--cancel";

    // Handle intersection events for scroll animations
    function onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach((entry: IntersectionObserverEntry, index: number) => {
        if (entry.isIntersecting) {
          const elementTarget = entry.target as HTMLElement;
          if (
            elementTarget.classList.contains(RBT_SCROLL_OFFSCREEN_ACTIVATION)
          ) {
            elementTarget.classList.remove(RBT_SCROLL_OFFSCREEN_ACTIVATION);
            if (elementTarget.dataset.cascade) {
              elementTarget.style.setProperty("--animation-order", String(index));
            }
          }
          observer.unobserve(elementTarget);
        } else {
          entry.target.classList.add(RBT_SCROLL_OFFSCREEN_ACTIVATION);
          entry.target.classList.remove(RBT_SCROLL_CANCEL_ACTIVATION);
        }
      });
    }

    function initializeScrollAnimationTrigger(
      rootEl: Document | HTMLElement = document,
      isDesignModeEvent = false
    ) {
      const animationTriggerElements = rootEl.querySelectorAll(
        `.${RBT_SCROLL_ACTIVATION}`,
      );
      if (animationTriggerElements.length === 0) return;

      if (isDesignModeEvent) {
        animationTriggerElements.forEach((element) => {
          element.classList.add("rbt-scroll-trigger--design-mode");
        });
        return;
      }

      const observer = new IntersectionObserver(onIntersection, {
        rootMargin: "0px 0px -50px 0px",
      });
      animationTriggerElements.forEach((element) => {
        observer.observe(element);
      });
    }

    // Calculate the percentage of the element that is visible
    function percentageSeen(element: Element) {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const elementRect = element.getBoundingClientRect();
      const elementPositionY = elementRect.top + scrollY;
      const elementHeight = elementRect.height;

      if (elementPositionY > scrollY + viewportHeight) return 0;
      if (elementPositionY + elementHeight < scrollY) return 100;

      const percentage =
        (scrollY + viewportHeight - elementPositionY) /
        ((viewportHeight + elementHeight) / 100);
      return Math.round(percentage);
    }

    // Throttle the scroll event to improve performance
    function throttle(fn: () => void, wait: number) {
      let time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    function initializeScrollZoomAnimationTrigger() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const animationTriggerElements = document.querySelectorAll(
        `.${RBT_SCROLL_ZOOM_IN_ACTIVATION}`,
      );
      if (animationTriggerElements.length === 0) return;

      const scaleAmount = 0.2 / 100;
      animationTriggerElements.forEach((element) => {
        let elementIsVisible = false;

        new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            elementIsVisible = entry.isIntersecting;
          });
        }).observe(element);

        (element as HTMLElement).style.setProperty(
          "--zoom-in-ratio",
          String(1 + scaleAmount * percentageSeen(element))
        );

        const handleScroll = throttle(() => {
          if (elementIsVisible) {
            (element as HTMLElement).style.setProperty(
              "--zoom-in-ratio",
              String(1 + scaleAmount * percentageSeen(element))
            );
          }
        }, 100);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      });
    }

    document.querySelectorAll(".swiper-slide.opacity-0").forEach((element) => {
      element.classList.remove("opacity-0");
    });

    initializeScrollAnimationTrigger();
    initializeScrollZoomAnimationTrigger();

    return () => {};
  }, [pathname]);
  useEffect(() => {
    const animates = document.querySelectorAll(".rbt-scroll-trigger");
    if (animates.length > 0) {
      animates.forEach((animate) => {
        animate.addEventListener("animationend", (e: Event) => {
          setTimeout(() => {
            (e.target as Element)?.setAttribute("animation-end", "");
          }, 1000);
        });
      });
    }
  }, [pathname]);
  useEffect(() => {
    const handleReady = () => {
      document.querySelectorAll(".swiper").forEach((el) => {
        (el as HTMLElement).style.visibility = "visible";
      });
      document.querySelectorAll(".rbt-arrow-between").forEach((el) => {
        (el as HTMLElement).style.visibility = "visible";
      });
    };

    document.addEventListener("DOMContentLoaded", handleReady);
    document.addEventListener("gallery_loaded", handleReady);

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      handleReady();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleReady);
      document.removeEventListener("gallery_loaded", handleReady);
    };
  }, [pathname]);
  useEffect(() => {
    const loadTooltips = async () => {
      const { Tooltip } = await import("bootstrap");

      const tooltipElements = document.querySelectorAll(".tooltips");

      tooltipElements.forEach((el) => {
        const position = el.getAttribute("data-tooltip-position") || "top";
        const tooltipText = el.getAttribute("data-tooltip") || "";
        const hasDistanceClass = el.classList.contains("tooltip-distance-lg");

        new Tooltip(el, {
          title: tooltipText,
          placement: position as import("bootstrap").Tooltip.Options["placement"],
          trigger: "hover",
          offset: [0, 8],
          template: `
            <div class='tooltip ${
              hasDistanceClass ? "tooltip-distance-lg" : ""
            }' role='tooltip'>
              <div class='tooltip-arrow'></div>
              <div class='tooltip-inner'></div>
            </div>
          `,
        });
      });

      return () => {
        tooltipElements.forEach((el) => {
          const tooltipInstance = Tooltip.getInstance(el);
          if (tooltipInstance) {
            tooltipInstance.dispose();
          }
        });
      };
    };

    loadTooltips();
  }, [pathname]);
  useEffect(() => {
    let Fancybox: typeof import("@fancyapps/ui")["Fancybox"] | undefined;

    const initFancybox = async () => {
      const fancyModule = await import("@fancyapps/ui");
      Fancybox = fancyModule.Fancybox;

      // Basic gallery bindings
      // @ts-ignore - fancyapps options
      Fancybox.bind("[data-fancybox]", {
        buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
        youtube: {
          controls: 1,
          showinfo: 0,
        },
        vimeo: {
          color: "f00",
        },
        Carousel: {
          infinite: false,
          Panzoom: {
            decelFriction: 0.5,
          },
        },
      });

      // Thumbs settings
      // @ts-ignore - fancyapps options
      Fancybox.bind("[data-fancybox]", {
        Thumbs: {
          type: "classic",
        },
      });

      // Custom group for product gallery
      // @ts-ignore - fancyapps options
      Fancybox.bind('[data-fancybox="product-single-gallary"]', {
        Thumbs: {
          type: "classic",
        },
      });
    };

    initFancybox();

    return () => {
      if (Fancybox) Fancybox.destroy();
    };
  }, [pathname]);
  return <>{children}</>;
}
