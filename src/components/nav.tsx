"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAccent } from "./providers";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Logo() {
  const { cycleAccent } = useAccent();
  return (
    <span className="inline-flex items-baseline text-[26px] font-bold tracking-[-0.04em]">
      <Link href="/" aria-label="deb, home" className="text-fg">
        deb
      </Link>
      <button
        type="button"
        onClick={cycleAccent}
        aria-label="Change the accent color"
        title="Click me"
        className="ml-px cursor-pointer text-accent transition-transform duration-200 hover:scale-150"
      >
        .
      </button>
    </span>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-60 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled && !open
          ? "border-b border-line bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-300 items-center justify-between px-5 sm:px-7">
        <Logo />

        {/* desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[14px] transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1.5 h-px bg-accent" />
                )}
              </Link>
            );
          })}
          <a
            href={site.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-muted transition-colors hover:text-fg"
          >
            Blog
          </a>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("deb:command-menu"))
            }
            className="hidden cursor-pointer items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-muted transition-colors hover:border-accent hover:text-fg lg:inline-flex"
          >
            <kbd>⌘K</kbd>
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2 text-[14px] font-medium text-accent-ink transition-colors hover:bg-accent-bright"
          >
            Start a project
          </Link>
        </nav>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-70 flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-fg transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-fg transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 flex h-dvh flex-col justify-between bg-bg-deep/97 px-6 pt-28 pb-10 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2">
              {[{ href: "/", label: "Home" }, ...links].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="serif-italic block py-2 text-5xl text-fg"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <a
                  href={site.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="serif-italic block py-2 text-5xl text-muted"
                >
                  Blog
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <a href={`mailto:${site.email}`} className="link text-[15px]">
                {site.email}
              </a>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                <span className="mr-2 inline-block size-1.5 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-accent align-middle" />
                {site.availability} · {site.location}
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
