import type { Metadata } from "next";
import Link from "next/link";
import { pricingDeal, site, tiers } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { Button, Arrow } from "@/components/buttons";

/*
  Unlisted page. Direct link only: kept out of the nav, footer, and
  sitemap, and told not to be indexed. Deb shares the URL by hand.
*/
export const metadata: Metadata = {
  title: "Pricing",
  description: "Fixed price, agreed before we start. Shared by link.",
  robots: { index: false, follow: false, nocache: true },
};

export default function PricingPage() {
  return (
    <div className="pt-36 pb-28 sm:pb-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index=""
          lines={[
            "Fixed price.",
            <span key="2">
              No <span className="text-glint">surprises</span> in week four.
            </span>,
          ]}
          lede="One person does the whole job. Design, build, ship. Pick a lane or mix them. You sign off on scope and price before anything starts."
        />

        {/* the deal strip */}
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {pricingDeal.map((d) => (
              <span
                key={d}
                className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[11.5px] tracking-[0.04em] text-fg/90"
              >
                <span className="text-accent">✓</span>
                {d}
              </span>
            ))}
          </div>
        </Reveal>

        {/* tiers */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.08, 0.3)} className="h-full">
              <Spotlight
                className={`group flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                  t.featured
                    ? "glass-accent shadow-2xl shadow-black/40"
                    : "glass"
                }`}
              >
                <span
                  className={`font-mono text-[10.5px] tracking-[0.16em] uppercase ${
                    t.featured ? "text-accent-bright" : "text-muted"
                  }`}
                >
                  {t.featured ? `★ ${t.tag}` : t.tag}
                </span>

                <h2 className="display mt-5 text-[clamp(1.7rem,2.4vw,2rem)] leading-none">
                  {t.name}
                </h2>
                <p className="mt-2 min-h-10 text-[13px] leading-relaxed text-muted">
                  {t.who}
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-line pb-5">
                  <span className="display text-[clamp(1.9rem,2.7vw,2.4rem)] leading-none">
                    {t.price}
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.05em] text-muted">
                    {t.unit}
                  </span>
                </div>
                <p className="mt-2.5 font-mono text-[11px] tracking-[0.03em] text-faint">
                  {t.usd}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[13.5px] leading-snug text-fg/85"
                    >
                      <span className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-7 border-t pt-4 font-mono text-[11px] tracking-[0.05em] uppercase ${
                    t.featured
                      ? "border-line-strong text-accent-bright"
                      : "border-line text-accent"
                  }`}
                >
                  {t.ships}
                </p>
                <p className="mt-3.5 rounded-lg bg-bg-deep/50 p-3 text-[12px] leading-relaxed text-muted">
                  {t.revisions}
                </p>

                <Link
                  href="/contact"
                  className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-mono text-[11px] font-medium tracking-[0.14em] uppercase transition-colors ${
                    t.featured
                      ? "bg-accent text-accent-ink hover:bg-accent-bright"
                      : "border border-line-strong text-fg hover:border-accent hover:text-accent-bright"
                  }`}
                >
                  {t.cta}
                  <Arrow className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* footnote */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-line bg-bg-deep p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h2 className="display text-[clamp(1.4rem,2.6vw,1.9rem)]">
                Not sure which one?
              </h2>
              <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-muted">
                Book a 15 minute call. I will tell you what you need and what
                it costs, no pitch.
              </p>
            </div>
            <Button href={site.calendly} external>
              Book a 15 minute call
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
            Philippines · GMT+8 · async with US and EU · prices in
            PHP, billed at
            the USD equivalent
          </p>
        </Reveal>
      </div>
    </div>
  );
}
