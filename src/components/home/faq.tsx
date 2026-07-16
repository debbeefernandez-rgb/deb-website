"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-bg-deep py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              index=""
              eyebrow="Straight answers"
              lines={[
                "The questions",
                <span key="2">
                  you <span className="text-glint">should ask.</span>
                </span>,
              ]}
              lede="Including the awkward one about my background. Ask me anything else on a call."
            />
          </div>

          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={Math.min(i * 0.05, 0.25)}>
                  <div className="border-t border-line last:border-b">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-[16.5px] font-medium tracking-[-0.01em] transition-colors ${
                          isOpen ? "text-fg" : "text-fg/80"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`mt-1 shrink-0 font-mono text-[18px] leading-none text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.21, 0.7, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[64ch] pb-7 text-[15px] leading-relaxed text-muted">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
