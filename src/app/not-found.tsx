import Link from "next/link";
import { Button } from "@/components/buttons";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">
        <span className="text-accent">404</span>
        <span className="mx-3 text-faint">/</span>
        Not here
      </p>
      <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.5rem)] leading-[1] font-semibold tracking-[-0.04em]">
        This page never{" "}
        <span className="serif-italic text-accent">shipped.</span>
      </h1>
      <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-muted">
        Everything I actually ship is one click away. The dogs ate this URL.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button href="/">Back home</Button>
        <Button href="/work" variant="ghost">
          See the work
        </Button>
      </div>
      <Link
        href="/contact"
        className="link mt-8 font-mono text-[12px] tracking-[0.1em] text-muted"
      >
        Or report it and I will fix it within 24h
      </Link>
    </div>
  );
}
