import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./magnetic";

const base =
  "shine wipe inline-flex items-center justify-center rounded-full text-[15px] font-medium hover:-translate-y-0.5";

const variants = {
  /* warm glass with the accent glow, the main CTA */
  primary: `${base} glass-accent px-7 py-3.5 text-fg`,
  /* neutral mirror glass */
  glass: `${base} glass px-7 py-3.5 text-fg`,
  /* solid dark pill used on cream surfaces */
  dark: `${base} bg-cream-ink px-7 py-3.5 text-cream shadow-xl shadow-black/30`,
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  magnetic = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  magnetic?: boolean;
  className?: string;
}) {
  const cls = `${variants[variant]} ${className}`;
  /* raw text must live in an element so it stacks above the wipe layer */
  const inner = (
    <span className="inline-flex items-center gap-2.5">{children}</span>
  );
  const link = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : href.startsWith("mailto:") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}

/* small filled circle holding an arrow, rides inside pill buttons */
export function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`arrow-circ flex size-7 items-center justify-center rounded-full bg-accent text-accent-ink shadow-[0_4px_14px_var(--accent-glow)] ${className}`}
      aria-hidden
    >
      <Arrow className="size-3.5" />
    </span>
  );
}

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M2 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 12 12 4M5.5 4H12v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
