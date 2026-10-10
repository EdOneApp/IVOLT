import type { Metadata } from "next";
import { Store, Truck, Handshake, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PartnerForm } from "@/components/forms/partner-form";
import { partnerTracks } from "@/lib/data/plans";

export const metadata: Metadata = {
  title: "Devenir partenaire",
  description:
    "Rejoignez le réseau IVOLT : ouvrez une station, intégrez votre flotte, devenez revendeur ou installateur certifié.",
};

const icons = [Store, Truck, Handshake, Wrench];

export default function PartenairePage() {
  return (
    <>
      <PageHero
        eyebrow="Devenir partenaire"
        title="Construisez le réseau IVOLT avec nous."
        description="Quatre façons de rejoindre l'aventure, selon votre activité et vos ambitions. Un seul formulaire pour démarrer la conversation."
        tone="indigo"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <StaggerGroup className="grid sm:grid-cols-2 gap-6">
          {partnerTracks.map((t, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={t.slug} className="rounded-md border border-rule-light bg-pierre-2 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-indigo/15 text-indigo">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-xl mt-4">{t.title}</h3>
                <p className="text-sm text-ink-light-muted mt-2">{t.summary}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-2xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection>
            <Eyebrow tone="indigo">Candidature</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance mb-8">
              Parlez-nous de votre projet.
            </h2>
            <PartnerForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
