import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-ink text-cream"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0.5px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-12 md:gap-16 md:px-10 md:pt-40">
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.4em] opacity-60">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-7xl lg:text-[7.5rem]">
              {site.hero.name}
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-10 max-w-md text-lg leading-relaxed opacity-80 md:text-xl text-balance">
              {site.hero.headline}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12">
              <CtaButton variant="light">{site.ctaLabel}</CtaButton>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 lg:col-span-7">
          <Reveal delay={200}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-soft shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] md:aspect-[5/6]">
              <img
                src={site.hero.image}
                alt={site.hero.imageAlt}
                width={896}
                height={1184}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] opacity-50">
        Role para descobrir
      </div>
    </section>
  );
}
