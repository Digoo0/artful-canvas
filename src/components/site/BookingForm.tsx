import { useState } from "react";
import type { SiteContent } from "@/content/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function BookingForm({ content }: { content: SiteContent }) {
  const [sent, setSent] = useState(false);

  return (
    <section id="agendar" className="bg-background py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            {content.form.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            {content.form.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
            {content.form.subtitle}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-14 space-y-8"
          >
            <Field label={content.form.fields.name} name="name" type="text" required />
            <Field label={content.form.fields.contact} name="contact" type="text" required />
            <Field
              label={content.form.fields.idea}
              name="idea"
              textarea
              required
            />

            <button
              type="submit"
              disabled={sent}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm uppercase tracking-[0.18em] text-background transition-all hover:gap-4 disabled:opacity-60"
            >
              <span>{sent ? content.form.sent : content.form.submit}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "peer w-full bg-transparent border-b border-border pt-7 pb-3 text-base outline-none transition-colors placeholder-transparent focus:border-foreground";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder={label}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={cls}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-1 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-foreground"
      >
        {label}
      </label>
    </div>
  );
}
