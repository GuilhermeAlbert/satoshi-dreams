"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { aboutImage, getLocalizedCategories, getLocalizedItems } from "@/data/catalog";
import { useLocalCollection } from "@/hooks/use-local-collection";
import { cx } from "@/lib/utils";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { DreamCard } from "@/ui/components/dream-card";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "@/app/_components/language-provider";
import type { CategoryFilter } from "./types";

export function CollectionsPage() {
  const { copy, locale } = useLanguage();
  const categories = useMemo(() => getLocalizedCategories(locale), [locale]);
  const items = useMemo(() => getLocalizedItems(locale), [locale]);
  const collection = useLocalCollection();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [savedOnly, setSavedOnly] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const initialCategory = new URLSearchParams(window.location.search).get("category");

      if (categories.some((entry) => entry.id === initialCategory)) {
        setCategory(initialCategory as CategoryFilter);
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [categories]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesSaved = !savedOnly || collection.has(item.slug);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.shortDescription.toLowerCase().includes(normalizedQuery) ||
        item.eyebrow.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSaved && matchesQuery;
    });
  }, [category, collection, items, query, savedOnly]);

  return (
    <main>
      <section className="overflow-hidden border-b border-line">
        <Container className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20" size="wide">
          <div>
            <p className="text-xs font-bold uppercase text-gold">{copy.collections.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
              {copy.collections.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{copy.collections.subtitle}</p>
            <ButtonLink className="mt-8 w-fit" href="/how-it-works" icon={<Icon name="arrowRight" size={16} />} variant="secondary">
              {copy.collections.cta}
            </ButtonLink>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <span className="absolute left-[18%] top-[4%] h-[88%] w-[68%] rounded-full bg-gold-soft/50" />
            <Image alt="" className="artwork-image soft-image-mask object-contain" fill sizes="(min-width: 1024px) 50vw, 100vw" src={aboutImage} />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <h2 className="font-serif text-3xl text-ink">{copy.collections.browserTitle}</h2>
            <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
              <label className="relative block min-w-0 sm:w-80">
                <span className="sr-only">{copy.common.searchPlaceholder}</span>
                <input
                  className="h-12 w-full rounded-full border border-line bg-surface px-5 pr-12 text-sm outline-none transition placeholder:text-muted/70 focus:border-gold"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={copy.common.searchPlaceholder}
                  value={query}
                />
                <Icon className="absolute right-5 top-1/2 -translate-y-1/2 text-muted" name="spark" size={16} />
              </label>
              <button
                aria-pressed={savedOnly}
                className={cx(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-bold transition",
                  savedOnly ? "border-ink bg-ink text-cream" : "border-line bg-surface text-ink hover:border-ink/20",
                )}
                onClick={() => setSavedOnly((current) => !current)}
                type="button"
              >
                <Icon name="bookmark" size={16} />
                {copy.common.savedOnly}
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              className={cx(
                "rounded-full border px-5 py-3 text-sm font-bold transition",
                category === "all" ? "border-ink bg-ink text-cream" : "border-line bg-surface text-ink hover:border-ink/20",
              )}
              onClick={() => setCategory("all")}
              type="button"
            >
              {copy.common.allCategories}
            </button>
            {categories.map((entry) => (
              <button
                className={cx(
                  "rounded-full border px-5 py-3 text-sm font-bold transition",
                  category === entry.id ? "border-ink bg-ink text-cream" : "border-line bg-surface text-ink hover:border-ink/20",
                )}
                key={entry.id}
                onClick={() => setCategory(entry.id)}
                type="button"
              >
                {entry.title}
              </button>
            ))}
          </div>

          {filteredItems.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {filteredItems.map((item, index) => (
                <DreamCard item={item} key={item.slug} locale={locale} priority={index < 4} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-lg border border-line bg-surface p-10 text-center shadow-card">
              <p className="font-serif text-3xl text-ink">{savedOnly ? copy.common.savedEmpty : copy.common.noResults}</p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
