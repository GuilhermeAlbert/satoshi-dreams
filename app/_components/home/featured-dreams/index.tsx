"use client";

import { getLocalizedItems } from "@/data/catalog";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { DreamCard } from "@/ui/components/dream-card";
import { Icon } from "@/ui/components/icon";
import { SectionHeading } from "@/ui/components/section-heading";
import { useLanguage } from "../../language-provider";

export function FeaturedDreams() {
  const { copy, locale } = useLanguage();
  const items = getLocalizedItems(locale).slice(0, 5);

  return (
    <section className="border-t border-line py-16">
      <Container>
        <SectionHeading
          action={
            <ButtonLink href="/collections" icon={<Icon name="arrowRight" size={15} />} variant="secondary">
              {copy.actions.viewAll}
            </ButtonLink>
          }
          eyebrow={copy.home.highlightsTitle}
          subtitle={copy.home.featureText}
          title={copy.home.featureTitle}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item, index) => (
            <DreamCard item={item} key={item.slug} locale={locale} priority={index < 2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
