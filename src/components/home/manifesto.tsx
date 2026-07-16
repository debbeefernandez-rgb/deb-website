"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const LINES = [
  "Anyone can prompt.",
  "Most ships flat and generic.",
  "Hire experience and judgment.",
];

function WipeLine({
  text,
  progress,
  range,
}: {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const clip = useTransform(progress, range, [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)",
  ]);
  return (
    <span className="relative block">
      <span className="block text-fg/12">{text}</span>
      <motion.span
        aria-hidden
        style={{ clipPath: clip }}
        className="absolute inset-0 block text-transparent"
      >
        <span
          className="bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg in oklch, var(--accent), var(--fg))",
            WebkitBackgroundClip: "text",
          }}
        >
          {text}
        </span>
      </motion.span>
    </span>
  );
}

/* Scroll-driven color wipe across three statements. */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-bg-deep py-32 sm:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent-tint) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-300 px-5 text-center sm:px-7">
        <p className="eyebrow">
          <span className="text-accent">The short version</span>
        </p>
        <h2 className="display mt-10 text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[1.04]">
          {reduce ? (
            LINES.map((l) => (
              <span key={l} className="block text-fg">
                {l}
              </span>
            ))
          ) : (
            <>
              <WipeLine text={LINES[0]} progress={scrollYProgress} range={[0, 0.38]} />
              <WipeLine text={LINES[1]} progress={scrollYProgress} range={[0.28, 0.66]} />
              <WipeLine text={LINES[2]} progress={scrollYProgress} range={[0.56, 0.94]} />
            </>
          )}
        </h2>
        <p className="mx-auto mt-10 max-w-[44ch] text-[18px] leading-relaxed text-muted sm:text-[20px]">
          The tools finish the job now, looking like everyone else&apos;s.
          Experience and judgment are what you hire.
        </p>
      </div>
    </section>
  );
}
