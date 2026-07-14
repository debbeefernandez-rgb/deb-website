"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./buttons";
import { Logo } from "./nav";

function LocalClock() {
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
    const raf = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-deep">
      <div className="relative mx-auto max-w-300 px-5 pt-16 pb-10 sm:px-7">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[26ch] text-[13.5px] leading-relaxed text-muted">
              Product developer and designer. One person, idea to live
              product.
            </p>
          </div>
          <div>
            <p className="eyebrow">Pages</p>
            <ul className="mt-3 space-y-1 text-[14px]">
              {[
                { href: "/", label: "Home" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block py-1.5 text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-3 space-y-1 text-[14px]">
              {[
                { href: site.instagram, label: "Instagram" },
                { href: site.blog, label: "Blog" },
                { href: site.liveDemo, label: "Live demo" },
                { href: `mailto:${site.email}`, label: "Email" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 text-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                    {l.href.startsWith("http") && (
                      <ArrowUpRight className="size-3 opacity-60" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Local time</p>
            <p className="mt-4 font-mono text-[14px] text-muted">
              <LocalClock /> · GMT+8
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              Bukidnon, Philippines
            </p>
          </div>
          <div>
            <p className="eyebrow">Status</p>
            <p className="glass mt-4 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] text-muted">
              <span className="inline-block size-2 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent" />
              {site.availability}
            </p>
            <p className="mt-2.5 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              Replies within 24h
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[12.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Deb Fernandez. All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase">
            Bukidnon · GMT+8
          </p>
        </div>
      </div>
    </footer>
  );
}
