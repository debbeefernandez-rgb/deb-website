"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

/*
  Marquee that feeds on scroll velocity: cruises slowly on its own,
  speeds up and flips direction with hard scrolling.
*/
export function Marquee({
  items,
  baseSpeed = 60,
}: {
  items: string[];
  baseSpeed?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 380 });
  const factor = useTransform(smooth, [-1200, 0, 1200], [-4, 1, 4], {
    clamp: false,
  });

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const width = rowRef.current?.offsetWidth ?? 0;
    if (!width) return;
    let next = x.get() - baseSpeed * factor.get() * (delta / 1000);
    next = ((next % width) + width) % width * -1;
    x.set(next);
  });

  const row = (ariaHidden: boolean, withRef = false) => (
    <div
      aria-hidden={ariaHidden || undefined}
      ref={withRef ? rowRef : undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 pr-8 font-mono text-[12px] tracking-[0.2em] whitespace-nowrap text-muted uppercase"
        >
          {item}
          <span className="size-1 rounded-full bg-accent/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-mask overflow-hidden">
      <motion.div className="flex w-max" style={{ x }}>
        {row(false, true)}
        {row(true)}
        {row(true)}
      </motion.div>
    </div>
  );
}
