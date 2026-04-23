import type { SiteContent } from "@/content/site";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-end">
          <div>
            <p className="font-display text-3xl">{content.brand}</p>
            <p className="mt-2 text-sm opacity-60">{content.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-6 md:justify-center">
            {content.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group relative text-sm uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.2em] opacity-50 md:text-right">
            © {new Date().getFullYear()} {content.brand}. {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
