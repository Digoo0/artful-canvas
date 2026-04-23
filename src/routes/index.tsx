import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Philosophy } from "@/components/site/Philosophy";
import { Gallery } from "@/components/site/Gallery";
import { Invite } from "@/components/site/Invite";
import { BookingForm } from "@/components/site/BookingForm";
import { Footer } from "@/components/site/Footer";
import { site } from "@/content/site";

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
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Manifesto />
      <Philosophy />
      <Gallery />
      <Invite />
      <BookingForm />
      <Footer />
    </main>
  );
}
