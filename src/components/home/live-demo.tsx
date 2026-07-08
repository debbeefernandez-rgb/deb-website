import Image from "next/image";
import { site } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { ArrowCircle } from "../buttons";
import { Magnetic } from "../magnetic";

export function LiveDemo() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              index="03"
              eyebrow="Try a real build"
              lines={[
                "Don't trust",
                <span key="2">
                  the <span className="text-glint">screenshots.</span>
                </span>,
              ]}
              lede="This is a sandboxed copy of my social media agent, the same build that runs my own accounts. Click around, approve a post, break something. That's what it's there for."
            />
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Magnetic>
                  <a
                    href={site.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine wipe glass-accent inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 text-[15px] font-medium hover:-translate-y-0.5"
                  >
                    <span>Open the demo</span>
                    <ArrowCircle className="size-9" />
                  </a>
                </Magnetic>
                <p className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                  <span className="inline-block size-2 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-emerald-400" />
                  Live and sandboxed
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a
              href={site.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the live demo"
              className="glass group block overflow-hidden rounded-2xl !shadow-2xl !shadow-black/50 transition-transform duration-500 hover:-translate-y-1.5"
            >
              {/* browser chrome */}
              <span className="flex items-center gap-3.5 border-b border-line bg-bg-deep/60 px-5 py-3.5">
                <span className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </span>
                <span className="flex-1 truncate rounded-md border border-line bg-bg/60 px-3 py-1.5 font-mono text-[11px] text-muted">
                  socialmedia.debfernandez.com/queue
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[9.5px] tracking-[0.18em] text-emerald-300 uppercase">
                  Live
                </span>
              </span>
              <span className="relative block">
                <Image
                  src="/images/demo-queue.webp"
                  alt="The social media agent demo: a queue of AI drafted posts with approve, reject, regenerate, and retry controls"
                  width={1577}
                  height={870}
                  sizes="(max-width: 1024px) 92vw, 640px"
                  className="block w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-bg-deep/90 px-4 py-2 font-mono text-[10.5px] tracking-[0.16em] whitespace-nowrap text-fg uppercase opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                  Click to open the real thing ↗
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
