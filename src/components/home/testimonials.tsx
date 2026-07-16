import { testimonials } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { Spotlight } from "../spotlight";

function Stars() {
  return (
    <span className="flex gap-1 text-accent" aria-label="Five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 14 14" className="size-3.5" fill="currentColor" aria-hidden>
          <path d="M7 .8 8.9 4.6l4.2.6-3 3 .7 4.2L7 10.4l-3.8 2 .7-4.2-3-3 4.2-.6L7 .8Z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index=""
          eyebrow="Word of mouth"
          lines={[
            "People who",
            <span key="2">
              hired me <span className="text-glint">twice.</span>
            </span>,
          ]}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1} className="h-full">
              <Spotlight className="glass flex h-full flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
                <Stars />
                <blockquote className="mt-5 grow text-[17px] leading-relaxed text-fg/95">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="text-[14px] font-medium">{t.name}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {t.role}
                  </p>
                </figcaption>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
