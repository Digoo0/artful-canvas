import { ThemeToggle } from "./ThemeToggle";
import type { Language, SiteContent } from "@/content/site";

export function Header({
  content,
  language,
  onLanguageChange,
}: {
  content: SiteContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="font-display text-xl tracking-tight">
          {content.brand}
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#manifesto" className="opacity-80 hover:opacity-100 transition">
            {content.nav.manifesto}
          </a>
          <a href="#filosofia" className="opacity-80 hover:opacity-100 transition">
            {content.nav.philosophy}
          </a>
          <a href="#obras" className="opacity-80 hover:opacity-100 transition">
            {content.nav.works}
          </a>
          <a href="#agendar" className="opacity-80 hover:opacity-100 transition">
            {content.nav.book}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-border/60 bg-background/40 p-1 backdrop-blur">
            <button
              type="button"
              onClick={() => onLanguageChange("pt")}
              className={`rounded-full px-3 py-1 text-xs tracking-[0.12em] transition-colors ${language === "pt" ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"}`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`rounded-full px-3 py-1 text-xs tracking-[0.12em] transition-colors ${language === "en" ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"}`}
            >
              EN
            </button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
