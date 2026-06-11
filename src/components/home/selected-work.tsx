import Link from "next/link";
import { projects } from "@/lib/projects";
import { SectionHeading } from "../section-heading";
import { ProjectCard } from "../project-card";
import { Reveal } from "../reveal";
import { Arrow } from "../buttons";

export function SelectedWork() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            lines={[
              "Real builds,",
              <span key="2">
                real <span className="text-glint">results.</span>
              </span>,
            ]}
            lede="Six projects that shipped and did their job. These are actual screenshots of things I made, not mockups."
          />
          <Reveal delay={0.2}>
            <Link
              href="/work"
              className="group mb-2 hidden items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg sm:inline-flex"
            >
              All work
              <Arrow className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min((i % 2) * 0.08, 0.2)} className="h-full">
              <ProjectCard project={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 py-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase"
          >
            All work <Arrow className="size-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
