import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-background py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl text-balance">
            {site.manifesto.title}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.manifesto.paragraphs.map((p, i) => (
              <p key={i} className="text-balance">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-14 flex justify-center">
            <CtaButton variant="solid">{site.ctaLabel}</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
