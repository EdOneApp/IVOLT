import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { swapSteps } from "@/lib/data/plans";
import { stationStats } from "@/lib/data/stations";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Battery swapping",
  description:
    "Échangez la batterie de votre moto électrique en moins de 3 minutes sur le réseau de swap IVOLT, sans attendre une charge complète.",
};

const stats = stationStats();

export default function SwappingPage() {
  return (
    <>
      <PageHero
        eyebrow="Battery swapping"
        title="Batterie à plat ? Échangez-la, ne l'attendez pas."
        description="Le battery swapping IVOLT vous permet d'échanger votre batterie de moto déchargée contre une pleine, en moins de 3 minutes, sans rendez-vous."
        tone="jade"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <AnimatedSection className="relative aspect-[4/3] rounded-md overflow-hidden order-2 lg:order-1">
          <Image src={img.chargePlug1} alt="Point de swap batterie IVOLT" fill unoptimized className="object-cover" />
        </AnimatedSection>
        <AnimatedSection className="order-1 lg:order-2">
          <Eyebrow tone="jade">Comment ça marche</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-balance">
            Quatre étapes, trois minutes.
          </h2>
          <StaggerGroup className="flex flex-col gap-5 mt-8">
            {swapSteps.map((s) => (
              <StaggerItem key={s.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade text-white font-mono-data font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base">{s.title}</h3>
                  <p className="text-sm text-ink-light-muted mt-0.5">{s.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </AnimatedSection>
      </section>

      <section className="bg-nuit relative overflow-hidden">
        <div className="absolute inset-0 glow-corner pointer-events-none" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-24 relative text-center">
          <AnimatedSection>
            <Eyebrow tone="jade" className="justify-center">Le réseau</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink-dark text-balance">
              Disponible dans toute la Côte d&apos;Ivoire.
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto">
              <div>
                <div className="font-display font-extrabold text-3xl text-ink-dark">{stats.totalStations}</div>
                <div className="text-xs text-ink-dark-muted mt-1">Stations</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-ink-dark">{stats.totalSlots}+</div>
                <div className="text-xs text-ink-dark-muted mt-1">Emplacements</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-ink-dark">&lt; 3 min</div>
                <div className="text-xs text-ink-dark-muted mt-1">Par échange</div>
              </div>
            </div>
            <div className="mt-8">
              <Button href="/stations">Voir la carte complète</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        eyebrow="Compatible avec toutes nos motos"
        title="Chaque moto IVOLT est conçue pour le swap."
        description="Batterie amovible standardisée, compatible avec l'ensemble du réseau de stations."
        primaryHref="/motos"
        primaryLabel="Voir les motos électriques"
      />
    </>
  );
}
