import type { SectionHeadingProps } from "./types";

export function SectionHeading({ action, eyebrow, subtitle, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="text-xs font-bold uppercase text-gold">{eyebrow}</p> : null}
        <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-4 max-w-xl text-base leading-7 text-muted">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
