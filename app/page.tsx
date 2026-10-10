import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Car, Sun, BatteryCharging, Plug, Bike as MotoIcon, Truck } from "lucide-react";
import { ParticleField } from "@/components/webgl/particle-field";
import { AnimatedSection, StaggerGroup, StaggerItem } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Stat, StatDark } from "@/components/ui/stat";
import { VehicleCard } from "@/components/vehicle-card";
import { MotoCard } from "@/components/moto-card";
import { CTABanner } from "@/components/cta-banner";
import { vehicles } from "@/lib/data/vehicles";
import { motos } from "@/lib/data/motos";
import { stationStats } from "@/lib/data/stations";
import { img } from "@/lib/images";

const services = [
  { href: "/vehicules", icon: Car, title: "Véhicules électriques", desc: "Citadines, SUV et berlines — vente et location.", tone: "or" },
  { href: "/motos", icon: MotoIcon, title: "Motos électriques", desc: "Urbaines, livraison, VTC, cargo.", tone: "or" },
  { href: "/location", icon: Zap, title: "Paiement échelonné", desc: "Payez un peu, un peu — jour, semaine ou mois.", tone: "or" },
  { href: "/vtc", icon: Car, title: "VTC électrique", desc: "Réservez une course silencieuse et propre.", tone: "indigo" },
  { href: "/livraison", icon: Truck, title: "Livraison à moto", desc: "Rapide, fiable, pour particuliers et commerces.", tone: "indigo" },
  { href: "/stations", icon: Plug, title: "Stations de charge", desc: "Un réseau qui grandit dans toute l'Afrique de l'Ouest.", tone: "jade" },
  { href: "/swapping", icon: BatteryCharging, title: "Battery swapping", desc: "Batterie à plat ? Échangez-la en 3 minutes.", tone: "jade" },
  { href: "/bornes-de-recharge", icon: Plug, title: "Bornes de recharge", desc: "Installation résidentielle et commerciale.", tone: "jade" },
  { href: "/panneaux-solaires", icon: Sun, title: "Panneaux solaires", desc: "Produisez votre propre énergie, jour et nuit.", tone: "or" },
];

const toneClass: Record<string, string> = {
  or: "bg-or/15 text-or",
  jade: "bg-jade/15 text-jade",
  indigo: "bg-indigo/15 text-indigo",
};

