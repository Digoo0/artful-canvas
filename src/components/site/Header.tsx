import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="font-display text-xl tracking-tight">
          {site.brand}
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#manifesto" className="opacity-80 hover:opacity-100 transition">
            Manifesto
          </a>
          <a href="#filosofia" className="opacity-80 hover:opacity-100 transition">
            Filosofia
          </a>
          <a href="#obras" className="opacity-80 hover:opacity-100 transition">
            Obras
          </a>
          <a href="#agendar" className="opacity-80 hover:opacity-100 transition">
            Agendar
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
