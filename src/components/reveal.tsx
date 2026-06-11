"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.21, 0.7, 0.2, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/*
  Headline reveal: each line slides up from behind a mask, staggered.
  The in-view observer sits on the outer wrapper because the clipped,
  translated lines themselves never intersect the viewport.
*/
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: {
                  duration: 0.9,
                  delay: delay + i * 0.09,
                  ease: EASE,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
