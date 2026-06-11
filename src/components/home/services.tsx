import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { Arrow } from "../buttons";
import { Spotlight } from "../spotlight";

export function Services() {
  return (
    <section className="relative border-t border-line bg-bg-deep py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="02"
          eyebrow="What I do"
          lines={[
            "Three ways",
            <span key="2">
              to <span className="text-glint">use me.</span>
            </span>,
          ]}
          lede="Every project is one person doing the whole job: design, build, ship. Pick a lane or mix them, most clients do."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.09} className="h-full">
              <Spotlight className="glass group flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="outline-num text-[clamp(2.6rem,4vw,3.4rem)] leading-none">
                    {s.index}
                  </span>
                  <span className="glass rounded-full px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    {s.timeline}
                  </span>
                </div>
                <h3 className="display mt-6 text-[clamp(1.5rem,2.4vw,1.9rem)] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted">
                  {s.pitch}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-[14px] text-fg/90"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent/80" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] text-faint uppercase">
                    Good for
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                    {s.goodFor}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] text-accent uppercase transition-colors hover:text-accent-bright"
                  >
                    Start this
                    <Arrow className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
