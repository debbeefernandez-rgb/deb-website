"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Reveal, RevealLines } from "./reveal";
import { ArrowUpRight } from "./buttons";
import { Magnetic } from "./magnetic";

function ManilaClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-deep">
      {/* warm floor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[60rem] w-[90rem] -translate-x-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent-tint) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-300 px-5 pt-24 pb-10 sm:px-7 sm:pt-32">
        <p className="eyebrow">
          <span className="text-accent">Next step</span>
        </p>
        <h2 className="mt-6 text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
          <RevealLines
            lines={[
              <span key="1">Got something</span>,
              <span key="2">
                to <span className="serif-italic text-accent">build?</span>
              </span>,
            ]}
          />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-muted">
            Tell me what you have in mind. I reply within 24 hours and I will
            tell you straight if I am the right person for it.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Magnetic>
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[16px] font-medium text-accent-ink transition-colors hover:bg-accent-bright"
              >
                Book a 15 minute call
                <ArrowUpRight />
              </a>
            </Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="link font-mono text-[14px] tracking-[0.04em]"
            >
              {site.email}
            </a>
          </div>
        </Reveal>

        {/* meta grid */}
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:grid-cols-4">
          <div>
            <p className="eyebrow">Pages</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {[
                { href: site.instagram, label: "Instagram" },
                { href: site.blog, label: "Blog" },
                { href: site.liveDemo, label: "Live demo" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Local time</p>
            <p className="mt-4 font-mono text-[14px] text-muted">
              <ManilaClock /> · GMT+8
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              Manila, Philippines
            </p>
          </div>
          <div>
            <p className="eyebrow">Status</p>
            <p className="mt-4 flex items-center gap-2.5 text-[14px] text-muted">
              <span className="inline-block size-2 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent" />
              {site.availability}
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              Replies within 24h
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[12.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Deb Fernandez. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-[0.1em]">
            Designed and coded by me, with Claude.{" "}
            <Link href="/about#colophon" className="link text-faint">
              This site is case study zero.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
