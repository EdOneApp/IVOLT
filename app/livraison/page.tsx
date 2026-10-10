import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Package, Store, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { livraisonTariffs } from "@/lib/data/plans";
import { fcfa } from "@/lib/format";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Livraison à moto électrique",
  description:
    "Service de livraison à moto électrique IVOLT à Abidjan : rapide, silencieux et sans essence. Pour particuliers et commerçants.",
};

const perks = [
  { icon: Clock, title: "Livraison rapide", desc: "15 à 60 min selon la distance, suivi en temps réel de votre coursier." },
  { icon: Package, title: "Tous types de colis", desc: "Documents, repas, courses, colis commerçants — jusqu'à 25 kg." },
  { icon: Store, title: "Forfaits commerçants", desc: "Tarifs dégressifs pour restaurateurs et e-commerçants réguliers." },
  { icon: ShieldCheck, title: "Coursiers assurés", desc: "Chaque livraison est couverte, colis comme responsabilité civile." },
];

export default function LivraisonPage() {
  return (
    <>
      <PageHero
        eyebrow="Livraison à moto électrique"
        title="Vos colis livrés, sans bruit et sans émissions."
        description="IVOLT Livraison connecte particuliers et commerçants à notre flotte de motos électriques, pour des livraisons rapides en ville."
        tone="indigo"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection>
          <Eyebrow tone="indigo">Pourquoi IVOLT Livraison</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Une flotte électrique dédiée à votre quotidien.
          </h2>
          <StaggerGroup className="grid sm:grid-cols-2 gap-6 mt-8">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-indigo/15 text-indigo">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mt-3">{p.title}</h3>
                <p className="text-sm text-ink-light-muted mt-1">{p.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={img.deliveryRider2} alt="Coursier IVOLT à moto électrique" fill unoptimized className="object-cover" />
        </AnimatedSection>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection className="text-center max-w-xl mx-auto">
            <Eyebrow tone="indigo" className="justify-center">Tarifs</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
              Simple pour vous, juste pour nos coursiers.
            </h2>
          </AnimatedSection>

          <div className="rounded-md border border-rule-light divide-y divide-rule-light overflow-hidden mt-12">
            {livraisonTariffs.map((t) => (
              <div key={t.label} className="flex items-center justify-between px-5 py-4 bg-pierre">
                <div>
                  <div className="text-sm font-semibold">{t.label}</div>
                  <div className="text-xs text-ink-light-muted mt-0.5">{t.delay}</div>
                </div>
                <div className="font-mono-data font-bold text-lg">{fcfa(t.price)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Livreur professionnel ?"
        title="Roulez électrique, gagnez plus sur chaque course."
        description="Coût au km jusqu'à 75% inférieur à l'essence. Location moto avec paiement échelonné disponible."
        primaryHref="/motos"
        primaryLabel="Voir les motos de livraison"
        secondaryHref="/devenir-partenaire"
        secondaryLabel="Devenir coursier partenaire"
      />
    </>
  );
}
