"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["design", "build", "ship", "deb."];

/* First-visit-only intro. Cycles three verbs, lands on the wordmark, slides away. */
export function Preloader() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("deb-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    sessionStorage.setItem("deb-intro", "1");

    const raf = requestAnimationFrame(() => {
      setShow(true);
      document.documentElement.style.overflow = "hidden";
    });
    const steps = WORDS.map((_, i) =>
      setTimeout(() => setIndex(i), 320 * i),
    );
    const done = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 320 * WORDS.length + 520);

    return () => {
      cancelAnimationFrame(raf);
      steps.forEach(clearTimeout);
      clearTimeout(done);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-110 flex items-center justify-center bg-bg-deep"
        >
          <div className="flex items-baseline gap-3 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.26, ease: [0.21, 0.7, 0.2, 1] }}
                className={
                  index === WORDS.length - 1
                    ? "text-5xl font-bold tracking-[-0.04em] text-fg sm:text-6xl"
                    : "serif-italic text-5xl text-muted sm:text-6xl"
                }
              >
                {index === WORDS.length - 1 ? (
                  <>
                    deb<span className="text-accent">.</span>
                  </>
                ) : (
                  WORDS[index]
                )}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
