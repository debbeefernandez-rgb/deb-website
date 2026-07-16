import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Shipped projects: websites, AI products, brand systems, and content at scale. Real clients, real outcomes.",
};

export default function WorkPage() {
  return (
    <div className="pt-36 pb-28 sm:pb-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index=""
          eyebrow="The receipts"
          lines={[
            "Shipped,",
            <span key="2">
              not <span className="text-glint">staged.</span>
            </span>,
          ]}
          lede="Real builds, real outcomes."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min((i % 2) * 0.08, 0.2)} className="h-full">
              <ProjectCard project={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glass mt-16 flex flex-wrap items-center gap-5 rounded-2xl p-8 sm:p-10">
            <div className="grow">
              <h2 className="display text-[22px]">
                Your project could be next.
              </h2>
              <p className="mt-2 max-w-[48ch] text-[15px] text-muted">
                Tell me what you need and I will tell you in 24 hours if I can
                build it.
              </p>
            </div>
            <Button href="/contact">Start a project</Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
