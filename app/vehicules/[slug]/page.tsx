import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Battery, Gauge, Timer, Users, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTABanner } from "@/components/cta-banner";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles, getVehicleBySlug } from "@/lib/data/vehicles";
import { fcfa } from "@/lib/format";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.brand} ${vehicle.model}`,
    description: vehicle.description,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const related = vehicles.filter((v) => v.slug !== vehicle.slug).slice(0, 3);

  return (
    <>
      <section className="bg-nuit relative overflow-hidden">
        <div className="absolute inset-0 glow-corner pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 pb-16 md:pb-20 relative">
          <AnimatedSection>
            <Link href="/vehicules" className="text-sm text-ink-dark-muted hover:text-or transition-colors">
              ← Tous les véhicules
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center mt-8">
              <div>
                <Eyebrow>{vehicle.brand} · {vehicle.category}</Eyebrow>
                <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink-dark leading-[1.0] text-balance">
                  {vehicle.model}
                </h1>
                <p className="text-ink-dark-muted mt-4 text-lg max-w-md">{vehicle.tagline}</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button href="/devis">Demander un devis</Button>
                  <Button href="/location" variant="ghost-dark">
                    Voir le paiement échelonné
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} fill unoptimized className="object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-md border border-rule-light p-5">
            <Gauge className="text-or" size={20} />
            <div className="font-display font-bold text-2xl mt-3">{vehicle.range} km</div>
            <div className="text-xs text-ink-light-muted mt-1">Autonomie</div>
          </div>
          <div className="rounded-md border border-rule-light p-5">
            <Battery className="text-jade" size={20} />
            <div className="font-display font-bold text-2xl mt-3">{vehicle.battery} kWh</div>
            <div className="text-xs text-ink-light-muted mt-1">Capacité batterie</div>
          </div>
          <div className="rounded-md border border-rule-light p-5">
            <Timer className="text-indigo" size={20} />
            <div className="font-display font-bold text-2xl mt-3">{vehicle.topSpeed} km/h</div>
            <div className="text-xs text-ink-light-muted mt-1">Vitesse max</div>
          </div>
          <div className="rounded-md border border-rule-light p-5">
            <Users className="text-or" size={20} />
            <div className="font-display font-bold text-2xl mt-3">{vehicle.seats} places</div>
            <div className="text-xs text-ink-light-muted mt-1">Capacité</div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 mt-16">
          <AnimatedSection className="lg:col-span-2">
            <h2 className="font-display font-bold text-2xl">À propos de ce modèle</h2>
            <p className="text-ink-light-muted mt-4 leading-relaxed">{vehicle.description}</p>

            <h3 className="font-display font-bold text-lg mt-8 mb-3">Points forts</h3>
            <ul className="flex flex-col gap-2.5">
              {vehicle.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink-light-muted">
                  <CheckCircle2 size={16} className="text-jade shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="font-display font-bold text-lg mt-8 mb-3">Temps de charge</h3>
            <p className="text-sm text-ink-light-muted font-mono-data">{vehicle.chargeTime}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {vehicle.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] rounded-md overflow-hidden">
                  <Image src={src} alt={`${vehicle.model} — photo`} fill unoptimized className="object-cover" />
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-md border border-rule-light bg-pierre-2 p-6 sticky top-24">
              <div className="text-xs text-ink-light-muted">À partir de</div>
              <div className="font-display font-extrabold text-3xl mt-1">{fcfa(vehicle.priceFrom)}</div>
              <div className="text-xs text-ink-light-muted mt-4">Ou en paiement échelonné</div>
              <div className="font-display font-extrabold text-xl text-jade mt-1">
                {fcfa(vehicle.priceLeaseFrom)}
                <span className="text-sm font-body font-normal text-ink-light-muted"> / mois</span>
              </div>
              <div className="text-xs text-ink-light-muted mt-4 pt-4 border-t border-rule-light">
                Disponibilité
              </div>
              <div className="text-sm font-semibold mt-1">{vehicle.availability}</div>
              <div className="flex flex-col gap-2 mt-6">
                <Button href="/devis" className="w-full">
                  Demander un devis <ArrowRight size={16} />
                </Button>
                <Button href="/contact" variant="ghost-light" className="w-full">
                  Parler à un conseiller
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-pierre-2 border-t border-rule-light">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <AnimatedSection>
              <Eyebrow>Autres modèles</Eyebrow>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl">Qui pourraient aussi vous intéresser</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {related.map((v, i) => (
                <VehicleCard key={v.slug} vehicle={v} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        eyebrow="Prêt à passer à l'électrique ?"
        title={`Essayez la ${vehicle.model} à Abidjan.`}
        description="Nos conseillers organisent un essai dans votre commune sous 48h."
        primaryHref="/devis"
        primaryLabel="Demander un essai"
      />
    </>
  );
}
