import type { Metadata } from "next";
import { siteCopy } from "@/data/site";
import { AboutPage } from "./_components/about-page";

export const metadata: Metadata = {
  title: siteCopy.en.nav.about,
  description: siteCopy.en.about.intro,
};

export default function Page() {
  return <AboutPage />;
}
