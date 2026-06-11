"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/lib/site";
import { useAccent } from "./providers";

type Command = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
};

export function CommandMenu() {
  const router = useRouter();
  const { cycleAccent } = useAccent();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      { id: "home", group: "Go to", label: "Home", run: () => router.push("/") },
      { id: "work", group: "Go to", label: "Work", run: () => router.push("/work") },
      { id: "about", group: "Go to", label: "About", run: () => router.push("/about") },
      { id: "contact", group: "Go to", label: "Contact", run: () => router.push("/contact") },
      {
        id: "email",
        group: "Actions",
        label: copied ? "Email copied" : "Copy my email",
        hint: site.email,
        run: () => {
          navigator.clipboard.writeText(site.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        },
      },
      {
        id: "call",
        group: "Actions",
        label: "Book a 15 minute call",
        hint: "calendly",
        run: () => window.open(site.calendly, "_blank", "noopener"),
      },
      {
        id: "demo",
        group: "Actions",
        label: "Open the live demo",
        hint: "a real build",
        run: () => window.open(site.liveDemo, "_blank", "noopener"),
      },
      {
        id: "accent",
        group: "Actions",
        label: "Switch the accent color",
        hint: "try it",
        run: cycleAccent,
      },
      {
        id: "instagram",
        group: "Elsewhere",
        label: "Instagram",
        run: () => window.open(site.instagram, "_blank", "noopener"),
      },
      {
        id: "blog",
        group: "Elsewhere",
        label: "Blog",
        run: () => window.open(site.blog, "_blank", "noopener"),
      },
    ],
    [router, cycleAccent, copied],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q) ||
        c.hint?.toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") close();
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("deb:command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("deb:command-menu", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter" && filtered[cursor]) {
      const cmd = filtered[cursor];
      cmd.run();
      if (cmd.id !== "email" && cmd.id !== "accent") close();
    }
  };

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-100 flex items-start justify-center bg-black/60 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.2, ease: [0.21, 0.7, 0.2, 1] }}
            className="w-full max-w-130 overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Command menu"
          >
            <div className="flex items-center gap-3 border-b border-line px-5">
              <span className="font-mono text-[13px] text-accent">&gt;</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Where to?"
                className="h-13 w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-faint"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">
                esc
              </kbd>
            </div>
            <ul className="max-h-[46vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-[12px] text-faint">
                  Nothing matches. Try &quot;work&quot; or &quot;email&quot;.
                </li>
              )}
              {filtered.map((cmd, i) => {
                const showGroup = cmd.group !== lastGroup;
                lastGroup = cmd.group;
                return (
                  <li key={cmd.id}>
                    {showGroup && (
                      <p className="px-3 pt-3 pb-1.5 font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                        {cmd.group}
                      </p>
                    )}
                    <button
                      type="button"
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => {
                        cmd.run();
                        if (cmd.id !== "email" && cmd.id !== "accent") close();
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left text-[14px] transition-colors ${
                        i === cursor
                          ? "bg-accent-tint text-fg"
                          : "text-muted"
                      }`}
                    >
                      <span>{cmd.label}</span>
                      {cmd.hint && (
                        <span className="font-mono text-[11px] text-faint">
                          {cmd.hint}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
