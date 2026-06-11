import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { SectionHeading } from "@/components/section-heading";
import { WorkList } from "@/components/work-list";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six shipped projects: AI products, brand systems, campaigns, and content at scale. Real clients, real outcomes.",
};

export default function WorkPage() {
  return (
    <div className="pt-36 pb-28 sm:pb-36">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        <SectionHeading
          index="Work"
          eyebrow="The receipts"
          lines={[
            "Shipped,",
            <span key="2">
              not <span className="serif-italic text-accent">staged.</span>
            </span>,
          ]}
          lede="Every project here went live and did its job. Outcomes are listed next to each one, ask me about any of them on a call."
        />

        <div className="mt-16">
          <WorkList projects={projects} />
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-wrap items-center gap-5 rounded-2xl border border-line bg-surface p-8 sm:p-10">
            <div className="grow">
              <h2 className="text-[22px] font-semibold tracking-[-0.02em]">
                Your project could be number seven.
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
