import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dreamItems, getLocalizedItem } from "@/data/catalog";
import { siteCopy, siteUrl } from "@/data/site";
import { formatBtc, formatUsd } from "@/lib/utils";
import { ItemPage } from "./_components/item-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return dreamItems.map((item) => ({ itemSlug: item.slug }));
}

type PageProps = {
  params: Promise<{
    itemSlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { itemSlug } = await params;
  const item = getLocalizedItem(itemSlug, "en");

  if (!item) {
    return {};
  }

  const title = `${siteCopy.en.title}: ${item.name}`;
  const description = `${item.shortDescription} ${formatBtc(item.priceBtc, "en")} (${formatUsd(item.priceUsd, "en")}).`;

  return {
    alternates: {
      canonical: `${siteUrl}/collections/${item.slug}`,
    },
    description,
    openGraph: {
      description,
      images: [item.image],
      title,
      type: "article",
      url: `${siteUrl}/collections/${item.slug}`,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [item.image],
      title,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { itemSlug } = await params;

  if (!dreamItems.some((item) => item.slug === itemSlug)) {
    notFound();
  }

  return <ItemPage slug={itemSlug} />;
}
