"use client";

import Image from "next/image";
import Link from "next/link";
import { getLocalizedItem, getRelatedItems } from "@/data/catalog";
import { useLocalCollection } from "@/hooks/use-local-collection";
import { formatBtc, formatPercent, formatUsd, getFortuneShare } from "@/lib/utils";
import { Button } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { DreamCard } from "@/ui/components/dream-card";
import { Icon } from "@/ui/components/icon";
import { ShareActions } from "@/ui/components/share-actions";
import { StatTile } from "@/ui/components/stat-tile";
import { useLanguage } from "@/app/_components/language-provider";
import type { ItemPageProps } from "./types";

export function ItemPage({ slug }: ItemPageProps) {
  const { copy, locale } = useLanguage();
  const item = getLocalizedItem(slug, locale);
  const related = getRelatedItems(slug, locale);
  const collection = useLocalCollection();

  if (!item) {
    return null;
  }

  const isSaved = collection.has(item.slug);
  const share = getFortuneShare(item.priceBtc);

  return (
    <main>
      <Container className="py-7 text-sm text-muted" size="wide">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3">
          <Link className="hover:text-ink" href="/">
            {copy.nav.explore}
          </Link>
          <span>/</span>
          <Link className="hover:text-ink" href="/collections">
            {copy.nav.collections}
          </Link>
          <span>/</span>
          <span className="text-ink">{item.name}</span>
        </nav>
      </Container>

      <section className="pb-12">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start" size="wide">
          <div className="lg:pt-8">
            <div className="inline-flex items-center gap-3 text-sm font-bold uppercase text-muted">
              <span className="grid size-9 place-items-center rounded-full bg-gold-soft text-gold">
                <Icon name="spark" size={17} />
              </span>
              {item.eyebrow}
            </div>
            <h1 className="mt-6 font-serif text-6xl leading-none text-ink sm:text-7xl lg:text-[5.25rem]">{item.name}</h1>
            <p className="mt-6 max-w-lg text-xl leading-8 text-muted">{item.shortDescription}</p>

            <div className="mt-8 rounded-lg border border-line bg-surface p-6 shadow-card">
              <p className="text-xs font-bold uppercase text-muted">{copy.common.estimatedPrice}</p>
              <p className="mt-3 font-serif text-5xl leading-none text-ink">{formatBtc(item.priceBtc, locale)}</p>
              <p className="mt-3 text-base font-semibold text-muted">{formatUsd(item.priceUsd, locale)}</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-cream-deep">
                <div className="h-full rounded-full bg-gold" style={{ width: `${Math.max(2, Math.min(100, share))}%` }} />
              </div>
              <p className="mt-2 text-xs text-muted">
                {formatPercent(share, locale)}% {copy.common.fortuneShare}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button
                aria-pressed={isSaved}
                icon={<Icon name={isSaved ? "check" : "plus"} size={17} />}
                onClick={() => collection.toggle(item.slug)}
                size="lg"
              >
                {isSaved ? copy.actions.addedToCollection : copy.actions.addToCollection}
              </Button>
              <ShareActions
                copyLabel={copy.actions.copyLink}
                copiedLabel={copy.actions.copied}
                label={copy.actions.share}
                shareLabel={copy.actions.share}
                sharedLabel={copy.actions.shared}
                text={copy.item.shareText}
                title={item.name}
              />
            </div>
          </div>

          <div>
            <div className="relative min-h-[340px] overflow-hidden rounded-lg lg:min-h-[610px]">
              <span className="absolute left-[16%] top-[8%] h-[76%] w-[72%] rounded-full bg-sage" />
              <Image
                alt={item.alt}
                className="artwork-image soft-image-mask object-contain"
                fill
                priority
                sizes="(min-width: 1024px) 62vw, 100vw"
                src={item.image}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/40 py-10">
        <Container>
          <h2 className="font-serif text-3xl text-ink">{copy.item.statsTitle}</h2>
          <div className="mt-6 grid rounded-lg border border-line bg-surface px-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {item.stats.map((stat) => (
              <StatTile icon={<Icon name="bitcoin" size={18} />} key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase text-gold">{copy.item.triviaTitle}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink">{item.description}</h2>
          </div>
          <div className="grid gap-4">
            {item.trivia.map((trivia) => (
              <article className="rounded-lg border border-line bg-surface p-5 text-base leading-7 text-muted shadow-card" key={trivia}>
                {trivia}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14">
        <Container>
          <h2 className="font-serif text-4xl text-ink">{copy.item.relatedTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((relatedItem) => (
              <DreamCard item={relatedItem} key={relatedItem.slug} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
