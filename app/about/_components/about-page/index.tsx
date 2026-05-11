"use client";

import Image from "next/image";
import { aboutImage } from "@/data/catalog";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { StatTile } from "@/ui/components/stat-tile";
import { useLanguage } from "@/app/_components/language-provider";

export function AboutPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20" size="wide">
          <div>
            <p className="text-xs font-bold uppercase text-gold">{copy.about.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
              {copy.about.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-muted">{copy.about.intro}</p>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-muted">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ButtonLink className="mt-8 w-fit" href="https://bitcoin.org/bitcoin.pdf" icon={<Icon name="arrowRight" size={16} />} variant="secondary">
              {copy.about.whitepaper}
            </ButtonLink>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <span className="absolute left-[16%] top-[6%] h-[86%] w-[76%] rounded-full bg-gold-soft/60" />
            <Image alt="" className="artwork-image soft-image-mask object-contain" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src={aboutImage} />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid rounded-lg border border-line bg-surface px-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {copy.about.metrics.map(([value, label]) => (
              <StatTile icon={<Icon name="bitcoin" size={18} />} key={label} label={label} value={value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="rounded-lg border border-line bg-surface p-8 shadow-card sm:p-10">
            <p className="text-xs font-bold uppercase text-gold">Disclaimer</p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink">
              Satoshi Dreams is an artistic and satirical project.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              No number on this site should be interpreted as investment advice, a real valuation,
              financial recommendation, or purchase instruction. Bitcoin belongs to internet culture.
              This project does too.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
