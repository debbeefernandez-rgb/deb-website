"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal, RevealLines } from "../reveal";

/*
  The thesis as an experience: drag the handle to compare a generic
  AI-template layout against the real crafted build for the same kind
  of business. Works with mouse and touch.
*/
export function SpotDifference() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(72);
  const dragging = useRef(false);

  const moveTo = (clientX: number) => {
    const r = frameRef.current?.getBoundingClientRect();
    if (!r) return;
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <section className="border-t border-line bg-bg-deep py-24 sm:py-32">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <h2 className="display text-center text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.04]">
          <RevealLines
            lines={[
              <span key="1">
                Same business.{" "}
                <span className="text-glint">Spot the difference.</span>
              </span>,
            ]}
          />
        </h2>

        <Reveal delay={0.15}>
          <div
            ref={frameRef}
            role="slider"
            aria-label="Compare a generic AI template against the real crafted build"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
            }}
            onPointerDown={(e) => {
              dragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              moveTo(e.clientX);
            }}
            onPointerMove={(e) => {
              if (dragging.current) moveTo(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
            className="relative mx-auto mt-12 max-w-4xl cursor-ew-resize touch-none overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/50 select-none"
          >
            {/* mine, underneath */}
            <Image
              src="/images/work-rotypeaks.webp"
              alt="The real crafted build: RotyPeaks Ridge Camp"
              width={1000}
              height={625}
              sizes="(max-width: 1024px) 94vw, 896px"
              className="block w-full"
              draggable={false}
            />
            {/* generic, clipped on top */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/images/generic-ai.webp"
                alt=""
                width={1000}
                height={625}
                sizes="(max-width: 1024px) 94vw, 896px"
                className="block w-full"
                draggable={false}
              />
            </div>

            {/* divider + handle */}
            <div
              aria-hidden
              className="absolute inset-y-0 z-10"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 -left-px w-0.5 bg-accent shadow-[0_0_14px_var(--accent-glow)]" />
              <div className="absolute top-1/2 left-0 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_6px_20px_var(--accent-glow)]">
                <svg viewBox="0 0 20 12" className="w-4" fill="none" aria-hidden>
                  <path
                    d="M6 1 1 6l5 5M14 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* labels */}
            <span className="pointer-events-none absolute top-4 left-4 z-10 rounded-full border border-line-strong bg-bg-deep/85 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase backdrop-blur">
              Generic AI
            </span>
            <span className="glass-dark pointer-events-none absolute top-4 right-4 z-10 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-fg uppercase">
              Mine
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center font-mono text-[10.5px] tracking-[0.22em] text-faint uppercase">
            Drag it
          </p>
        </Reveal>
      </div>
    </section>
  );
}
