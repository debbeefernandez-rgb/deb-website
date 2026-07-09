import type { ReactNode } from "react";
import { Reveal, RevealLines } from "./reveal";

/*
  Section opener: a huge hollow numeral behind a heavy display headline.
  Headlines accept a .text-glint span for the gradient accent.
*/
export function SectionHeading({
  index,
  eyebrow,
  lines,
  lede,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  lines: ReactNode[];
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`relative ${centered ? "text-center" : ""}`}>
      {index && (
        <span
          aria-hidden
          className={`outline-num pointer-events-none absolute -top-[0.52em] text-[clamp(5.5rem,12vw,10rem)] leading-none opacity-70 ${
            centered ? "left-1/2 -translate-x-1/2" : "-left-2"
          }`}
        >
          {index}
        </span>
      )}
      <Reveal>
        <p className={`eyebrow relative ${index ? "pt-10" : ""}`}>
          <span className="mr-2.5 inline-block size-1.5 rounded-full bg-accent align-middle" />
          {eyebrow}
        </p>
      </Reveal>
      <h2 className="display relative mt-5 text-[clamp(2.3rem,5.2vw,4.2rem)] leading-[1.02]">
        <RevealLines lines={lines} />
      </h2>
      {lede && (
        <Reveal delay={0.15}>
          <p
            className={`relative mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
