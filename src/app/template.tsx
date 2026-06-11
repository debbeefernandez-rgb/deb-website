"use client";

import { motion, useReducedMotion } from "motion/react";

/* Soft enter transition on every route change. */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
