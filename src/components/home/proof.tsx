"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { stats, tools } from "@/lib/site";
import { Counter } from "../counter";
import { Reveal } from "../reveal";
import { Marquee } from "../marquee";

/*
  The old site had floating stat bubbles. These ones you can grab and
  throw: spring physics, snap back home. Rings scale up as you scroll.
*/
function Bubble({
  value,
  suffix,
  label,
  size,
  big,
  delay,
  constraints,
}: {
  value: number;
  suffix: string;
  label: string;
  size: number;
  big?: boolean;
  delay: number;
  constraints: React.RefObject<HTMLDivElement | null>;
}) {
  const reduce = useReducedMotion();
  // drag stays desktop-only so touch scrolling never gets trapped
  const [canDrag] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches,
  );
  const drag = canDrag && !reduce;
  return (
    <motion.div
      drag={drag}
      dragConstraints={constraints}
      dragElastic={0.18}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 280, bounceDamping: 16 }}
      whileDrag={{ scale: 1.12, zIndex: 30 }}
      whileHover={drag ? { scale: 1.08 } : undefined}
      className={`flex shrink-0 flex-col items-center justify-center rounded-full text-center select-none ${
        drag ? "cursor-grab touch-none active:cursor-grabbing" : ""
      } ${big ? "glass-accent" : "glass"}`}
      style={{
        width: size,
        height: size,
        animation: reduce
          ? undefined
          : `bob ${6 + (delay % 3)}s ease-in-out ${delay}s infinite`,
      }}
    >
      <span
        className={`display leading-none ${
          big
            ? "text-[clamp(2.4rem,4.5vw,3.5rem)]"
            : "text-[clamp(1.5rem,2.6vw,2.1rem)]"
        }`}
      >
        <Counter value={value} suffix={suffix} />
      </span>
      <span
        className={`mt-2 max-w-[85%] font-mono text-[10px] tracking-[0.14em] uppercase ${
          big ? "text-fg/90" : "text-muted"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const arena = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.65, 1.25]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.4]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      {/* concentric rings, scroll-driven */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { scale: ringScale, opacity: ringOpacity }}
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        {[1, 0.78, 0.56, 0.36, 0.2].map((r) => (
          <div
            key={r}
            className="absolute aspect-square rounded-full border border-accent/15"
            style={{
              width: `min(115vw, ${r * 1050}px)`,
              boxShadow:
                r === 0.2 ? "inset 0 0 80px var(--accent-tint)" : undefined,
            }}
          />
        ))}
      </motion.div>

      <div className="relative mx-auto max-w-300 px-5 text-center sm:px-7">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.02]">
            Receipts. <span className="text-glint">Verified.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="glass mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-mono text-[10.5px] tracking-[0.18em] text-muted uppercase">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            Trusted by <span className="text-fg">TEDx speakers</span> &{" "}
            <span className="text-fg">Forbes-featured founders</span>
          </p>
        </Reveal>

        <div
          ref={arena}
          className="mt-16 flex flex-wrap items-center justify-center gap-[clamp(16px,4vw,52px)]"
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Bubble
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                size={s.size}
                big={s.big}
                delay={i * 0.4}
                constraints={arena}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 hidden font-mono text-[10px] tracking-[0.24em] text-faint uppercase pointer-fine:block">
            Go on, grab one
          </p>
        </Reveal>
      </div>

      <div className="relative mt-16 border-y border-line py-5">
        <Marquee items={tools} />
      </div>
    </section>
  );
}
