"use client";

import { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max }: { max: number }) => {
  const odometerRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const odometerInitRef = useRef<any>(null);

  useEffect(() => {
    import("odometer").then((Odometer) => {
      // Initialize Odometer or do something with it

      // Example usage of Odometer
      if (Odometer && odometerRef.current) {
        odometerInitRef.current = new Odometer.default({
          el: odometerRef.current,
          value,
        });
      }
    });
  }, []);
  useEffect(() => {
    if (odometerRef.current && odometerInitRef.current) {
      odometerInitRef.current.update(value); // Update odometer when value changes
    }
  }, [value]);

  const startCountup = () => {
    setValue(max);
  };

  useEffect(() => {
    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  return (
    <>
      <span ref={odometerRef} className="odometer">
        0
      </span>
    </>
  );
};

export default OdometerComponent;
