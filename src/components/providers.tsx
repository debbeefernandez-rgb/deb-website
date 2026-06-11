"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";

export const accentInitScript = `try{var a=localStorage.getItem("deb-accent");if(a==="pink"||a==="plum")document.documentElement.dataset.accent=a}catch(e){}`;

/* ---------- smooth scroll ---------- */

function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.12 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

/* ---------- accent theme (the logo dot cycles it) ---------- */

const ACCENTS = ["caramel", "pink", "plum"] as const;
export type Accent = (typeof ACCENTS)[number];

const ACCENT_NOTES: Record<Accent, string> = {
  caramel: "caramel · named after my three brown dogs",
  pink: "pink · my actual favorite color",
  plum: "plum · for the night owls",
};

type AccentContextValue = {
  accent: Accent;
  cycleAccent: () => void;
};

const AccentContext = createContext<AccentContextValue>({
  accent: "caramel",
  cycleAccent: () => {},
});

export function useAccent() {
  return useContext(AccentContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();

  // An inline script in the layout applies the saved accent before paint;
  // here we only pick it up for React state.
  const [accent, setAccent] = useState<Accent>(() => {
    if (typeof document === "undefined") return "caramel";
    const current = document.documentElement.dataset.accent as Accent;
    return ACCENTS.includes(current) ? current : "caramel";
  });
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cycleAccent = useCallback(() => {
    setAccent((current) => {
      const next = ACCENTS[(ACCENTS.indexOf(current) + 1) % ACCENTS.length];
      document.documentElement.dataset.accent = next;
      localStorage.setItem("deb-accent", next);
      setToast(ACCENT_NOTES[next]);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 2600);
      return next;
    });
  }, []);

  return (
    <AccentContext.Provider value={{ accent, cycleAccent }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.21, 0.7, 0.2, 1] }}
            className="fixed bottom-6 left-1/2 z-100 -translate-x-1/2 rounded-full border border-line-strong bg-surface-2 px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-muted shadow-2xl shadow-black/50"
          >
            <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </AccentContext.Provider>
  );
}
