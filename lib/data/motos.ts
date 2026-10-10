import { img } from "@/lib/images";

export type Moto = {
  slug: string;
  brand: string;
  model: string;
  category: "Urbaine" | "Livraison" | "VTC / Taxi-moto" | "Cargo";
  tagline: string;
  priceFrom: number; // FCFA, achat comptant
  priceLeaseFrom: number; // FCFA / jour, paiement échelonné
  range: number; // km, autonomie par charge/batterie
  swappable: boolean;
  battery: string; // ex: "72V 35Ah amovible"
  chargeTime: string;
  topSpeed: number; // km/h
  payload: number; // kg, charge utile
  image: string;
  gallery: string[];
  highlights: string[];
  description: string;
};

export const motos: Moto[] = [
  {
    slug: "ivolt-urba-1",
    brand: "IVOLT",
    model: "Urba 1",
    category: "Urbaine",
    tagline: "La moto électrique du quotidien, batterie échangeable",
    priceFrom: 950_000,
    priceLeaseFrom: 2_500,
    range: 70,
    swappable: true,
    battery: "60V 32Ah amovible",
    chargeTime: "3h (prise standard) · 3 min au point de swap",
    topSpeed: 65,
    payload: 150,
    image: img.motoRiderStreet,
    gallery: [img.motoRiderStreet, img.chargePlug1, img.cityMotoTraffic1],
    highlights: [
      "Batterie amovible compatible avec tout le réseau de swap IVOLT",
      "Coût au km jusqu'à 75% inférieur à une moto essence",
      "Aucun changement d'huile, entretien minimal",
    ],
    description:
      "La porte d'entrée du catalogue moto : légère, maniable dans la circulation dense, pensée pour les trajets domicile-travail et les petits trajets du quotidien à Abidjan.",
  },
  {
    slug: "ivolt-pro-livraison",
    brand: "IVOLT",
    model: "Pro Livraison",
    category: "Livraison",
    tagline: "Conçue pour les coursiers — coffre intégré, autonomie renforcée",
    priceFrom: 1_250_000,
    priceLeaseFrom: 3_200,
    range: 95,
    swappable: true,
    battery: "72V 38Ah amovible (x1, extensible à x2)",
    chargeTime: "3h30 (prise standard) · 3 min au point de swap",
    topSpeed: 70,
    payload: 180,
    image: img.deliveryRider1,
    gallery: [img.deliveryRider1, img.deliveryRider3, img.deliveryRider5],
    highlights: [
      "Coffre arrière 45L intégré aux normes livraison repas",
      "Double emplacement batterie en option — jusqu'à 190 km d'autonomie",
      "Châssis renforcé pour usage intensif (8-10h/jour)",
    ],
    description:
      "La moto de référence pour nos partenaires livreurs : autonomie étendue, coffre intégré et fiabilité pensée pour rouler 6 jours sur 7 sans interruption de service.",
  },
  {
    slug: "ivolt-taxi-vtc",
    brand: "IVOLT",
    model: "Taxi VTC",
    category: "VTC / Taxi-moto",
    tagline: "Confort passager, autonomie longue distance",
    priceFrom: 1_450_000,
    priceLeaseFrom: 3_800,
    range: 110,
    swappable: true,
    battery: "72V 45Ah amovible",
    chargeTime: "4h (prise standard) · 3 min au point de swap",
    topSpeed: 75,
    payload: 200,
    image: img.motoRiderRed,
    gallery: [img.motoRiderRed, img.cityRushHour, img.chargePlug2],
    highlights: [
      "Selle passager rembourrée longue + repose-pieds renforcés",
      "Suspension recalibrée pour le confort à deux",
      "Éligible au programme flotte VTC IVOLT (financement partenaire)",
    ],
    description:
      "Pensée pour les chauffeurs de taxi-moto professionnels : plus de couple pour démarrer à deux, plus d'autonomie pour enchaîner les courses toute la journée.",
  },
  {
    slug: "ivolt-cargo-xl",
    brand: "IVOLT",
    model: "Cargo XL",
    category: "Cargo",
    tagline: "Le tricycle électrique pour le transport de marchandises",
    priceFrom: 2_100_000,
    priceLeaseFrom: 5_500,
    range: 85,
    swappable: true,
    battery: "72V 2x45Ah amovible",
    chargeTime: "4h30 (prise standard) · 6 min au point de swap (2 batteries)",
    topSpeed: 55,
    payload: 450,
    image: img.cityMotoCar,
    gallery: [img.cityMotoCar, img.mechanic2, img.chargePlug3],
    highlights: [
      "Caisse arrière 1,2 m³ — idéal commerçants et grossistes",
      "Charge utile 450 kg, essieu renforcé",
      "Financement B2B avec option rachat après 24 mois",
    ],
    description:
      "Le tricycle cargo IVOLT remplace les tricycles thermiques pour le transport de marchandises en ville : silencieux, moins cher à l'usage, et assez robuste pour un usage commercial intensif.",
  },
];

export function getMotoBySlug(slug: string) {
  return motos.find((m) => m.slug === slug);
}
