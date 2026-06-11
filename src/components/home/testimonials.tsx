import { testimonials } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

export function Testimonials() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="06"
          eyebrow="Word of mouth"
          lines={[
            "People who",
            <span key="2">
              hired me <span className="serif-italic text-accent">twice.</span>
            </span>,
          ]}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
                <span
                  aria-hidden
                  className="serif-italic text-[44px] leading-none text-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 grow text-[17px] leading-relaxed text-fg/95">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="text-[14px] font-medium">{t.name}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
