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
    <span className="display inline-flex items-baseline text-[26px]">
      <Link href="/" aria-label="deb, home" className="text-fg">
        deb
      </Link>
      <button
        type="button"
        onClick={cycleAccent}
        aria-label="Change the accent color"
        title="Click me"
        className="-mx-2 -my-2 cursor-pointer px-2 py-2 text-accent transition-transform duration-200 hover:scale-150"
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
    <header className="fixed inset-x-0 top-0 z-60">
      <div className="mx-auto flex h-[76px] max-w-300 items-center justify-between px-5 sm:px-7">
        <Logo />

        {/* desktop: links live in a floating glass pill */}
        <nav className="hidden items-center gap-2.5 md:flex" aria-label="Primary">
          <div
            className={`flex items-center gap-1 rounded-full p-1.5 transition-[background-color,border-color,box-shadow] duration-300 ${
              scrolled
                ? "border border-line-strong bg-bg/72 shadow-xl shadow-black/30 backdrop-blur-xl"
                : "border border-transparent"
            }`}
          >
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-[13.5px] transition-colors duration-200 ${
                    active
                      ? "bg-fg/10 text-fg"
                      : "text-muted hover:bg-fg/5 hover:text-fg"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={site.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-[13.5px] text-muted transition-colors duration-200 hover:bg-fg/5 hover:text-fg"
            >
              Blog
            </a>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("deb:command-menu"))
              }
              aria-label="Open command menu"
              className="hidden cursor-pointer rounded-full px-3 py-2 font-mono text-[11px] tracking-[0.08em] text-faint transition-colors duration-200 hover:bg-fg/5 hover:text-fg lg:block"
            >
              ⌘K
            </button>
          </div>
          <Link
            href="/contact"
            className="shine glass-dark rounded-full px-5 py-2.5 text-[13.5px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
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
          className="glass-dark relative z-70 flex size-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
        >
          <span
            className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-fg transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
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
                    className="display block py-2 text-5xl text-fg"
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
                  className="display block py-2 text-5xl text-muted"
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
