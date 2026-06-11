"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";
import { Scramble } from "../scramble";
import { Magnetic } from "../magnetic";
import { ArrowUpRight } from "../buttons";
import Link from "next/link";

const EASE = [0.21, 0.7, 0.2, 1] as const;

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* ambient warmth, fixed corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[42rem] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, var(--accent-tint) 0%, transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -bottom-60 size-[46rem] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, oklch(0.4 0.09 320 / 0.16) 0%, transparent 62%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-300 px-5 pt-32 pb-20 sm:px-7">
        <motion.p
          {...fade(0.1)}
          className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-muted uppercase"
        >
          <span className="inline-block size-2 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent" />
          {site.availability}
          <span className="text-faint">·</span>
          {site.location}
        </motion.p>

        <h1 className="mt-8 text-[clamp(2.9rem,8.2vw,7.25rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
          <Line delay={0.18}>I turn ideas into</Line>
          <Line delay={0.28}>
            <span className="serif-italic pr-2 text-accent">
              working products.
            </span>
          </Line>
        </h1>

        <motion.p
          {...fade(0.5)}
          className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-muted sm:text-[18px]"
        >
          Designer turned product developer. I design the brand, then build the
          software with AI tools like Claude and Cursor. One person from idea
          to live product. No dev team, no handoffs, no agency markup.
        </motion.p>

        <motion.p
          {...fade(0.62)}
          className="mt-6 font-mono text-[13px] tracking-[0.06em] text-faint"
        >
          <span className="text-accent">&gt;</span> currently building{" "}
          <Scramble
            words={[
              "web apps",
              "brand systems",
              "AI automations",
              "online stores",
              "landing pages",
            ]}
            className="text-fg"
          />
          <span
            aria-hidden
            className="ml-1 inline-block h-[1.1em] w-[7px] translate-y-[2px] animate-[caret-blink_1.1s_steps(1)_infinite] bg-accent"
          />
        </motion.p>

        <motion.div
          {...fade(0.74)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-accent-ink transition-colors hover:bg-accent-bright"
            >
              Book a 15 minute call
              <ArrowUpRight />
            </a>
          </Magnetic>
          <Magnetic>
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-7 py-3.5 text-[15px] font-medium text-fg transition-colors hover:border-accent"
            >
              See the work
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-0 left-5 hidden items-center gap-3 font-mono text-[10px] tracking-[0.26em] text-faint uppercase sm:flex"
        >
          Scroll
          <motion.span
            animate={reduce ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
