"use client";

import Image from "next/image";
import Link from "next/link";
import { getLocalizedCategories } from "@/data/catalog";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { SectionHeading } from "@/ui/components/section-heading";
import { useLanguage } from "../../language-provider";

export function CategoryRow() {
  const { copy, locale } = useLanguage();
  const categories = getLocalizedCategories(locale);

  return (
    <section className="border-t border-line py-14">
      <Container>
        <SectionHeading eyebrow="Satoshi Dreams" title={copy.home.categoriesTitle} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              className="group grid overflow-hidden rounded-lg border border-line bg-surface shadow-card transition hover:-translate-y-1 hover:border-ink/20 hover:shadow-card-hover"
              href={`/collections?category=${category.id}`}
              key={category.id}
            >
              <span className="relative h-44 overflow-hidden bg-cream-deep">
                <Image
                  alt=""
                  className="artwork-image object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={category.image}
                />
              </span>
              <span className="flex items-end justify-between gap-5 p-5">
                <span>
                  <span className="block font-serif text-2xl leading-tight text-ink">{category.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-muted">{category.description}</span>
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream text-ink transition group-hover:translate-x-1">
                  <Icon name="arrowRight" size={15} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
