"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "./buttons";

/*
  The actual builds, front and center: big screenshot, 3D tilt that
  follows the cursor, glass chrome on top of the image.
*/
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [4.5, -4.5]), {
    stiffness: 160,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-5.5, 5.5]), {
    stiffness: 160,
    damping: 18,
  });

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || reduce) return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      className="group h-full"
    >
      <Link
        href={`/work/${project.slug}`}
        className="shine flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/30 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-2xl hover:shadow-black/50"
      >
        {/* the build itself */}
        <span className="relative block overflow-hidden border-b border-line">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1348}
            height={840}
            sizes="(max-width: 768px) 94vw, (max-width: 1280px) 46vw, 580px"
            priority={priority}
            className="aspect-8/5 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
          {/* glass chips on the image */}
          <span className="glass absolute top-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.16em] text-fg uppercase">
            {project.category}
          </span>
          <span className="glass-accent absolute bottom-4 left-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-fg uppercase">
            {project.outcome}
          </span>
        </span>

        <span className="flex grow items-start justify-between gap-4 p-6">
          <span>
            <span className="display block text-[clamp(1.25rem,2vw,1.55rem)] leading-tight">
              {project.title}
            </span>
            <span className="mt-2 block font-mono text-[12px] leading-relaxed tracking-[0.03em] text-faint">
              <span className="text-accent/80">brief:</span> &quot;{project.brief}&quot;
            </span>
          </span>
          <span className="glass mt-1 flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-300 group-hover:text-accent">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
