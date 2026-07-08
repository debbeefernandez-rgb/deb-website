import { site } from "@/lib/site";
import { Reveal, RevealLines } from "../reveal";
import { ArrowCircle } from "../buttons";
import { Magnetic } from "../magnetic";

/* The cream card from v1, back by popular demand. */
export function HomeCta() {
  return (
    <section className="relative overflow-hidden py-28 pb-36 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[34rem] w-[70rem] -translate-x-1/2 translate-y-1/3 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent-glow), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-300 px-5 sm:px-7">
        <Reveal>
          <div className="rounded-[2rem] bg-cream px-7 py-16 text-center text-cream-ink shadow-[0_40px_120px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.6)] sm:px-14 sm:py-24">
            <p className="font-mono text-[11px] tracking-[0.26em] uppercase opacity-55">
              · Still here? ·
            </p>
            <h2 className="display mt-7 text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.95]">
              <RevealLines
                lines={["Got something", "to build?"]}
              />
            </h2>
            <p className="mx-auto mt-7 max-w-[46ch] text-[16.5px] leading-relaxed opacity-70">
              Brand, website, AI system, or the whole product. Tell me what
              you have in mind and I will tell you in 24 hours if I can help.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Magnetic>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine wipe inline-flex items-center gap-3.5 rounded-full bg-cream-ink py-2.5 pr-2.5 pl-7 text-[15.5px] font-medium text-cream shadow-xl shadow-black/25 hover:-translate-y-0.5"
                >
                  <span>Get started</span>
                  <ArrowCircle className="size-9.5" />
                </a>
              </Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="link inline-block py-2 font-mono text-[13px] tracking-[0.04em] !text-cream-ink/70 hover:!text-cream-ink"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
