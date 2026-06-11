import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./magnetic";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full text-[15px] font-medium transition-colors duration-200";

const variants = {
  primary: `${base} bg-accent px-7 py-3.5 text-accent-ink hover:bg-accent-bright`,
  ghost: `${base} border border-line-strong px-7 py-3.5 text-fg hover:border-accent hover:text-accent-bright`,
  cream: `${base} bg-cream-ink px-7 py-3.5 text-cream hover:bg-black`,
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
  const link = external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : href.startsWith("mailto:") ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
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
