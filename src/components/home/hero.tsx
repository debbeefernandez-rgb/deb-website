"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Scramble } from "../scramble";
import { Magnetic } from "../magnetic";
import { ArrowCircle } from "../buttons";

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

/* Two soft orbs chase the cursor with a lazy trail, mirrored corners. */
function CursorOrbs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = orb1.current?.parentElement as HTMLElement | null;
    sectionRef.current = section;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rect = section.getBoundingClientRect();
    let tx = rect.width * 0.6;
    let ty = rect.height * 0.4;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      if (orb1.current) {
        orb1.current.style.transform = `translate3d(${cx - 380}px, ${cy - 380}px, 0)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate3d(${rect.width - cx - 300}px, ${rect.height - cy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      rect = section.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };
    const onLeave = () => {
      tx = rect.width * 0.6;
      ty = rect.height * 0.4;
    };
    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={orb1}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-[760px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, color-mix(in oklch, var(--accent-deep) 22%, transparent) 30%, transparent 62%)",
          willChange: "transform",
          transform: "translate3d(-380px, -380px, 0)",
        }}
      />
      <div
        ref={orb2}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-[600px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.12 320 / 0.3) 0%, transparent 64%)",
          willChange: "transform",
          transform: "translate3d(-300px, -300px, 0)",
        }}
      />
    </>
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
      <div className="aurora" aria-hidden />
      <CursorOrbs />

      <div className="relative z-1 mx-auto w-full max-w-300 px-5 pt-32 pb-20 sm:px-7">
        <h1 className="display text-[clamp(3rem,8.4vw,7.5rem)] leading-[0.96]">
          <Line delay={0.18}>I turn ideas into</Line>
          <Line delay={0.28}>
            <span className="text-glint">working products.</span>
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
              className="shine glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a 15 minute call
              <ArrowCircle className="size-9" />
            </a>
          </Magnetic>
          <Magnetic>
            <Link
              href="/work"
              className="shine glass inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
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
