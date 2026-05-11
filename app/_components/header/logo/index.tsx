export function Logo() {
  return (
    <span
      aria-label="Satoshi Dreams"
      className="relative grid size-12 shrink-0 place-items-center rounded-full border border-ink/20 bg-surface shadow-card"
    >
      <span className="relative size-8 overflow-hidden rounded-full bg-ink">
        <span className="absolute left-1/2 top-2 size-4 -translate-x-1/2 rounded-full bg-cream" />
        <span className="absolute bottom-0 left-1/2 h-5 w-7 -translate-x-1/2 rounded-t-full bg-cream" />
        <span className="absolute inset-0 bg-ink/70" />
      </span>
      <span className="absolute bottom-0 right-0 grid size-6 place-items-center rounded-full bg-gold text-xs font-black text-cream">
        B
      </span>
    </span>
  );
}
