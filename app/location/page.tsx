import type { Metadata } from "next";
import { CheckCircle2, Wallet, CalendarClock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LeaseSimulator } from "@/components/lease-simulator";

export const metadata: Metadata = {
  title: "Location & paiement échelonné",
  description:
    "Louez un véhicule ou une moto électrique IVOLT avec paiement échelonné — payez un peu, un peu, à votre rythme. Simulateur en ligne.",
};

const steps = [
  { icon: Wallet, title: "Choisissez votre apport", desc: "De 0% à 50% du prix du véhicule ou de la moto, selon votre budget." },
  { icon: CalendarClock, title: "Payez à votre rythme", desc: "Mensualités pour les véhicules, règlement journalier pour les motos." },
  { icon: ShieldCheck, title: "Devenez propriétaire", desc: "À la fin du contrat, le véhicule ou la moto vous appartient." },
];

const included = [
  "Garantie batterie incluse sur toute la durée du contrat",
  "Entretien préventif annuel inclus",
  "Assistance dépannage 7j/7",
  "Accès prioritaire au réseau de charge et de swap IVOLT",
  "Possibilité de remboursement anticipé sans pénalité après 12 mois",
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Paiement échelonné"
        title="Payez un peu, un peu — roulez électrique dès aujourd'hui."
        description="Pas besoin d'épargner pendant des années. Nos plans de location avec paiement échelonné rendent le passage à l'électrique accessible, que vous soyez particulier, chauffeur VTC ou livreur."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-start">
        <AnimatedSection>
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Trois étapes, aucun jargon bancaire.
          </h2>

          <StaggerGroup className="flex flex-col gap-6 mt-10">
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-or/15 text-or font-mono-data font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-ink-light-muted mt-1">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <h3 className="font-display font-bold text-lg mt-12 mb-4">Toujours inclus</h3>
          <ul className="flex flex-col gap-2.5">
            {included.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-ink-light-muted">
                <CheckCircle2 size={16} className="text-jade shrink-0 mt-0.5" />
                {i}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Eyebrow tone="jade">Simulateur</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance mb-6">
            Estimez votre mensualité.
          </h2>
          <LeaseSimulator />
        </AnimatedSection>
      </section>

      <CTABanner
        eyebrow="Besoin d'un plan sur mesure ?"
        title="Un conseiller peut ajuster votre plan en fonction de vos revenus."
        description="Chauffeur VTC, livreur, commerçant ou particulier — nous adaptons la durée et l'apport à votre situation."
        secondaryHref="/contact"
        secondaryLabel="Parler à un conseiller"
      />
    </>
  );
}
