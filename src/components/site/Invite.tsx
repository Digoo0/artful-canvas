import { site } from "@/content/site";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function Invite() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream py-32 md:py-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, white 0.5px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] opacity-60">
            Convite
          </p>
          <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl text-balance">
            {site.invite.title}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl text-balance">
            {site.invite.body}
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-14 flex justify-center">
            <CtaButton variant="light" href="#agendar">
              {site.ctaLabel}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
