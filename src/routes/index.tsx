import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Philosophy } from "@/components/site/Philosophy";
import { Gallery } from "@/components/site/Gallery";
import { Invite } from "@/components/site/Invite";
import { BookingForm } from "@/components/site/BookingForm";
import { Footer } from "@/components/site/Footer";
import { site, siteByLanguage, type Language } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.brand} — ${site.tagline}` },
      {
        name: "description",
        content: site.hero.headline,
      },
      { property: "og:title", content: `${site.brand} — ${site.tagline}` },
      { property: "og:description", content: site.hero.headline },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("site-language");
    if (storedLanguage === "pt" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const content = siteByLanguage[language];

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Header content={content} language={language} onLanguageChange={setLanguage} />
      <Hero content={content} />
      <Manifesto content={content} />
      <Philosophy content={content} />
      <Gallery content={content} />
      <Invite content={content} />
      <BookingForm content={content} />
      <Footer content={content} />
    </main>
  );
}
