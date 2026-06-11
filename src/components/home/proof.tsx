import { stats, tools } from "@/lib/site";
import { Counter } from "../counter";
import { Reveal } from "../reveal";
import { Marquee } from "../marquee";

export function Proof() {
  return (
    <section className="relative border-y border-line">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`border-line py-10 sm:py-14 ${
                i % 2 === 1 ? "border-l pl-6 sm:pl-10" : "pr-4"
              } ${i >= 2 ? "max-lg:border-t" : ""} ${
                i >= 1 ? "lg:border-l lg:pl-10" : ""
              }`}
            >
              <p className="text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none font-semibold tracking-[-0.03em]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="border-t border-line py-5">
        <Marquee items={tools} />
      </div>
    </section>
  );
}
