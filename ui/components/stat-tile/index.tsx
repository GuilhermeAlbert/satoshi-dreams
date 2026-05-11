import type { StatTileProps } from "./types";

export function StatTile({ icon, label, value }: StatTileProps) {
  return (
    <article className="flex min-h-28 items-center gap-4 border-b border-line px-5 py-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-cream text-gold">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-bold uppercase text-muted">{label}</span>
        <span className="mt-1 block font-serif text-2xl leading-tight text-ink">{value}</span>
      </span>
    </article>
  );
}
