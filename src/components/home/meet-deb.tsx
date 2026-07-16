"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Reveal, RevealLines } from "../reveal";
import { Button, ArrowCircle } from "../buttons";

const facts = [
  { k: "5 yrs", v: "Building for funded teams" },
  { k: "40+", v: "Projects delivered" },
  { k: "PH · GMT+8", v: "Async with US and EU" },
  { k: "100%", v: "Solo, no handoffs" },
];

/*
  Orbiting dots + conic ring around the portrait. Hovering (or scrolling
  past it on touch screens) wipes in the AI version of the same portrait,
  the same left-to-right reveal the manifesto lines use.
*/
export function OrbitalPortrait() {
  const circleRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hoverCapable] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  const progress = useMotionValue(0);
  const clipPath = useTransform(
    progress,
    (v) => `inset(0 ${(1 - v) * 100}% 0 0)`,
  );

  // one pair of springs feeds the 3D tilt, from the cursor on desktop
  // and from scroll position on touch
  const rotateX = useSpring(0, { stiffness: 150, damping: 17 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 17 });
  // the gleam sweeps across as the reveal progresses (used on touch)
  const gleamX = useTransform(progress, [0.1, 0.9], ["-130%", "130%"]);

  // touch devices: the wipe, tilt, and gleam all follow scroll
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start 0.9", "center 0.42"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (hoverCapable || reduce) return;
    progress.set(v);
    // gentle forward lean that settles flat as it reaches center
    rotateX.set((1 - v) * 9);
  });

  const wipeTo = (target: number) => {
    if (!hoverCapable) return;
    if (reduce) {
      progress.set(target);
      return;
    }
    animate(progress, target, { duration: 0.7, ease: [0.21, 0.7, 0.2, 1] });
  };

  return (
    <div className="relative mx-auto w-[min(100%,370px)]">
      <div
        aria-hidden
        className="absolute -inset-[14%] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow), transparent 65%)",
        }}
      />
      {/* orbits */}
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        {[
          { w: "108%", dur: "18s", dot: 12, rev: false },
          { w: "124%", dur: "26s", dot: 8, rev: true },
          { w: "94%", dur: "22s", dot: 5, rev: false },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full"
            style={{
              width: o.w,
              animation: `orbit-spin ${o.dur} linear infinite${o.rev ? " reverse" : ""}`,
            }}
          >
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: o.dot,
                height: o.dot,
                background:
                  "radial-gradient(circle at 35% 30%, #fff7ea, var(--accent))",
                boxShadow: "0 0 16px 2px var(--accent-glow)",
              }}
            />
          </div>
        ))}
        {/* conic ring */}
        <div
          className="absolute top-1/2 left-1/2 aspect-square w-[116%] -translate-1/2 rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent-glow) 40deg, transparent 120deg)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
            animation: "orbit-spin 32s linear infinite",
          }}
        />
      </div>

      <motion.div
        ref={circleRef}
        onMouseEnter={() => wipeTo(1)}
        onMouseLeave={() => {
          wipeTo(0);
          rotateX.set(0);
          rotateY.set(0);
        }}
        onPointerMove={(e) => {
          if (!hoverCapable || reduce) return;
          const r = circleRef.current?.getBoundingClientRect();
          if (!r) return;
          rotateX.set((0.5 - (e.clientY - r.top) / r.height) * 16);
          rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 16);
        }}
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformPerspective: 1000 }
        }
        className="shine relative aspect-square overflow-hidden rounded-full border border-line-strong shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
      >
        <Image
          src="/images/deb-portrait.webp"
          alt="Deb Fernandez, studio portrait"
          width={823}
          height={845}
          sizes="(max-width: 860px) 70vw, 370px"
          className="size-full object-cover"
        />
        {/* the AI version wipes in over the top */}
        <motion.div
          aria-hidden
          style={{ clipPath }}
          className="absolute inset-0"
        >
          <Image
            src="/images/deb-ai.webp"
            alt=""
            width={1000}
            height={1026}
            sizes="(max-width: 860px) 70vw, 370px"
            className="size-full object-cover"
          />
        </motion.div>
        {/* scroll-driven gleam, touch screens only (desktop uses .shine) */}
        <motion.span
          aria-hidden
          style={{ x: gleamX }}
          className="pointer-events-none absolute inset-y-[-40%] left-0 hidden w-[55%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-coarse:block"
        />
      </motion.div>

      <p className="mt-5 text-center font-mono text-[10px] tracking-[0.22em] text-faint uppercase">
        <span className="hidden pointer-fine:inline">Hover me</span>
        <span className="pointer-fine:hidden">Keep scrolling</span>
      </p>
    </div>
  );
}

export function MeetDeb() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-16 px-5 sm:px-7 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-20">
        <Reveal>
          <OrbitalPortrait />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="mr-2.5 inline-block size-1.5 rounded-full bg-accent align-middle" />
              Meet Deb
            </p>
          </Reveal>
          <h2 className="display mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[1.02]">
            <RevealLines
              lines={[
                "Designer who builds.",
                <span key="2" className="text-muted">
                  Builder who designs.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-fg/85">
              Not an agency, not a hobbyist with a template. I trained as an
              engineer, spent five years designing for eCommerce brands and
              Forbes-featured founders, and worked inside a cybersecurity
              company. A designer&apos;s eye, an engineer&apos;s rigor, a sense
              for what converts. The AI types. The thinking is mine.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 grid grid-cols-2 overflow-hidden rounded-2xl border border-line sm:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-5 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                    i >= 2 ? "border-t border-line sm:border-t-0" : ""
                  } ${i >= 1 ? "sm:border-l sm:border-line" : ""}`}
                >
                  <p className="display text-[20px]">{f.k}</p>
                  <p className="mt-1.5 font-mono text-[9.5px] tracking-[0.12em] text-muted uppercase">
                    {f.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="shine glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                More about me
                <ArrowCircle className="size-9" />
              </Link>
              <Button href="/contact" variant="glass" magnetic={false}>
                Start a project
              </Button>
              <span className="font-mono text-[11px] tracking-[0.1em] text-faint">
                · replies within 24h
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
