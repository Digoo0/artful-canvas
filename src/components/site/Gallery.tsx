import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="obras" className="bg-background py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {site.gallery.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
                {site.gallery.title}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Cada peça carrega uma história. Um arquivo vivo de presença,
              escuta e símbolo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {site.gallery.items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="hover-zoom group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 px-6 pb-6 text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-[0.3em]">
                    {item.alt}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
