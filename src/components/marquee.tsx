/*
  Pure CSS marquee: two identical rows inside a w-max flex track,
  translated -50% on a loop. GPU-driven, seamless, no per-frame JS.
  Pauses on hover, stops entirely under reduced motion.
*/
export function Marquee({
  items,
  duration = 38,
}: {
  items: string[];
  duration?: number;
}) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 pr-8 font-mono text-[12px] tracking-[0.2em] whitespace-nowrap text-muted uppercase"
        >
          {item}
          <span className="size-1 rounded-full bg-accent/60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="group/marquee marquee-mask overflow-hidden">
      <div
        className="animate-marquee flex w-max"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
