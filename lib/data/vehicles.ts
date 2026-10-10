import { img } from "@/lib/images";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  category: "Citadine" | "SUV compact" | "SUV" | "Berline";
  tagline: string;
  priceFrom: number; // FCFA
  priceLeaseFrom: number; // FCFA / mois, paiement échelonné
  range: number; // km WLTP/CLTC
  battery: number; // kWh
  chargeTime: string;
  topSpeed: number; // km/h
  seats: number;
  availability: "Disponible à Abidjan" | "Sur commande — 4 à 6 semaines";
  image: string;
  gallery: string[];
  highlights: string[];
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "byd-dolphin-mini",
    brand: "BYD",
    model: "Dolphin Mini",
    category: "Citadine",
    tagline: "L'entrée dans l'électrique, pensée pour Abidjan",
    priceFrom: 13_500_000,
    priceLeaseFrom: 285_000,
    range: 300,
    battery: 30,
    chargeTime: "4h30 (AC 7 kW) · 30 min (DC 60 kW, 10→80%)",
    topSpeed: 130,
    seats: 4,
    availability: "Disponible à Abidjan",
    image: img.showroomCar2,
    gallery: [img.showroomCar2, img.evInteriorDark, img.evChargingUrban],
    highlights: [
      "Format citadin idéal pour Plateau, Cocody, Marcory",
      "Garantie batterie 8 ans / 160 000 km",
      "Climatisation forte capacité — pensée pour le climat ouest-africain",
    ],
    description:
      "La porte d'entrée la plus accessible du catalogue IVOLT : un format compact, un rayon de braquage serré pour la circulation dense d'Abidjan, et un coût d'usage au kilomètre jusqu'à 70% inférieur à l'essence.",
  },
  {
    slug: "byd-dolphin",
    brand: "BYD",
    model: "Dolphin",
    category: "Citadine",
    tagline: "Le meilleur rapport autonomie / prix du catalogue",
    priceFrom: 17_800_000,
    priceLeaseFrom: 365_000,
    range: 405,
    battery: 44.9,
    chargeTime: "5h (AC 7 kW) · 29 min (DC 70 kW, 10→80%)",
    topSpeed: 160,
    seats: 5,
    availability: "Disponible à Abidjan",
    image: img.showroomCar1,
    gallery: [img.showroomCar1, img.evDashTesla, img.evChargingRoadside],
    highlights: [
      "405 km d'autonomie réelle — Abidjan–Yamoussoukro sans recharge",
      "Plateforme Blade Battery (sécurité anti-incendie certifiée)",
      "Compatible réseau de bornes rapides IVOLT",
    ],
    description:
      "La Dolphin est le choix le plus populaire de notre réseau VTC et de nos particuliers : assez d'autonomie pour une semaine de trajets urbains sans passer par une borne, et un entretien quasi inexistant.",
  },
  {
    slug: "byd-atto-3",
    brand: "BYD",
    model: "Atto 3",
    category: "SUV compact",
    tagline: "Le SUV électrique premium accessible",
    priceFrom: 24_500_000,
    priceLeaseFrom: 495_000,
    range: 420,
    battery: 60.5,
    chargeTime: "7h (AC 7 kW) · 35 min (DC 80 kW, 10→80%)",
    topSpeed: 160,
    seats: 5,
    availability: "Disponible à Abidjan",
    image: img.heroCarNight,
    gallery: [img.heroCarNight, img.evScreenTesla, img.dealershipLuxury],
    highlights: [
      "Garde au sol élevée — adapté aux routes secondaires",
      "Écran rotatif 12,8\" et chargeur sans fil",
      "Coffre 440 L + prise V2L (alimente outils / groupe électrogène de secours)",
    ],
    description:
      "Pour les familles et les cadres qui veulent un SUV sans compromis : finitions soignées, habitabilité généreuse, et la prise V2L qui transforme la voiture en groupe électrogène d'appoint — un vrai argument en Afrique de l'Ouest.",
  },
  {
    slug: "byd-seal",
    brand: "BYD",
    model: "Seal",
    category: "Berline",
    tagline: "La berline électrique haute performance",
    priceFrom: 31_900_000,
    priceLeaseFrom: 620_000,
    range: 520,
    battery: 82.5,
    chargeTime: "9h (AC 11 kW) · 26 min (DC 150 kW, 10→80%)",
    topSpeed: 180,
    seats: 5,
    availability: "Sur commande — 4 à 6 semaines",
    image: img.teslaRoad,
    gallery: [img.teslaRoad, img.evInteriorDark, img.evChargingUrban],
    highlights: [
      "0 à 100 km/h en 3,8 s (version AWD Performance)",
      "520 km d'autonomie — la plus longue du catalogue",
      "Réservée à la clientèle VTC premium et direction d'entreprise",
    ],
    description:
      "La vitrine technologique d'IVOLT : silhouette de berline sportive, motorisation à double moteur, et une autonomie qui couvre Abidjan–San-Pédro aller-retour sur une seule charge.",
  },
  {
    slug: "byd-m6",
    brand: "BYD",
    model: "M6 EV",
    category: "SUV",
    tagline: "Le monospace électrique pour flottes VTC et familles nombreuses",
    priceFrom: 21_900_000,
    priceLeaseFrom: 440_000,
    range: 380,
    battery: 55.4,
    chargeTime: "6h (AC 7 kW) · 32 min (DC 80 kW, 10→80%)",
    topSpeed: 150,
    seats: 7,
    availability: "Sur commande — 4 à 6 semaines",
    image: img.dealershipNight,
    gallery: [img.dealershipNight, img.carDashButtons, img.evChargingRoadside],
    highlights: [
      "7 places — idéal pour le transport partagé et les familles",
      "Coût d'exploitation le plus bas de la gamme VTC IVOLT",
      "Volume de coffre modulable 3ᵉ rangée",
    ],
    description:
      "Le choix privilégié des partenaires flotte IVOLT VTC : 7 places, faible coût au kilomètre, et une fiabilité éprouvée sur plus de 3 millions de km cumulés par le réseau en Asie et en Afrique de l'Est.",
  },
];

export function getVehicleBySlug(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}
