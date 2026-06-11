"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/*
  Two layers that follow the pointer:
  - a soft warm glow that lights up the page
  - a small ring that tightens over links and buttons
  The native cursor stays visible. Hidden entirely on touch devices.
*/
export function Cursor() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const glowX = useSpring(x, { stiffness: 50, damping: 18, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 50, damping: 18, mass: 0.6 });
  const ringX = useSpring(x, { stiffness: 420, damping: 30, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 420, damping: 30, mass: 0.3 });
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      setHidden(false);
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(!!target?.closest("a, button, [role='button'], input, select, textarea, label"));
    };
    const leave = () => setHidden(true);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  return (
    <div className="custom-cursor" aria-hidden>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-1 size-[34rem] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
          background:
            "radial-gradient(circle, var(--accent-tint) 0%, transparent 60%)",
          transition: "opacity 0.5s ease",
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-90 rounded-full border border-accent"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: active ? 36 : 14,
          height: active ? 36 : 14,
          opacity: hidden ? 0 : active ? 0.9 : 0.5,
          transition:
            "width 0.25s cubic-bezier(0.21,0.7,0.2,1), height 0.25s cubic-bezier(0.21,0.7,0.2,1), opacity 0.3s ease",
        }}
      />
    </div>
  );
}
