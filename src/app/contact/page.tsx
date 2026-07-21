import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal, RevealLines } from "@/components/reveal";
import { ArrowUpRight } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 15 minute call or send an email. Replies within 24 hours, Philippine time.",
};

export default function ContactPage() {
  return (
    <div className="pt-36 pb-28">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <h1 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.98]">
          <RevealLines
            lines={[
              "Let's do the",
              <span key="2" className="text-glint">
                damn thing.
              </span>,
            ]}
          />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-[52ch] text-[18px] leading-relaxed text-muted">
            Got a project to scope or just want to talk it through? Calendar
            or email, your call. Either way you hear back within 24 hours.
          </p>
        </Reveal>

        <div className="mt-16 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal delay={0.1}>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="shine glass-accent group block h-full rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-end">
                <ArrowUpRight className="size-5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="display mt-5 block text-[clamp(1.7rem,3vw,2.2rem)]">
                Book a 15.
              </span>
              <span className="mt-3 block text-[15px] leading-relaxed text-muted">
                Best for scoping a project or checking if we&apos;re a fit. You
                talk, I listen, you get a straight answer.
              </span>
              <span className="mt-6 inline-block font-mono text-[12px] tracking-[0.14em] text-accent uppercase">
                Open calendar
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <a
              href={`mailto:${site.email}`}
              className="shine glass group block h-full rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center justify-end">
                <ArrowUpRight className="size-5 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="display mt-5 block text-[clamp(1.7rem,3vw,2.2rem)]">
                Just email.
              </span>
              <span className="mt-3 block text-[15px] leading-relaxed text-muted">
                {site.email}. Straight to my inbox, no forms, no autoresponder
                maze.
              </span>
              <span className="mt-6 inline-block font-mono text-[12px] tracking-[0.14em] text-accent uppercase">
                Compose
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-5 flex max-w-4xl flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-bg-deep p-8">
            <div>
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-muted">
                See the work first, or just lurk on Instagram, mostly the
                dogs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="glass shine rounded-full px-5 py-2.5 text-[14px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                See the work
              </Link>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass shine rounded-full px-5 py-2.5 text-[14px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                Instagram
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-14 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            <span className="mr-2 inline-block size-1.5 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent align-middle" />
            {site.availability} · {site.location} · 24h reply
          </p>
        </Reveal>
      </div>
    </div>
  );
}
