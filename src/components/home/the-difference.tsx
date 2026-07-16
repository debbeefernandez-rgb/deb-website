"use client";

import Link from "next/link";
import { compareColumns, compareDims } from "@/lib/site";
import { Reveal, RevealLines } from "../reveal";
import { ArrowCircle } from "../buttons";
import { Spotlight } from "../spotlight";
import { OrbitalPortrait } from "./meet-deb";

const trust = [
  { k: "Built by hand first", v: "Five years of design before AI" },
  { k: "Engineer trained", v: "Plus time inside a cybersecurity company" },
  { k: "Built to convert", v: "Learned from eCommerce and Forbes founders" },
];

/*
  The single trust moment: who she is, why the work is not generic,
  and the honest comparison against the alternatives.
*/
export function TheDifference() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-20">
          <Reveal>
            <OrbitalPortrait />
          </Reveal>

          <div>
            <h2 className="display text-[clamp(2.2rem,4.8vw,3.8rem)] leading-[1.02]">
              <RevealLines
                lines={[
                  "The AI types.",
                  <span key="2" className="text-glint">
                    The thinking is mine.
                  </span>,
                ]}
              />
            </h2>

            <Reveal delay={0.15}>
              <ul className="mt-9 space-y-5">
                {trust.map((t, i) => (
                  <li key={t.k} className="flex items-start gap-4">
                    <span className="glass-dark mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] text-accent-bright">
                      {i + 1}
                    </span>
                    <span>
                      <span className="display block text-[19px]">{t.k}</span>
                      <span className="mt-0.5 block text-[14px] text-muted">
                        {t.v}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/about"
                className="shine glass-accent mt-9 inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span>More about me</span>
                <ArrowCircle className="size-9" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* the honest comparison */}
        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-3">
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

                <ul className="mt-6 flex grow flex-col gap-3.5 border-t border-line pt-5">
                  {col.rows.map((row, ri) => (
                    <li key={ri}>
                      <p className="font-mono text-[9.5px] tracking-[0.16em] text-faint uppercase">
                        {compareDims[ri]}
                      </p>
                      <p
                        className={`mt-0.5 text-[13.5px] leading-snug ${
                          col.featured ? "text-fg" : "text-muted"
                        }`}
                      >
                        {row}
                      </p>
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
