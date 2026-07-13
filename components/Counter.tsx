"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ value, suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px", amount: 0.35 });
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(value);
      setDone(true);
      return;
    }

    if (!inView) return;

    setDisplay(0);
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
      onComplete: () => {
        setDisplay(value);
        setDone(true);
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  useEffect(() => {
    if (done || inView) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplay(value);
          setDone(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [done, inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
