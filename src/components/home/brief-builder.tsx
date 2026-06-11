"use client";

import { useMemo, useState } from "react";
import { briefDepths, briefServices, site } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { ArrowUpRight } from "../buttons";

function timelineLabel(weeks: number) {
  if (weeks <= 1) return "This week";
  if (weeks <= 2) return "About 2 weeks";
  if (weeks <= 8) return `About ${weeks} weeks`;
  return "2 months or more";
}

export function BriefBuilder() {
  const [picked, setPicked] = useState<string[]>([]);
  const [weeks, setWeeks] = useState(4);
  const [depth, setDepth] = useState("polish");
  const [ongoing, setOngoing] = useState(false);

  const toggle = (key: string) =>
    setPicked((p) =>
      p.includes(key) ? p.filter((k) => k !== key) : [...p, key],
    );

  const chosen = useMemo(
    () => briefServices.filter((s) => picked.includes(s.key)),
    [picked],
  );
  const depthObj = briefDepths.find((d) => d.key === depth) ?? briefDepths[1];

  const summary = useMemo(() => {
    if (!chosen.length) return "";
    const names = chosen.map((c) => c.title);
    const list =
      names.length === 1
        ? names[0]
        : names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
    return `${depthObj.label} build of ${list}, live in ${timelineLabel(weeks).toLowerCase()}${ongoing ? ", then ongoing support" : ""}.`;
  }, [chosen, depthObj, weeks, ongoing]);

  const mailto = useMemo(() => {
    const subject = chosen.length
      ? `Project brief: ${chosen.map((c) => c.code).join(" + ")}`
      : "Project brief";
    const lines = [
      "Hey Deb, here is what I need:",
      "",
      ...chosen.map((c) => `- ${c.title}: ${c.delivers}`),
      "",
      `Depth: ${depthObj.label} (${depthObj.note})`,
      `Timeline: ${timelineLabel(weeks)}`,
      `Engagement: ${ongoing ? "Ongoing partner" : "One-off project"}`,
      "",
      "A bit about us: ",
    ];
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [chosen, depthObj, weeks, ongoing]);

  return (
    <section className="border-t border-line py-28 sm:py-36" id="brief">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="05"
          eyebrow="Start yours"
          lines={[
            "Build your brief",
            <span key="2">
              in <span className="text-glint">30 seconds.</span>
            </span>,
          ]}
          lede="Pick what you need, set the pace, and send it. No forms, no funnel, no sales call required."
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* inputs */}
          <div>
            <Reveal>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {briefServices.map((s) => {
                  const on = picked.includes(s.key);
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => toggle(s.key)}
                      aria-pressed={on}
                      className={`cursor-pointer rounded-xl border p-5 text-left transition-all duration-300 ${
                        on
                          ? "border-accent/60 bg-accent-tint shadow-lg shadow-black/30"
                          : "border-line bg-surface hover:-translate-y-0.5 hover:border-line-strong"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[11px] tracking-[0.2em] ${on ? "text-accent-bright" : "text-accent"}`}
                        >
                          {s.code}
                        </span>
                        <span
                          className={`flex size-5 items-center justify-center rounded-full border text-[11px] transition-colors ${
                            on
                              ? "border-accent bg-accent text-accent-ink"
                              : "border-line-strong text-transparent"
                          }`}
                          aria-hidden
                        >
                          ✓
                        </span>
                      </span>
                      <span className="mt-3 block text-[16.5px] font-medium tracking-[-0.01em]">
                        {s.title}
                      </span>
                      <span className="mt-1.5 block text-[13px] leading-relaxed text-muted">
                        {s.delivers}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 space-y-8">
                {/* timeline */}
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="eyebrow">Timeline</p>
                    <p className="font-mono text-[13px] text-accent">
                      {timelineLabel(weeks)}
                    </p>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={weeks}
                    onChange={(e) => setWeeks(parseInt(e.target.value, 10))}
                    aria-label="Timeline in weeks"
                    className="mt-4 w-full accent-(--accent)"
                  />
                  <div className="mt-1.5 flex justify-between font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                    <span>ASAP</span>
                    <span>No rush</span>
                  </div>
                </div>

                {/* depth */}
                <div>
                  <p className="eyebrow">Depth</p>
                  <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {briefDepths.map((d) => {
                      const on = depth === d.key;
                      return (
                        <button
                          key={d.key}
                          type="button"
                          onClick={() => setDepth(d.key)}
                          aria-pressed={on}
                          className={`cursor-pointer rounded-xl border p-4 text-left transition-colors ${
                            on
                              ? "border-accent/60 bg-accent-tint"
                              : "border-line bg-surface hover:border-line-strong"
                          }`}
                        >
                          <span className="block text-[14.5px] font-medium">
                            {d.label}
                          </span>
                          <span className="mt-1 block text-[12px] leading-relaxed text-muted">
                            {d.note}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* engagement */}
                <div>
                  <p className="eyebrow">Engagement</p>
                  <div className="mt-3.5 flex gap-2.5">
                    {[
                      { v: false, label: "One-off project" },
                      { v: true, label: "Ongoing partner" },
                    ].map((o) => {
                      const on = ongoing === o.v;
                      return (
                        <button
                          key={o.label}
                          type="button"
                          onClick={() => setOngoing(o.v)}
                          aria-pressed={on}
                          className={`flex-1 cursor-pointer rounded-full border px-5 py-3 text-[14px] font-medium transition-colors ${
                            on
                              ? "border-accent bg-accent text-accent-ink"
                              : "border-line bg-surface text-fg hover:border-line-strong"
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* live brief, the one cream moment on the page */}
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <div className="rounded-2xl bg-cream p-7 text-cream-ink shadow-2xl shadow-black/50 sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-60">
                  Your brief
                </p>
                <p className="rounded-full bg-cream-ink/8 px-3 py-1 font-mono text-[11px]">
                  {chosen.length} selected
                </p>
              </div>

              <div className="mt-5 min-h-28">
                {chosen.length === 0 ? (
                  <p className="text-[15px] leading-relaxed opacity-60">
                    Pick one or more services to start. Mixing design and build
                    is the whole point.
                  </p>
                ) : (
                  <ul>
                    {chosen.map((c, i) => (
                      <li
                        key={c.key}
                        className={`flex gap-3.5 py-3 ${i > 0 ? "border-t border-cream-ink/15" : ""}`}
                      >
                        <span className="font-mono text-[12px] opacity-50">
                          {c.code}
                        </span>
                        <span>
                          <span className="block text-[15.5px] font-semibold tracking-[-0.01em]">
                            {c.title}
                          </span>
                          <span className="mt-0.5 block text-[12.5px] leading-relaxed opacity-60">
                            {c.delivers}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 border-t border-cream-ink/15 pt-4">
                {[
                  ["Timeline", timelineLabel(weeks)],
                  ["Depth", depthObj.label],
                  ["Engagement", ongoing ? "Ongoing" : "One-off"],
                ].map(([k, v]) => (
                  <p key={k}>
                    <span className="block font-mono text-[10px] tracking-[0.16em] uppercase opacity-50">
                      {k}
                    </span>
                    <span className="mt-0.5 block text-[14px] font-semibold">
                      {v}
                    </span>
                  </p>
                ))}
              </div>

              {summary && (
                <p className="mt-4 border-l-2 border-cream-ink/25 pl-3 text-[14px] leading-relaxed font-medium opacity-75">
                  &ldquo;{summary}&rdquo;
                </p>
              )}

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={chosen.length ? mailto : undefined}
                  aria-disabled={chosen.length === 0}
                  onClick={(e) => {
                    if (!chosen.length) e.preventDefault();
                  }}
                  className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all ${
                    chosen.length
                      ? "bg-cream-ink text-cream hover:-translate-y-0.5"
                      : "cursor-not-allowed bg-cream-ink/10 text-cream-ink/40"
                  }`}
                >
                  Send me this brief
                  <ArrowUpRight />
                </a>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-cream-ink/25 px-6 py-3 text-[14px] font-medium transition-colors hover:border-cream-ink/60"
                >
                  Or book a 15 minute call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
