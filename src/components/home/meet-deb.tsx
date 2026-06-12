import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealLines } from "../reveal";
import { Button, ArrowCircle } from "../buttons";

const facts = [
  { k: "5 yrs", v: "Building for funded teams" },
  { k: "40+", v: "Projects delivered" },
  { k: "PH · GMT+8", v: "Async with US and EU" },
  { k: "100%", v: "Solo, no handoffs" },
];

/* Orbiting dots + conic ring around the portrait, ported from v1. */
function OrbitalPortrait() {
  return (
    <div className="relative mx-auto w-[min(100%,370px)]">
      <div
        aria-hidden
        className="absolute -inset-[14%] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-glow), transparent 65%)",
        }}
      />
      {/* orbits */}
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        {[
          { w: "108%", dur: "18s", dot: 12, rev: false },
          { w: "124%", dur: "26s", dot: 8, rev: true },
          { w: "94%", dur: "22s", dot: 5, rev: false },
        ].map((o, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 aspect-square -translate-1/2 rounded-full"
            style={{
              width: o.w,
              animation: `orbit-spin ${o.dur} linear infinite${o.rev ? " reverse" : ""}`,
            }}
          >
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: o.dot,
                height: o.dot,
                background:
                  "radial-gradient(circle at 35% 30%, #fff7ea, var(--accent))",
                boxShadow: "0 0 16px 2px var(--accent-glow)",
              }}
            />
          </div>
        ))}
        {/* conic ring */}
        <div
          className="absolute top-1/2 left-1/2 aspect-square w-[116%] -translate-1/2 rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, var(--accent-glow) 40deg, transparent 120deg)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 1.5px), black calc(100% - 1.5px))",
            animation: "orbit-spin 32s linear infinite",
          }}
        />
      </div>
      <div className="relative aspect-square overflow-hidden rounded-full border border-line-strong shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        <Image
          src="/images/deb-portrait.webp"
          alt="Deb Fernandez, studio portrait"
          width={823}
          height={845}
          sizes="(max-width: 860px) 70vw, 370px"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}

export function MeetDeb() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-16 px-5 sm:px-7 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-20">
        <Reveal>
          <OrbitalPortrait />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="mr-2.5 inline-block size-1.5 rounded-full bg-accent align-middle" />
              Meet Deb
            </p>
          </Reveal>
          <h2 className="display mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[1.02]">
            <RevealLines
              lines={[
                "Designer who builds.",
                <span key="2" className="text-muted">
                  Builder who designs.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-fg/85">
              You hand off the messy half, the brand and the software behind
              it, and get back a finished thing. Half my week is design, half
              is directing AI that builds the rest.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-muted">
              No agency markup. No junior handoff. Just me, start to finish,
              with the receipts to prove it.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 grid grid-cols-2 overflow-hidden rounded-2xl border border-line sm:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-5 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                    i >= 2 ? "border-t border-line sm:border-t-0" : ""
                  } ${i >= 1 ? "sm:border-l sm:border-line" : ""}`}
                >
                  <p className="display text-[20px]">{f.k}</p>
                  <p className="mt-1.5 font-mono text-[9.5px] tracking-[0.12em] text-muted uppercase">
                    {f.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="shine glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                More about me
                <ArrowCircle className="size-9" />
              </Link>
              <Button href="/contact" variant="glass" magnetic={false}>
                Start a project
              </Button>
              <span className="font-mono text-[11px] tracking-[0.1em] text-faint">
                · replies within 24h
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
