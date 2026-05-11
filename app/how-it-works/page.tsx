import type { Metadata } from "next";
import { siteCopy } from "@/data/site";
import { HowItWorksPage } from "./_components/how-it-works-page";

export const metadata: Metadata = {
  title: siteCopy.en.nav.howItWorks,
  description: siteCopy.en.how.intro,
};

export default function Page() {
  return <HowItWorksPage />;
}
