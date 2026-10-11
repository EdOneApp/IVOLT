import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AmbientSparks } from "@/components/ambient-sparks";

export function CTABanner({
  eyebrow,
  title,
  description,
  primaryHref = "/devis",
  primaryLabel = "Demander un devis",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-nuit relative overflow-hidden">
      <div className="absolute inset-0 glow-corner pointer-events-none" />
      <AmbientSparks count={14} seed={9} />
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center relative">
        <AnimatedSection>
          <p className="font-mono-data text-xs uppercase tracking-[0.14em] text-or mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink-dark leading-[1.05] text-balance">
            {title}
          </h2>
          <p className="text-ink-dark-muted mt-5 max-w-xl mx-auto">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="ghost-dark">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
