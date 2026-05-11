"use client";

import Image from "next/image";
import { fortuneScale } from "@/data/catalog";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "../../language-provider";

const scaleImages = [
  "/images/optimized/pizza.png",
  "/images/optimized/necker.png",
  "/images/optimized/monaco.png",
  "/images/optimized/hero.png",
];

export function FortuneScale() {
  const { copy, locale } = useLanguage();

  return (
    <section className="border-t border-line py-12">
      <Container className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase text-gold">Scale</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink">{copy.home.scaleTitle}</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">{copy.home.scaleText}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {fortuneScale[locale].map(([value, label], index) => (
            <article className="flex min-h-28 items-center gap-4 rounded-lg border border-line bg-surface p-4 shadow-card" key={label}>
              <span className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-md bg-cream-deep">
                <Image alt="" className="artwork-image object-contain p-1" fill sizes="64px" src={scaleImages[index]} />
              </span>
              <span>
                <span className="block font-serif text-3xl leading-none text-ink">{value}</span>
                <span className="mt-1 block text-sm font-semibold leading-5 text-muted">{label}</span>
              </span>
              <Icon className="ml-auto self-end text-muted/50" name="spark" size={15} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
