import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Sun, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { solarOffers } from "@/lib/data/plans";
import { fcfa } from "@/lib/format";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Panneaux solaires",
  description:
    "Installation de panneaux solaires résidentiels et professionnels par IVOLT en Côte d'Ivoire — produisez votre propre énergie.",
};

export default function SolairePage() {
  return (
    <>
      <PageHero
        eyebrow="Panneaux solaires"
        title="Votre propre énergie, jour et nuit."
        description="Fini les coupures qui vous arrêtent en pleine journée. Nos kits solaires résidentiels et professionnels produisent et stockent votre énergie."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection className="relative aspect-[4/3] rounded-md overflow-hidden order-2 lg:order-1">
          <Image src={img.solarWorker1} alt="Installation de panneaux solaires IVOLT" fill unoptimized className="object-cover" />
        </AnimatedSection>
        <AnimatedSection className="order-1 lg:order-2">
          <Eyebrow>Pourquoi passer au solaire</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Un investissement qui se rembourse en 4 à 5 ans.
          </h2>
          <div className="flex items-start gap-3 mt-6">
            <Sun size={18} className="text-or shrink-0 mt-0.5" />
            <p className="text-sm text-ink-light-muted">
              Production indépendante du réseau, idéale face aux coupures fréquentes.
            </p>
          </div>
          <div className="flex items-start gap-3 mt-3">
            <TrendingUp size={18} className="text-jade shrink-0 mt-0.5" />
            <p className="text-sm text-ink-light-muted">
              Réduction immédiate de votre facture d&apos;électricité, suivi de production via application.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection className="max-w-2xl">
            <Eyebrow>Nos kits</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
              Du foyer au commerce, un kit pour chaque besoin.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {solarOffers.map((o) => (
              <AnimatedSection key={o.slug} className="rounded-md border border-rule-light bg-pierre p-6 flex flex-col">
                <h3 className="font-display font-bold text-xl">{o.name}</h3>
                <p className="text-sm text-ink-light-muted mt-1">{o.power}</p>
                <div className="font-display font-extrabold text-2xl mt-4">
                  À partir de {fcfa(o.priceFrom)}
                </div>
                <div className="text-xs text-ink-light-muted mt-1">Retour sur investissement : {o.payback}</div>
                <ul className="flex flex-col gap-2.5 mt-5 flex-1">
                  {o.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-light-muted">
                      <CheckCircle2 size={15} className="text-jade shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Button href="/devis" className="mt-6 w-full">
                  Demander un devis
                </Button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Solaire + recharge"
        title="Combinez panneaux solaires et borne de recharge."
        description="Rechargez votre véhicule ou votre moto directement avec votre énergie solaire."
        primaryHref="/bornes-de-recharge"
        primaryLabel="Voir les bornes de recharge"
      />
    </>
  );
}
