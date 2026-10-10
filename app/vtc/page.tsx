import type { Metadata } from "next";
import Image from "next/image";
import { Smartphone, MapPin, Leaf, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { vtcTariffs } from "@/lib/data/plans";
import { fcfa } from "@/lib/format";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "VTC électrique",
  description:
    "Réservez une course VTC 100% électrique avec IVOLT à Abidjan : silencieuse, sans émissions, tarifs transparents.",
};

const perks = [
  { icon: Leaf, title: "Zéro émission", desc: "Chaque course évite environ 180g de CO₂ par km comparé à un véhicule essence." },
  { icon: ShieldCheck, title: "Chauffeurs vérifiés", desc: "Identité, permis et véhicule contrôlés avant intégration à la flotte." },
  { icon: Smartphone, title: "Réservation simple", desc: "Commandez votre course en quelques secondes, suivi en temps réel." },
];

export default function VtcPage() {
  return (
    <>
      <PageHero
        eyebrow="VTC électrique"
        title="Une course silencieuse, propre, et au juste prix."
        description="IVOLT VTC déploie une flotte 100% électrique à Abidjan. Tarifs transparents, chauffeurs vérifiés, zéro émission à l'usage."
        tone="indigo"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={img.driverWheel} alt="Chauffeur VTC IVOLT" fill unoptimized priority className="object-cover" />
        </AnimatedSection>
        <AnimatedSection>
          <Eyebrow tone="indigo">Pourquoi IVOLT VTC</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            La mobilité électrique, enfin à portée de course.
          </h2>
          <StaggerGroup className="flex flex-col gap-6 mt-8">
            {perks.map((p) => (
              <StaggerItem key={p.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-indigo/15 text-indigo">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-ink-light-muted mt-1">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </AnimatedSection>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection className="text-center max-w-xl mx-auto">
            <Eyebrow tone="indigo" className="justify-center">Tarifs</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
              Une grille simple, sans surprise.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            <div className="rounded-md border border-rule-light bg-pierre p-6 text-center">
              <div className="text-xs text-ink-light-muted">Prise en charge</div>
              <div className="font-display font-extrabold text-2xl mt-1">{fcfa(vtcTariffs.base)}</div>
            </div>
            <div className="rounded-md border border-rule-light bg-pierre p-6 text-center">
              <div className="text-xs text-ink-light-muted">Par kilomètre</div>
              <div className="font-display font-extrabold text-2xl mt-1">{fcfa(vtcTariffs.perKm)}</div>
            </div>
            <div className="rounded-md border border-rule-light bg-pierre p-6 text-center">
              <div className="text-xs text-ink-light-muted">Course minimum</div>
              <div className="font-display font-extrabold text-2xl mt-1">{fcfa(vtcTariffs.minFare)}</div>
            </div>
          </div>

          <div className="mt-8 rounded-md border border-rule-light divide-y divide-rule-light overflow-hidden">
            {vtcTariffs.zones.map((z) => (
              <div key={z.name} className="flex items-center justify-between px-5 py-3.5 bg-pierre">
                <div className="flex items-center gap-2.5 text-sm font-semibold">
                  <MapPin size={15} className="text-indigo" />
                  {z.name}
                </div>
                <div className="font-mono-data text-sm text-ink-light-muted">×{z.multiplier}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Rejoignez la flotte"
        title="Chauffeur VTC ? Passez à l'électrique sans investissement initial."
        description="Location avec paiement échelonné, maintenance incluse, accès prioritaire au réseau de charge."
        primaryHref="/devenir-partenaire"
        primaryLabel="Devenir chauffeur partenaire"
        secondaryHref="/devis"
        secondaryLabel="Demander un devis"
      />
    </>
  );
}
