import { ReactNode } from "react";
import { AnimatedSection } from "@/components/animated-section";

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "or",
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "or" | "jade" | "indigo";
  children?: ReactNode;
}) {
  const eyebrowColor = { or: "text-or", jade: "text-jade", indigo: "text-indigo" }[tone];

  return (
    <section className="bg-nuit relative overflow-hidden">
      <div className="absolute inset-0 glow-corner pointer-events-none" />
      <div className="max-w-5xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-16 md:pb-20 relative">
        <AnimatedSection>
          <p className={`font-mono-data text-xs uppercase tracking-[0.14em] mb-4 ${eyebrowColor}`}>
            {eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink-dark leading-[1.0] text-balance max-w-3xl">
            {title}
          </h1>
          <p className="text-ink-dark-muted mt-5 max-w-xl text-lg">{description}</p>
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}
