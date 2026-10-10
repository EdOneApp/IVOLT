import type { Metadata } from "next";
import Image from "next/image";
import { Target, Leaf, Users2, Award } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "IVOLT est une entreprise ivoirienne de mobilité électrique et d'énergie — véhicules, motos, stations de charge, swapping et solaire.",
};

const values = [
  { icon: Target, title: "Accessibilité", desc: "Rendre l'électrique accessible dès aujourd'hui, pas dans dix ans — paiement échelonné, prix justes." },
  { icon: Leaf, title: "Impact réel", desc: "Chaque moto et véhicule IVOLT remplace un équivalent thermique polluant sur les routes d'Abidjan." },
  { icon: Users2, title: "Ancrage local", desc: "Une équipe ivoirienne, un réseau pensé pour les réalités du terrain ouest-africain." },
  { icon: Award, title: "Exigence", desc: "Véhicules et motos sélectionnés pour leur fiabilité réelle, pas seulement leur fiche technique." },
];

const team = [
  { name: "Aya N'Guessan", role: "Directrice Générale", photo: img.portraitWoman1 },
  { name: "Kouadio Brou", role: "Directeur des Opérations", photo: img.portraitMan1 },
  { name: "Fatou Diabaté", role: "Directrice Énergie & Solaire", photo: img.portraitWoman2 },
  { name: "Yves Kouassi", role: "Directeur Réseau & Stations", photo: img.portraitMan2 },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos d'IVOLT"
        title="Nous construisons l'énergie électrique de l'Afrique de demain."
        description="Née à Abidjan, IVOLT réunit mobilité électrique et énergie solaire dans une seule marque, pour rendre la transition accessible à tous — particuliers, chauffeurs, commerçants et entreprises."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection>
          <Eyebrow>Notre histoire</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            D&apos;un constat simple à un écosystème complet.
          </h2>
          <p className="text-ink-light-muted mt-5 leading-relaxed">
            À Abidjan, des milliers de motos et véhicules thermiques circulent
            chaque jour, avec un coût d&apos;usage élevé et une dépendance totale
            aux carburants importés. IVOLT est née d&apos;une conviction : l&apos;électrique
            n&apos;est pas un luxe réservé à quelques-uns, mais une solution plus
            économique sur la durée — à condition de lever la barrière du prix
            d&apos;entrée et de résoudre l&apos;angoisse de la recharge.
          </p>
          <p className="text-ink-light-muted mt-4 leading-relaxed">
            C&apos;est pourquoi nous avons construit un écosystème complet :
            véhicules et motos, paiement échelonné, VTC et livraison pour
            générer des revenus avec nos propres produits, et un réseau de
            charge et de swapping pour lever l&apos;angoisse de l&apos;autonomie.
            Le solaire et les bornes de recharge complètent la boucle, pour
            une énergie produite localement.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={img.teamOffice1} alt="Équipe IVOLT à Abidjan" fill unoptimized className="object-cover" />
        </AnimatedSection>
      </section>

      <section className="bg-nuit relative overflow-hidden">
        <div className="absolute inset-0 glow-corner pointer-events-none" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20 relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection className="contents">
            <div>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink-dark">2023</div>
              <div className="text-xs text-ink-dark-muted mt-1">Année de création</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink-dark">9</div>
              <div className="text-xs text-ink-dark-muted mt-1">Villes couvertes</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink-dark">60+</div>
              <div className="text-xs text-ink-dark-muted mt-1">Collaborateurs</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink-dark">5</div>
              <div className="text-xs text-ink-dark-muted mt-1">Pays visés d&apos;ici 2027</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <AnimatedSection className="max-w-2xl">
          <Eyebrow>Nos valeurs</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Ce qui guide chacune de nos décisions.
          </h2>
        </AnimatedSection>
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-[4px] bg-or/15 text-or">
                <v.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-lg mt-4">{v.title}</h3>
              <p className="text-sm text-ink-light-muted mt-1.5">{v.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection className="max-w-2xl">
            <Eyebrow>L&apos;équipe de direction</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
              Une équipe ivoirienne, des parcours pluriels.
            </h2>
          </AnimatedSection>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((t) => (
              <StaggerItem key={t.name}>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image src={t.photo} alt={t.name} fill unoptimized className="object-cover" />
                </div>
                <h3 className="font-display font-bold text-base mt-3">{t.name}</h3>
                <p className="text-sm text-ink-light-muted">{t.role}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTABanner
        eyebrow="Rejoignez l'aventure"
        title="Nous recrutons à Abidjan et dans nos futures villes."
        description="Techniciens, ingénieurs, conseillers, chauffeurs partenaires — écrivez-nous."
        primaryHref="/contact"
        primaryLabel="Nous contacter"
      />
    </>
  );
}
