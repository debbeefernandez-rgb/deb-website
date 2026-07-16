"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const BRIEF = `"sell the day tours, load fast"`;

/*
  From brief to build: a terminal types the real client brief, then the
  finished site wipes in below it. Same wipe motif as the rest of the site.
*/
export function BriefToBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? BRIEF : "");
  const [done, setDone] = useState(!!reduce);

  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(BRIEF.slice(0, i));
      if (i >= BRIEF.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 250);
      }
    }, 42);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="mx-auto mt-16 max-w-3xl">
      {/* the brief */}
      <p className="font-mono text-[13px] tracking-[0.04em] text-faint sm:text-[14px]">
        <span className="text-accent">&gt;</span> the brief:{" "}
        <span className="text-fg">{typed}</span>
        {!done && (
          <span
            aria-hidden
            className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-[caret-blink_1.1s_steps(1)_infinite] bg-accent"
          />
        )}
      </p>

      {/* the build wipes in */}
      <motion.div
        initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
        animate={done ? { clipPath: "inset(0 0% 0 0)" } : undefined}
        transition={{ duration: 1.1, ease: [0.21, 0.7, 0.2, 1] }}
        className="relative mt-5 overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/50"
      >
        <Image
          src="/images/work-rotypeaks.webp"
          alt="The finished build: RotyPeaks Ridge Camp"
          width={1000}
          height={625}
          sizes="(max-width: 1024px) 94vw, 768px"
          className="block w-full"
        />
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={done ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="glass-dark absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-fg uppercase"
        >
          Shipped in 14 days · 7x faster
        </motion.span>
      </motion.div>
    </div>
  );
}