export default function Home() {
  const stStats = stationStats();
  const featuredVehicles = vehicles.slice(0, 3);
  const featuredMotos = motos.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-nuit overflow-hidden min-h-[88vh] flex items-end">
        <ParticleField className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/40 to-nuit/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32 relative w-full">
          <AnimatedSection>
            <p className="font-mono-data text-xs uppercase tracking-[0.14em] text-or mb-5">
              IVOLT — Abidjan &amp; Afrique de l&apos;Ouest
            </p>
            <h1 className="font-display font-extrabold text-ink-dark text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
              L&apos;avenir de la mobilité en Afrique est déjà là.
            </h1>
            <p className="text-ink-dark-muted text-lg md:text-xl mt-6 max-w-xl">
              Véhicules et motos électriques, VTC, livraison, stations de charge,
              battery swapping, bornes et panneaux solaires — une seule marque pour
              toute votre énergie de demain.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <Button href="/vehicules">
                Voir les véhicules <ArrowRight size={16} />
              </Button>
              <Button href="/devis" variant="ghost-dark">
                Demander un devis
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={`${stStats.cities}`} label="Villes couvertes par le réseau" />
          <Stat value={`${stStats.countries}`} label="Pays d'Afrique de l'Ouest" />
          <Stat value={`${stStats.totalSlots}+`} label="Points de charge & swap" />
          <Stat value="< 3 min" label="Pour échanger une batterie" />
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <AnimatedSection className="max-w-2xl">
          <Eyebrow>Notre écosystème</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-balance">
            Tout ce qu&apos;il faut pour rouler et produire votre énergie électrique.
          </h2>
        </AnimatedSection>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="group block h-full rounded-md border border-rule-light bg-pierre-2 p-6 hover:border-ink-light-muted transition-colors"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-[4px] ${toneClass[s.tone]}`}>
                  <s.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mt-4">{s.title}</h3>
                <p className="text-sm text-ink-light-muted mt-1.5">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-sm font-semibold mt-4 text-ink-light group-hover:gap-2.5 transition-all">
                  Découvrir <ArrowRight size={14} />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Featured vehicles */}
      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <AnimatedSection className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Véhicules électriques</Eyebrow>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-balance">
                Le catalogue IVOLT, pensé pour Abidjan.
              </h2>
            </div>
            <Button href="/vehicules" variant="ghost-light">
              Tout le catalogue <ArrowRight size={16} />
            </Button>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {featuredVehicles.map((v, i) => (
              <VehicleCard key={v.slug} vehicle={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured motos */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <AnimatedSection className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Motos électriques</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-balance">
              Urbaines, livraison, VTC, cargo — une moto pour chaque usage.
            </h2>
          </div>
          <Button href="/motos" variant="ghost-light">
            Tout le catalogue <ArrowRight size={16} />
          </Button>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {featuredMotos.map((m, i) => (
            <MotoCard key={m.slug} moto={m} index={i} />
          ))}
        </div>
      </section>

      {/* Swapping / charging story */}
      <section className="bg-nuit relative overflow-hidden">
        <div className="absolute inset-0 glow-corner pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 relative grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <Eyebrow tone="jade">Battery swapping &amp; stations</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink-dark text-balance">
              Une batterie à plat ne vous arrête plus.
            </h2>
            <p className="text-ink-dark-muted mt-5 max-w-lg">
              Notre réseau de stations de charge et de swap s&apos;étend dans les
              grandes villes de Côte d&apos;Ivoire et au-delà. Échangez votre
              batterie de moto en moins de 3 minutes, sans rendez-vous.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <StatDark value={`${stStats.totalStations}`} label="Stations au total" />
              <StatDark value={`${stStats.activeStations}`} label="Déjà en service" />
              <StatDark value={`${stStats.totalSlots}+`} label="Emplacements de charge" />
            </div>
            <div className="flex flex-wrap gap-4 mt-9">
              <Button href="/stations">Voir la carte du réseau</Button>
              <Button href="/swapping" variant="ghost-dark">
                Comment fonctionne le swap
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="relative aspect-[4/3] rounded-md overflow-hidden">
            <Image src={img.stationCharger2} alt="Station de recharge IVOLT" fill unoptimized className="object-cover" />
          </AnimatedSection>
        </div>
      </section>

      {/* Solar */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection className="relative aspect-[4/3] rounded-md overflow-hidden order-2 lg:order-1">
          <Image src={img.solarRoofHouse} alt="Installation de panneaux solaires IVOLT" fill unoptimized className="object-cover" />
        </AnimatedSection>
        <AnimatedSection className="order-1 lg:order-2">
          <Eyebrow>Panneaux solaires &amp; bornes</Eyebrow>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-balance">
            Produisez votre énergie, rechargez sans dépendre du réseau.
          </h2>
          <p className="text-ink-light-muted mt-5 max-w-lg">
            Installation de panneaux solaires résidentiels et professionnels, et
            pose de bornes de recharge pour particuliers, entreprises et flottes.
            Nos équipes dimensionnent votre installation de A à Z.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Button href="/panneaux-solaires">Voir les kits solaires</Button>
            <Button href="/bornes-de-recharge" variant="ghost-light">
              Installer une borne
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Partner teaser */}
      <section className="bg-pierre-2 border-y border-rule-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <AnimatedSection className="max-w-2xl">
            <Eyebrow tone="indigo">Devenir partenaire</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-balance">
              Construisez le réseau IVOLT avec nous.
            </h2>
            <p className="text-ink-light-muted mt-5">
              Ouvrez une station, intégrez votre flotte, devenez revendeur ou
              installateur certifié. Un seul formulaire pour démarrer.
            </p>
            <div className="mt-8">
              <Button href="/devenir-partenaire">
                Voir les programmes partenaires <ArrowRight size={16} />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        eyebrow="Prêt à passer à l'électrique ?"
        title="Obtenez votre devis personnalisé en moins de 24h."
        description="Véhicule, moto, borne ou kit solaire — dites-nous ce qu'il vous faut, nos équipes vous répondent rapidement."
        secondaryHref="/contact"
        secondaryLabel="Nous contacter"
      />
    </>
  );
}
