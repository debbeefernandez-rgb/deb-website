"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/* Counts up when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!inView) return;
    if (reduce) {
      el.textContent = value.toLocaleString("en-US") + suffix;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 0.8, 0.2, 1],
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-US") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, reduce]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
