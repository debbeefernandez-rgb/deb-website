import type { Metadata } from "next";
import Image from "next/image";
import { site, tools } from "@/lib/site";
import { Reveal, RevealLines } from "@/components/reveal";
import { Button } from "@/components/buttons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Web designer and product developer based in Bukidnon, Philippines. Five years of brand work, now building full products with AI tools. Also: Hyrox, horses, and three brown dogs.",
};

const traits = [
  { k: "Reliable", v: "Easy to work with" },
  { k: "Proactive", v: "Results driven" },
  { k: "Strategic", v: "Creative with intent" },
  { k: "Flexible", v: "Quick to adapt" },
];

const grit = [
  { k: "Endurance", v: "No fade in week six" },
  { k: "Pacing", v: "Sprint when it matters" },
  { k: "Grit", v: "The boring 80% still gets done" },
  { k: "Recovery", v: "Sleep is part of the work" },
  { k: "Discipline", v: "Show up before you feel like it" },
  { k: "Composure", v: "Heart rate up, ego down" },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-28">
      {/* intro */}
      <section className="mx-auto max-w-300 px-5 sm:px-7">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">About</span>
            <span className="mx-3 text-faint">/</span>
            The person behind the work
          </p>
        </Reveal>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,7rem)] leading-[0.98]">
          <RevealLines
            lines={[
              <span key="1">
                Hey, I&apos;m <span className="text-glint">Deb.</span>
              </span>,
            ]}
          />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-[56ch] text-[18px] leading-relaxed text-muted">
            Designer turned product developer based in Bukidnon, Philippines.
            Five years
            making founders, online stores, and TEDx speakers look good. Now I
            build them working software too.
          </p>
        </Reveal>
      </section>

      {/* story */}
      <section className="mx-auto mt-20 grid max-w-300 grid-cols-1 gap-14 px-5 sm:px-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
              <Image
                src="/images/deb-field.webp"
                alt="Deb Fernandez outdoors with two of her dogs"
                width={511}
                height={680}
                sizes="(max-width: 1024px) 92vw, 480px"
                priority
                className="w-full object-cover"
              />
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Deb · Web designer & developer · Bukidnon, PH · GMT+8
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          <Reveal>
            <p className="text-[clamp(1.3rem,2.4vw,1.7rem)] leading-snug font-medium tracking-[-0.015em]">
              I build the whole stack. Software, AI, visibility, brand,
              eCommerce, and trading, end to end. You own everything I make.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[16.5px] leading-relaxed text-muted">
              Five years supporting eCom stores, service providers, and
              Forbes-featured founders. Fast learner, clean execution.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[16.5px] leading-relaxed text-muted">
              Then AI changed what one person can build. I went all in. I
              learned to direct Claude, Cursor, and Lovable the way I direct a
              design file, and started shipping real software: dashboards,
              automations, full products. The things on my work page are not
              mockups. They run in production.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[16.5px] leading-relaxed text-muted">
              And no, I don&apos;t have a computer science degree. Mine is in
              mining engineering. Engineering taught me systems, design gave
              me taste, AI gave me leverage. That combination used to take a
              team. Now you can hire it as one person.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div>
              <p className="eyebrow">The paper trail</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "B.S. Mining Engineering",
                  "Trained with DICT, the Philippine government's ICT department",
                  "Certified Social Media Manager, Philippines",
                  "Adobe ecosystem since my journalism days",
                ].map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-[14.5px] text-fg/90"
                  >
                    <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent/80" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line sm:grid-cols-4">
              {traits.map((t, i) => (
                <div
                  key={t.k}
                  className={`p-5 ${i > 0 ? "border-l border-line max-sm:[&:nth-child(3)]:border-l-0" : ""} ${i >= 2 ? "max-sm:border-t max-sm:border-line" : ""}`}
                >
                  <p className="text-[15px] font-semibold">{t.k}</p>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                    {t.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <p className="eyebrow">The stack I reach for</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="glass rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-fg/90 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-2 flex flex-wrap gap-4">
              <Button href="/contact">Start a project</Button>
              <Button href="/work" variant="glass">
                See the work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* hyrox */}
      <section className="mx-auto mt-28 max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-[1.5fr_1fr] grid-rows-2 gap-3">
              <div className="relative row-span-2 overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/hyrox-finish.webp"
                  alt="Deb crossing the Hyrox finish line"
                  width={1100}
                  height={761}
                  sizes="(max-width: 1024px) 60vw, 400px"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-3.5 left-3.5 rounded-md border border-line-strong bg-bg-deep/80 px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-fg uppercase backdrop-blur">
                  Finish line · Hyrox
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/images/hyrox-sled.webp"
                  alt="Sled push station"
                  width={900}
                  height={636}
                  sizes="(max-width: 1024px) 32vw, 220px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/images/hyrox-bars.webp"
                  alt="Deb through the SkiErg bars"
                  width={900}
                  height={618}
                  sizes="(max-width: 1024px) 32vw, 220px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="text-accent">Off the clock</span>
                <span className="mx-3 text-faint">/</span>
                Hyrox
              </p>
            </Reveal>
            <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
              <RevealLines
                lines={[
                  "Same muscles,",
                  <span key="2" className="text-glint">
                    different sport.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
                Eight runs, eight stations, one clock. Long projects are the
                same shape: not a sprint, a hybrid race. I train for that
                exact thing on purpose.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
                {grit.map((g, i) => (
                  <div
                    key={g.k}
                    className={`p-5 ${i % 2 === 1 ? "sm:border-l sm:border-line" : ""} ${i >= 1 ? "border-t border-line sm:[&:nth-child(2)]:border-t-0" : ""}`}
                  >
                    <p className="flex items-center gap-2.5 text-[15px] font-semibold">
                      <span className="font-mono text-[10.5px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {g.k}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-muted">
                      {g.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 text-[14px] leading-relaxed text-muted">
                Short version: when your launch week gets ugly, I don&apos;t
                fold. I have paid money to suffer more than this.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* dogs + why brown */}
      <section className="mx-auto mt-28 max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow">
                <span className="text-accent">Off the clock</span>
                <span className="mx-3 text-faint">/</span>
                The board of directors
              </p>
            </Reveal>
            <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
              <RevealLines
                lines={[
                  "Why is this site",
                  <span key="2">
                    <span className="text-glint">brown?</span>{" "}
                    Three reasons.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[16.5px] leading-relaxed text-muted">
                My favorite color is pink. But the three brown dogs in this
                photo outvoted me. Warm earth tones, amber accents, cream on
                charcoal: it all traces back to them. Loyal, calm, slightly
                chaotic. Same energy I aim for in the work.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-[16.5px] leading-relaxed text-muted">
                Weekends I&apos;m on horseback. Riding teaches the same things
                good product work does: patience, presence, and listening.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-accent mt-7 rounded-2xl p-6">
                <p className="eyebrow text-accent-bright">Trust note</p>
                <p className="mt-3 text-[15px] leading-relaxed">
                  You&apos;re hiring a person, not a process. Real name, real
                  face, real timezone. I show up, follow through, and tell you
                  the truth about scope.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 font-mono text-[12px] text-faint">
                Tip: click the dot in the logo to see the pink site I almost
                built.
              </p>
            </Reveal>
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/dogs.webp"
                  alt="Deb's three brown dogs in a studio portrait"
                  width={827}
                  height={831}
                  sizes="(max-width: 1024px) 46vw, 300px"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-3.5 left-3.5 rounded-md border border-line-strong bg-bg-deep/80 px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-fg uppercase backdrop-blur">
                  The board of directors
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/horse.webp"
                  alt="Deb on horseback at the riding arena"
                  width={768}
                  height={1024}
                  sizes="(max-width: 1024px) 46vw, 300px"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-3.5 left-3.5 rounded-md border border-line-strong bg-bg-deep/80 px-2.5 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-fg uppercase backdrop-blur">
                  Weekend office
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* colophon */}
      <section
        id="colophon"
        className="mx-auto mt-28 max-w-300 scroll-mt-28 px-5 sm:px-7"
      >
        <Reveal>
          <div className="rounded-2xl border border-line bg-bg-deep p-8 sm:p-12">
            <p className="eyebrow">
              <span className="text-accent">Colophon</span>
              <span className="mx-3 text-faint">/</span>
              Case study zero
            </p>
            <h2 className="display mt-5 max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.6rem)] leading-tight">
              This site is the proof. I built it the way I&apos;ll build
              yours.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <p className="eyebrow">How</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  Designed in code with Claude. No template, no page builder.
                  Every section written, reviewed, and shipped by me directing
                  the AI.
                </p>
              </div>
              <div>
                <p className="eyebrow">Stack</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  Next.js, TypeScript, Tailwind, Motion, deployed on Vercel.
                  Type set in Geist and Geist Mono, self-hosted.
                </p>
              </div>
              <div>
                <p className="eyebrow">Details</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  Press {""}
                  <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px]">
                    ⌘K
                  </kbd>{" "}
                  anywhere. Click the logo dot. Everything respects reduced
                  motion. Images under 1MB total.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* contact strip */}
      <section className="mx-auto mt-20 max-w-300 px-5 text-center sm:px-7">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            <span className="mr-2 inline-block size-1.5 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent align-middle" />
            {site.availability} · {site.location} · replies within 24h
          </p>
        </Reveal>
      </section>
    </div>
  );
}
