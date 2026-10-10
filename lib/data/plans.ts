// Grilles tarifaires illustratives — vitrine + simulateur, pas de moteur de
// paiement réel en V1 (voir design doc, premise 4).

export const vtcTariffs = {
  base: 500, // FCFA, prise en charge
  perKm: 220, // FCFA / km
  perMin: 35, // FCFA / min (embouteillage)
  minFare: 1_000,
  zones: [
    { name: "Abidjan intra-muros", multiplier: 1 },
    { name: "Abidjan ↔ aéroport FHB", multiplier: 1.3 },
    { name: "Grand Abidjan (Bingerville, Anyama...)", multiplier: 1.5 },
  ],
};

export const livraisonTariffs = [
  { label: "Course courte (< 3 km)", price: 1_000, delay: "15–25 min" },
  { label: "Course standard (3–8 km)", price: 1_800, delay: "25–40 min" },
  { label: "Course longue (8–15 km)", price: 2_800, delay: "40–60 min" },
  { label: "Forfait commerçant — jusqu'à 20 courses/mois", price: 28_000, delay: "Créneaux prioritaires" },
];

export const borneOffers = [
  {
    slug: "residentiel",
    name: "Borne résidentielle",
    power: "7,4 kW (monophasé)",
    priceFrom: 850_000,
    installDelay: "3 à 5 jours ouvrés",
    includes: [
      "Borne murale certifiée + câble type 2",
      "Étude du tableau électrique et mise aux normes",
      "Pose incluse dans un rayon de 15 km d'Abidjan",
      "Garantie 2 ans pièces et main d'œuvre",
    ],
  },
  {
    slug: "commercial",
    name: "Borne commerciale",
    power: "22 kW (triphasé)",
    priceFrom: 2_400_000,
    installDelay: "1 à 2 semaines",
    includes: [
      "Borne double point de charge, supervision à distance",
      "Dimensionnement réseau par un ingénieur IVOLT",
      "Option badge/abonnement pour vos clients ou employés",
      "Maintenance préventive annuelle incluse la 1ère année",
    ],
  },
  {
    slug: "flotte",
    name: "Hub de recharge flotte",
    power: "Jusqu'à 180 kW (DC rapide, multi-points)",
    priceFrom: 9_500_000,
    installDelay: "4 à 8 semaines",
    includes: [
      "Étude de dimensionnement pour flotte VTC/livraison/entreprise",
      "Supervision, facturation et reporting d'usage",
      "Accompagnement financement (leasing matériel disponible)",
      "SAV dédié 7j/7",
    ],
  },
];

export const solarOffers = [
  {
    slug: "kit-entree",
    name: "Kit Essentiel",
    power: "1,5 kWc",
    priceFrom: 1_450_000,
    payback: "≈ 4 ans",
    includes: [
      "6 panneaux monocristallins + onduleur hybride",
      "Batterie de secours 2,5 kWh (éclairage, frigo, TV, box internet)",
      "Idéal foyer avec coupures fréquentes",
    ],
  },
  {
    slug: "kit-familial",
    name: "Kit Familial",
    power: "3,5 kWc",
    priceFrom: 3_200_000,
    payback: "≈ 5 ans",
    includes: [
      "14 panneaux + onduleur hybride 5 kW",
      "Batterie 5 kWh — climatisation et électroménager compatibles",
      "Monitoring de production via application",
    ],
  },
  {
    slug: "kit-pro",
    name: "Kit Pro / Commerce",
    power: "9 kWc",
    priceFrom: 7_900_000,
    payback: "≈ 4,5 ans",
    includes: [
      "Dimensionné pour commerce, atelier ou PME",
      "Batterie 10 kWh extensible",
      "Compatible recharge flotte motos/véhicules IVOLT",
    ],
  },
];

export const swapSteps = [
  { step: 1, title: "Arrivez à la station", detail: "Garez votre moto sur l'emplacement de swap le plus proche." },
  { step: 2, title: "Scannez votre badge", detail: "Identification via l'app IVOLT ou votre badge abonné." },
  { step: 3, title: "Échangez la batterie", detail: "Retirez votre batterie déchargée, prenez une batterie pleine dans le rack." },
  { step: 4, title: "Repartez", detail: "Moins de 3 minutes, sans attendre la charge." },
];

export const partnerTracks = [
  {
    slug: "station-partenaire",
    title: "Ouvrir une station IVOLT",
    summary:
      "Devenez opérateur d'un point de recharge/swap IVOLT sur votre terrain ou commerce — investissement partagé, revenus récurrents.",
  },
  {
    slug: "flotte-partenaire",
    title: "Intégrer votre flotte",
    summary:
      "Entreprises de VTC, livraison ou transport : équipez votre flotte en véhicules/motos électriques IVOLT avec financement adapté.",
  },
  {
    slug: "revendeur",
    title: "Devenir revendeur agréé",
    summary:
      "Vendez les véhicules, motos et kits solaires IVOLT dans votre région avec support technique et marketing.",
  },
  {
    slug: "installateur",
    title: "Installateur certifié bornes/solaire",
    summary:
      "Rejoignez le réseau d'installateurs certifiés IVOLT pour les chantiers bornes de recharge et panneaux solaires.",
  },
];
