import type { Metadata } from "next";
import { siteCopy } from "@/data/site";
import { CollectionsPage } from "./_components/collections-page";

export const metadata: Metadata = {
  title: siteCopy.en.nav.collections,
  description: siteCopy.en.collections.subtitle,
};

export default function Page() {
  return <CollectionsPage />;
}
