import { compareColumns, compareDims } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { Spotlight } from "../spotlight";

export function Compare() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index=""
          eyebrow="Me vs the alternatives"
          lines={[
            "Why not an agency",
            <span key="2">
              or <span className="text-glint">a template?</span>
            </span>,
          ]}
          lede="The honest difference between doing it yourself, hiring an agency, and hiring me."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {compareColumns.map((col, ci) => (
            <Reveal
              key={col.key}
              delay={Math.min(ci * 0.08, 0.2)}
              className={`h-full ${col.featured ? "order-first md:order-none" : ""}`}
            >
              <Spotlight
                className={`flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                  col.featured
                    ? "glass-accent shadow-2xl shadow-black/40"
                    : "glass"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10.5px] tracking-[0.18em] uppercase ${
                      col.featured ? "text-accent-bright" : "text-muted"
                    }`}
                  >
                    {col.sub}
                  </span>
                  {col.featured && (
                    <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[9.5px] tracking-[0.14em] text-accent-ink uppercase">
                      You want this
                    </span>
                  )}
                </div>
                <h3 className="display mt-3 text-[clamp(1.6rem,2.4vw,2rem)] leading-none">
                  {col.label}
                </h3>

                <ul className="mt-7 flex grow flex-col gap-4 border-t border-line pt-6">
                  {col.rows.map((row, ri) => (
                    <li key={ri}>
                      <p className="font-mono text-[9.5px] tracking-[0.16em] text-faint uppercase">
                        {compareDims[ri]}
                      </p>
                      <p className="mt-1 flex items-start gap-2.5 text-[13.5px] leading-snug">
                        <span
                          aria-hidden
                          className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                            col.featured ? "bg-accent" : "bg-faint"
                          }`}
                        />
                        <span
                          className={col.featured ? "text-fg" : "text-muted"}
                        >
                          {row}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-12 max-w-[50ch] text-center text-[16px] leading-relaxed text-muted">
            The value was never the AI. It&apos;s the taste, the rigor, and the
            time to finish.{" "}
            <span className="text-fg">That is what you are hiring.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
