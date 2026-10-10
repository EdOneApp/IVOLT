import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { VehicleCard } from "@/components/vehicle-card";
import { CTABanner } from "@/components/cta-banner";
import { AnimatedSection } from "@/components/animated-section";
import { vehicles } from "@/lib/data/vehicles";

export const metadata: Metadata = {
  title: "Véhicules électriques",
  description:
    "Catalogue de véhicules électriques IVOLT : citadines, SUV et berlines. Achat ou location avec paiement échelonné, disponibles à Abidjan.",
};

export default function VehiculesPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue véhicules"
        title="Des véhicules électriques pensés pour l'Afrique de l'Ouest."
        description="Citadines, SUV et berlines sélectionnées pour leur fiabilité, leur autonomie réelle et leur coût d'entretien quasi nul. Achetez comptant ou optez pour la location avec paiement échelonné."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <AnimatedSection className="flex flex-wrap items-center justify-between gap-4 mb-4 text-sm text-ink-light-muted">
          <p>{vehicles.length} modèles disponibles · Livraison et essai à Abidjan</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} index={i} />
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Financement"
        title="Pas besoin de payer comptant."
        description="Nos véhicules sont aussi disponibles en location avec paiement échelonné — un peu, un peu, à votre rythme."
        primaryHref="/location"
        primaryLabel="Voir le paiement échelonné"
        secondaryHref="/devis"
        secondaryLabel="Demander un devis"
      />
    </>
  );
}
