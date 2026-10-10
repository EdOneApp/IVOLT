import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection } from "@/components/animated-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DevisForm } from "@/components/forms/devis-form";

export const metadata: Metadata = {
  title: "Demande de devis",
  description:
    "Demandez votre devis personnalisé IVOLT : véhicule, moto, location, borne de recharge ou panneaux solaires. Réponse sous 24h.",
};

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Devis personnalisé"
        title="Dites-nous ce qu'il vous faut."
        description="Véhicule, moto, location avec paiement échelonné, borne de recharge ou kit solaire — un seul formulaire, une réponse sous 24h ouvrées."
      />

      <section className="max-w-2xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <AnimatedSection>
          <Eyebrow>Votre demande</Eyebrow>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8">
            Quelques informations pour démarrer.
          </h2>
          <DevisForm />
        </AnimatedSection>
      </section>
    </>
  );
}
