"use client";

import Image from "next/image";
import { aboutImage } from "@/data/catalog";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "../../language-provider";

export function ClosingBanner() {
  const { copy } = useLanguage();

  return (
    <section className="py-16">
      <Container>
        <div className="grid overflow-hidden rounded-lg border border-line bg-surface shadow-card lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[280px] bg-cream-deep">
            <Image alt="" className="artwork-image soft-image-mask object-contain object-bottom" fill sizes="(min-width: 1024px) 50vw, 100vw" src={aboutImage} />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-bold uppercase text-gold">Dream bigger</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-ink">{copy.home.closingTitle}</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted">{copy.description}</p>
            <ButtonLink className="mt-7 w-fit" href="/collections" icon={<Icon name="arrowRight" size={16} />}>
              {copy.actions.startExploring}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
