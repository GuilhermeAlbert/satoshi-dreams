"use client";

import { CategoryRow } from "../category-row";
import { ClosingBanner } from "../closing-banner";
import { FeaturedDreams } from "../featured-dreams";
import { FortuneScale } from "../fortune-scale";
import { Hero } from "../hero";

export function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryRow />
      <FeaturedDreams />
      <FortuneScale />
      <ClosingBanner />
    </main>
  );
}
