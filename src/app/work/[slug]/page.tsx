import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { Reveal, RevealLines } from "@/components/reveal";
import { Arrow, ArrowUpRight, Button } from "@/components/buttons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.blurb} Outcome: ${project.outcome}.`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.blurb,
    creator: { "@type": "Person", name: "Deb Fernandez" },
    dateCreated: project.year.slice(0, 4),
  };

  return (
    <article className="pt-36 pb-28">
      <div className="mx-auto max-w-300 px-5 sm:px-7">
        {/* header */}
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-fg"
          >
            <Arrow className="size-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
            All work
          </Link>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal delay={0.05}>
              <p className="eyebrow">
                <span className="text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mx-3 text-faint">/</span>
                {project.category} · {project.year}
              </p>
            </Reveal>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
              <RevealLines lines={[project.title]} />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                {project.blurb}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="rounded-2xl border border-accent/30 bg-accent-tint px-6 py-5">
              <span className="eyebrow block">Outcome</span>
              <span className="mt-2 block text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold tracking-[-0.02em] text-accent-bright">
                {project.outcome}
              </span>
            </p>
          </Reveal>
        </div>

        {/* hero image */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/40">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              sizes="(max-width: 1280px) 94vw, 1200px"
              priority
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        {/* meta strip */}
        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-line py-8 md:grid-cols-4">
            <div>
              <dt className="eyebrow">Client</dt>
              <dd className="mt-2.5 text-[14.5px]">{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-2.5 text-[14.5px]">
                Design, build, ship. All of it.
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd className="mt-2.5 text-[14.5px]">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">Stack</dt>
              <dd className="mt-2.5 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10.5px] tracking-[0.08em] text-muted uppercase"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* problem / approach */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-accent">The problem</p>
              <p className="mt-5 text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug font-medium tracking-[-0.015em]">
                {project.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow text-accent">What I did</p>
              <p className="mt-5 text-[16.5px] leading-relaxed text-muted">
                {project.approach}
              </p>
            </div>
          </Reveal>
        </div>

        {/* highlights */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {project.highlights.map((h, i) => (
            <Reveal key={h.heading} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <p className="font-mono text-[12px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-[20px] font-semibold tracking-[-0.015em]">
                  {h.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {h.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA + next project */}
        <Reveal>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-line bg-bg-deep p-8 sm:p-10">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em]">
                Need something like this?
              </h2>
              <p className="mt-2 max-w-[44ch] text-[15px] text-muted">
                Same process, your problem. I will tell you in 24 hours if I
                can build it.
              </p>
            </div>
            <Button href="/contact">Start a project</Button>
          </div>
        </Reveal>

        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-6 flex items-center justify-between rounded-2xl border border-line p-8 transition-colors hover:border-accent/50 sm:p-10"
          >
            <span>
              <span className="eyebrow block">Next project</span>
              <span className="mt-2 block text-[clamp(1.4rem,3vw,2.2rem)] font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1.5">
                {next.title}
              </span>
            </span>
            <ArrowUpRight className="size-6 text-faint transition-colors group-hover:text-accent" />
          </Link>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}
