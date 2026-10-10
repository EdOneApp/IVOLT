import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MotoCard } from "@/components/moto-card";
import { CTABanner } from "@/components/cta-banner";
import { AnimatedSection } from "@/components/animated-section";
import { motos } from "@/lib/data/motos";

export const metadata: Metadata = {
  title: "Motos électriques",
  description:
    "Catalogue de motos électriques IVOLT : urbaines, livraison, VTC et cargo. Batterie échangeable sur le réseau de swap, paiement échelonné disponible.",
};

export default function MotosPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue motos"
        title="Une moto électrique pour chaque usage, chaque jour."
        description="Toutes nos motos sont compatibles avec le réseau de battery swapping IVOLT : plus besoin d'attendre une charge, échangez votre batterie en 3 minutes."
        tone="jade"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <AnimatedSection className="flex flex-wrap items-center justify-between gap-4 mb-4 text-sm text-ink-light-muted">
          <p>{motos.length} modèles disponibles · Batterie amovible compatible réseau de swap</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motos.map((m, i) => (
            <MotoCard key={m.slug} moto={m} index={i} />
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Flotte professionnelle"
        title="Équipez votre flotte de livraison ou de taxi-moto."
        description="Tarifs dégressifs à partir de 5 motos, financement partenaire disponible."
        primaryHref="/devenir-partenaire"
        primaryLabel="Programme flotte"
        secondaryHref="/devis"
        secondaryLabel="Demander un devis"
      />
    </>
  );
}
