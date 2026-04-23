import type { SiteContent } from "@/content/site";
import { Reveal } from "./Reveal";

export function Philosophy({ content }: { content: SiteContent }) {
  return (
    <section id="filosofia" className="bg-secondary py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {content.philosophy.eyebrow}
              </p>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                {content.philosophy.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 overflow-hidden rounded-3xl">
                <img
                  src={content.philosophy.image}
                  alt={content.philosophy.imageAlt}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:pt-[17.5rem] lg:pt-[18.5rem]">
            <Reveal delay={150}>
              <div className="space-y-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
                {content.philosophy.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
