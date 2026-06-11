"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "abcdefghjkmnpqrstuvwxyz0123456789<>/*#$";

/* Cycles through words with a terminal-style decode effect. */
export function Scramble({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [text, setText] = useState(words[0]);
  const index = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const id = setInterval(() => {
        index.current = (index.current + 1) % words.length;
        setText(words[index.current]);
      }, interval);
      return () => clearInterval(id);
    }

    let frame = 0;
    let decode: ReturnType<typeof setInterval> | undefined;
    const cycle = setInterval(() => {
      index.current = (index.current + 1) % words.length;
      const target = words[index.current];
      frame = 0;
      clearInterval(decode);
      decode = setInterval(() => {
        frame += 1;
        const settled = Math.floor(frame / 2);
        if (settled >= target.length) {
          setText(target);
          clearInterval(decode);
          return;
        }
        const head = target.slice(0, settled);
        const tail = Array.from({ length: target.length - settled }, () =>
          GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        ).join("");
        setText(head + tail);
      }, 36);
    }, interval);

    return () => {
      clearInterval(cycle);
      clearInterval(decode);
    };
  }, [words, interval]);

  return (
    <span className={className} aria-live="off">
      {text}
    </span>
  );
}
