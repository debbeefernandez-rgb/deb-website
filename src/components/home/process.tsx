import { processSteps } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const promises = ["Fixed price, agreed upfront", "Live link from day one", "You own the repo"];

export function Process() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="03"
          eyebrow="How it works"
          lines={[
            "No mystery,",
            <span key="2">
              no <span className="serif-italic text-accent">big reveal.</span>
            </span>,
          ]}
          lede="You see the product grow on a live link from day one. Here is the whole process, start to finish."
        />

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.step} className="bg-surface">
              <Reveal delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col p-7 sm:p-8">
                  <p className="font-mono text-[26px] leading-none text-accent/50">
                    {step.step}
                  </p>
                  <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 grow text-[14.5px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                  <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase">
                    <span className="size-1 rounded-full bg-accent" />
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="eyebrow text-accent">The deal</p>
            {promises.map((p) => (
              <p
                key={p}
                className="font-mono text-[12.5px] tracking-[0.04em] text-muted"
              >
                <span className="mr-2 text-accent">✓</span>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
