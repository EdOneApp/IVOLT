import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { borneOffers } from "@/lib/data/plans";
import { fcfa } from "@/lib/format";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bornes de recharge",
  description:
    "Installation de bornes de recharge électrique résidentielles, commerciales et pour flottes par IVOLT en Côte d'Ivoire.",
};

export default function BornesPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation de bornes"
        title="Rechargez chez vous, à votre rythme, en toute sécurité."
        description="Nos équipes étudient votre installation électrique et posent une borne adaptée à votre usage — résidentiel, commercial ou flotte."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection className="relative aspect-[4/3] rounded-md overflow-hidden">
          <Image src={img.chargePlug2} alt="Installation de borne de recharge IVOLT" fill unoptimized className="object-cover" />
        </AnimatedSection>
        <AnimatedSection>
          <Eyebrow>Pourquoi installer une borne</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Jusqu&apos;à 6 fois plus rapide qu&apos;une prise classique.
          </h2>
          <p className="text-ink-light-muted mt-4">
            Une prise domestique standard charge lentement et s&apos;use avec un
            usage intensif. Une borne dédiée recharge plus vite, en sécurité, et
            peut être supervisée à distance pour les professionnels.
          </p>
          <div className="flex items-center gap-2.5 mt-6 text-sm font-semibold">
            <Clock size={16} className="text-or" />
            Installation en 3 jours à 8 semaines selon le type
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <AnimatedSection className="max-w-2xl">
            <Eyebrow>Nos offres</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
              Du particulier à la flotte professionnelle.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {borneOffers.map((o) => (
              <AnimatedSection key={o.slug} className="rounded-md border border-rule-light bg-pierre p-6 flex flex-col">
                <h3 className="font-display font-bold text-xl">{o.name}</h3>
                <p className="text-sm text-ink-light-muted mt-1">{o.power}</p>
                <div className="font-display font-extrabold text-2xl mt-4">
                  À partir de {fcfa(o.priceFrom)}
                </div>
                <div className="text-xs text-ink-light-muted mt-1">Pose : {o.installDelay}</div>
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
        eyebrow="Entreprise ou copropriété ?"
        title="Dimensionnons votre installation ensemble."
        description="Nos ingénieurs étudient votre réseau électrique et votre usage réel avant tout chiffrage."
        secondaryHref="/contact"
        secondaryLabel="Parler à un ingénieur"
      />
    </>
  );
}
