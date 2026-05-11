import type { Metadata } from "next";
import { siteCopy, siteUrl } from "@/data/site";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { LanguageProvider } from "./_components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteCopy.en.title,
    template: `%s | ${siteCopy.en.title}`,
  },
  description: siteCopy.en.description,
  openGraph: {
    description: siteCopy.en.description,
    images: ["/images/optimized/cover.png"],
    siteName: siteCopy.en.title,
    title: siteCopy.en.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: siteCopy.en.description,
    images: ["/images/optimized/cover.png"],
    title: siteCopy.en.title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="min-h-screen bg-cream text-ink">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
