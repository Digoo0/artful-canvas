import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-end">
          <div>
            <p className="font-display text-3xl">{site.brand}</p>
            <p className="mt-2 text-sm opacity-60">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-6 md:justify-center">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group relative text-sm uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cream transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.2em] opacity-50 md:text-right">
            © {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
