import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection } from "@/components/animated-section";
import { CTABanner } from "@/components/cta-banner";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StationMap } from "@/components/station-map-loader";
import { stationStats, stations } from "@/lib/data/stations";

export const metadata: Metadata = {
  title: "Stations de charge",
  description:
    "Carte du réseau de stations de charge et de battery swapping IVOLT en Côte d'Ivoire et en Afrique de l'Ouest.",
};

const stats = stationStats();

export default function StationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réseau de stations"
        title="La charge et le swap, jamais loin de vous."
        description="Un réseau qui grandit dans toute l'Afrique de l'Ouest — recharge rapide pour véhicules, points de swap pour motos."
        tone="jade"
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div>
            <div className="font-display font-extrabold text-3xl">{stats.totalStations}</div>
            <div className="text-xs text-ink-light-muted mt-1">Stations au total</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl">{stats.activeStations}</div>
            <div className="text-xs text-ink-light-muted mt-1">Déjà en service</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl">{stats.cities}</div>
            <div className="text-xs text-ink-light-muted mt-1">Villes couvertes</div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl">{stats.countries}</div>
            <div className="text-xs text-ink-light-muted mt-1">Pays d&apos;Afrique de l&apos;Ouest</div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <StationMap />
        </AnimatedSection>
      </section>

      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <AnimatedSection>
            <Eyebrow tone="jade">Liste des stations</Eyebrow>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl">Toutes les villes du réseau</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            {stations.map((s) => (
              <div key={s.id} className="flex items-center justify-between rounded-md border border-rule-light bg-pierre px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-ink-light-muted">{s.city}, {s.country} · {s.type}</div>
                </div>
                <span
                  className={`text-[11px] font-mono-data px-2 py-1 rounded-[3px] shrink-0 ml-3 ${
                    s.status === "En service" ? "bg-jade/15 text-jade" : "bg-ink-light-muted/15 text-ink-light-muted"
                  }`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Vous avez un terrain ou un commerce ?"
        title="Ouvrez une station IVOLT près de chez vous."
        description="Rejoignez le réseau en tant qu'opérateur local — investissement partagé, revenus récurrents."
        primaryHref="/devenir-partenaire"
        primaryLabel="Devenir opérateur de station"
      />
    </>
  );
}
