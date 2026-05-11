"use client";

import Image from "next/image";
import { coverImage, heroImage } from "@/data/catalog";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "../../language-provider";
import type { HeroMetric } from "./types";

export function Hero() {
  const { copy } = useLanguage();
  const metrics: HeroMetric[] = copy.home.metrics.map(([value, label]) => ({ label, value }));

  return (
    <section className="relative overflow-hidden">
      <Container className="grid min-h-[720px] items-center gap-10 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:py-20" size="wide">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase text-gold">{copy.home.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-none text-ink sm:text-7xl lg:text-[6.2rem]">
            {copy.home.title}
          </h1>
          <p className="mt-6 max-w-md text-2xl font-semibold leading-9 text-muted">{copy.home.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/collections" icon={<Icon name="arrowRight" size={16} />} size="lg">
              {copy.actions.startExploring}
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" size="lg">
              {copy.nav.about}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div className="flex items-center gap-3 rounded-full border border-line bg-surface/70 px-4 py-3" key={metric.label}>
                <span className="grid size-10 place-items-center rounded-full border border-line bg-cream text-gold">
                  <Icon name={index === 0 ? "bitcoin" : index === 1 ? "globe" : "spark"} size={17} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{metric.value}</span>
                  <span className="block text-xs font-semibold text-muted">{metric.label}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs font-bold uppercase text-gold">{copy.home.signature}</p>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[650px]">
          <Image
            alt=""
            className="artwork-image soft-image-mask object-contain"
            fill
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            src={heroImage}
          />
        </div>
      </Container>
      <Image alt="" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-10" fill priority src={coverImage} />
    </section>
  );
}
