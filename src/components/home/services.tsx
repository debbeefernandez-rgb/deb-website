import Link from "next/link";
import { services } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { Arrow } from "../buttons";

export function Services() {
  return (
    <section className="border-t border-line bg-bg-deep py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="02"
          eyebrow="What I do"
          lines={[
            "Three ways",
            <span key="2">
              to <span className="serif-italic text-accent">use me.</span>
            </span>,
          ]}
          lede="Every project is one person doing the whole job: design, build, ship. Pick a lane or mix them, most clients do."
        />

        <div className="mt-16 flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08}>
              <div className="group grid grid-cols-1 gap-x-12 gap-y-7 border-t border-line py-12 last:border-b lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
                <div>
                  <p className="font-mono text-[12px] text-accent">
                    {s.index}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight font-semibold tracking-[-0.025em]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[44ch] text-[15.5px] leading-relaxed text-muted">
                    {s.pitch}
                  </p>
                </div>

                <ul className="space-y-3 self-center">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-[14.5px] text-fg/90"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent/70" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col justify-center gap-5 lg:items-end lg:text-right">
                  <div>
                    <p className="eyebrow">Good for</p>
                    <p className="mt-2 max-w-[28ch] text-[14px] leading-relaxed text-muted">
                      {s.goodFor}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Typical timeline</p>
                    <p className="mt-2 font-mono text-[14px] text-fg">
                      {s.timeline}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] text-accent uppercase transition-colors hover:text-accent-bright"
                  >
                    Start this
                    <Arrow className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
