import Image from "next/image";
import Link from "next/link";
import { formatBtc, getItemHref } from "@/lib/utils";
import { Icon } from "@/ui/components/icon";
import type { DreamCardProps } from "./types";

export function DreamCard({ item, locale, priority = false }: DreamCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-surface shadow-card transition duration-200 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card-hover">
      <Link className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40" href={getItemHref(item.slug)}>
        <span className="relative block aspect-[1.2/1] overflow-hidden bg-cream-deep">
          <Image
            alt=""
            className="artwork-image h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={item.image}
          />
        </span>
        <span className="block p-5">
          <span className="block text-xs font-semibold uppercase text-gold">{item.eyebrow}</span>
          <span className="mt-2 block min-h-14 font-serif text-2xl leading-tight text-ink">{item.name}</span>
          <span className="mt-3 line-clamp-2 block text-sm leading-6 text-muted">{item.shortDescription}</span>
          <span className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-ink">
            {formatBtc(item.priceBtc, locale)}
            <span className="grid size-8 place-items-center rounded-full bg-cream text-ink transition group-hover:translate-x-1">
              <Icon name="arrowRight" size={15} />
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}
