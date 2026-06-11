import type { ReactNode } from "react";
import { Reveal, RevealLines } from "./reveal";

/* Standard section opener: numbered mono eyebrow + masked headline + optional lede. */
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
    <div className={centered ? "text-center" : ""}>
      <Reveal>
        <p className="eyebrow">
          <span className="text-accent">{index}</span>
          <span className="mx-3 text-faint">/</span>
          {eyebrow}
        </p>
      </Reveal>
      <h2 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] font-semibold tracking-[-0.03em]">
        <RevealLines lines={lines} />
      </h2>
      {lede && (
        <Reveal delay={0.15}>
          <p
            className={`mt-5 max-w-[56ch] text-[17px] leading-relaxed text-muted ${centered ? "mx-auto" : ""}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
