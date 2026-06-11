"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { Project } from "@/lib/projects";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "./buttons";

/*
  Desktop: typographic rows with a floating image preview that trails the cursor.
  Touch: stacked cards with the image inline.
*/
export function WorkList({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.4 });
  const py = useSpring(my, { stiffness: 140, damping: 18, mass: 0.4 });

  const active = projects.find((p) => p.slug === hovered);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
      onMouseLeave={() => setHovered(null)}
    >
      {/* floating preview, only on hover-capable devices */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden md:pointer-fine:block"
        style={{ x: px, y: py, translateX: "-50%", translateY: "-50%" }}
      >
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.28, ease: [0.21, 0.7, 0.2, 1] }}
                className="relative w-88 overflow-hidden rounded-xl border border-line-strong bg-surface shadow-2xl shadow-black/60"
              >
                <Image
                  src={active.image}
                  alt=""
                  width={704}
                  height={440}
                  sizes="352px"
                  className="aspect-8/5 w-full object-cover object-top"
                />
                <span className="absolute right-3 bottom-3 rounded-full bg-bg-deep/85 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-accent uppercase backdrop-blur">
                  {active.outcome}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>

      <ul>
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.3)}>
            <li className="group border-t border-line last:border-b">
              <Link
                href={`/work/${p.slug}`}
                onMouseEnter={() => setHovered(p.slug)}
                onMouseLeave={() => setHovered(null)}
                className="grid grid-cols-1 items-center gap-x-8 gap-y-4 py-7 transition-colors duration-300 md:grid-cols-[3.5rem_1fr_auto_2rem] md:py-9"
              >
                {/* index */}
                <span className="hidden font-mono text-[12px] text-faint transition-colors duration-300 group-hover:text-accent md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* mobile image */}
                <span className="relative block overflow-hidden rounded-xl border border-line md:hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={704}
                    height={440}
                    sizes="(max-width: 768px) 92vw, 352px"
                    className="aspect-8/5 w-full object-cover object-top"
                  />
                  <span className="absolute right-3 bottom-3 rounded-full bg-bg-deep/85 px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-accent uppercase backdrop-blur">
                    {p.outcome}
                  </span>
                </span>

                {/* title + brief */}
                <span className="block">
                  <span className="block text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight font-semibold tracking-[-0.025em] transition-transform duration-300 md:group-hover:translate-x-2">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block font-mono text-[12px] tracking-[0.04em] text-faint transition-colors duration-300 group-hover:text-muted">
                    <span className="text-accent/70">brief:</span> &quot;
                    {p.brief}&quot;
                  </span>
                </span>

                {/* meta */}
                <span className="flex items-center gap-5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase md:flex-col md:items-end md:gap-1.5">
                  <span>{p.category}</span>
                  <span className="text-faint">{p.year}</span>
                </span>

                <ArrowUpRight className="hidden size-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block" />
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
