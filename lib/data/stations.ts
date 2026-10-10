export type StationType = "Recharge rapide" | "Point de swap" | "Recharge + Swap";

export type Station = {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  lat: number;
  lng: number;
  type: StationType;
  slots: number;
  hours: string;
  status: "En service" | "Ouverture prochaine";
};

// Réseau illustratif pour le lancement — emplacements par ville, pas des
// adresses d'un réseau déjà déployé. Voir DESIGN.md / design doc, premise 2.
export const stations: Station[] = [
  { id: "abj-plateau", name: "IVOLT Station Plateau", city: "Abidjan", country: "Côte d'Ivoire", address: "Boulevard de la République, Plateau", lat: 5.3200, lng: -4.0186, type: "Recharge + Swap", slots: 12, hours: "6h – 23h", status: "En service" },
  { id: "abj-cocody", name: "IVOLT Station Cocody Angré", city: "Abidjan", country: "Côte d'Ivoire", address: "Rue des Jardins, Cocody Angré", lat: 5.3596, lng: -3.9811, type: "Recharge + Swap", slots: 10, hours: "6h – 23h", status: "En service" },
  { id: "abj-yopougon", name: "IVOLT Station Yopougon Selmer", city: "Abidjan", country: "Côte d'Ivoire", address: "Axe Selmer, Yopougon", lat: 5.3450, lng: -4.0850, type: "Point de swap", slots: 16, hours: "5h30 – 23h30", status: "En service" },
  { id: "abj-marcory", name: "IVOLT Station Marcory Zone 4", city: "Abidjan", country: "Côte d'Ivoire", address: "Zone 4, Marcory", lat: 5.2990, lng: -3.9890, type: "Recharge + Swap", slots: 10, hours: "6h – 22h", status: "En service" },
  { id: "abj-treichville", name: "IVOLT Station Treichville", city: "Abidjan", country: "Côte d'Ivoire", address: "Avenue 16, Treichville", lat: 5.2924, lng: -4.0083, type: "Point de swap", slots: 14, hours: "5h30 – 23h", status: "En service" },
  { id: "abj-koumassi", name: "IVOLT Station Koumassi", city: "Abidjan", country: "Côte d'Ivoire", address: "Grand Marché, Koumassi", lat: 5.2928, lng: -3.9550, type: "Point de swap", slots: 12, hours: "5h30 – 23h", status: "En service" },
  { id: "abj-abobo", name: "IVOLT Station Abobo Gare", city: "Abidjan", country: "Côte d'Ivoire", address: "Gare routière, Abobo", lat: 5.4186, lng: -4.0167, type: "Point de swap", slots: 14, hours: "5h – 23h30", status: "En service" },
  { id: "abj-adjame", name: "IVOLT Station Adjamé 220kV", city: "Abidjan", country: "Côte d'Ivoire", address: "Gare 220kV, Adjamé", lat: 5.3496, lng: -4.0244, type: "Recharge + Swap", slots: 12, hours: "5h – 23h30", status: "En service" },
  { id: "bke-centre", name: "IVOLT Station Bouaké Centre", city: "Bouaké", country: "Côte d'Ivoire", address: "Avenue de la République, Bouaké", lat: 7.6939, lng: -5.0300, type: "Recharge + Swap", slots: 8, hours: "6h – 22h", status: "En service" },
  { id: "yko-centre", name: "IVOLT Station Yamoussoukro", city: "Yamoussoukro", country: "Côte d'Ivoire", address: "Quartier Millionnaire, Yamoussoukro", lat: 6.8276, lng: -5.2893, type: "Recharge + Swap", slots: 6, hours: "6h – 22h", status: "En service" },
  { id: "spy-centre", name: "IVOLT Station San-Pédro Port", city: "San-Pédro", country: "Côte d'Ivoire", address: "Zone portuaire, San-Pédro", lat: 4.7485, lng: -6.6363, type: "Recharge rapide", slots: 6, hours: "6h – 21h", status: "Ouverture prochaine" },
  { id: "khg-centre", name: "IVOLT Station Korhogo", city: "Korhogo", country: "Côte d'Ivoire", address: "Centre-ville, Korhogo", lat: 9.4580, lng: -5.6296, type: "Recharge rapide", slots: 4, hours: "6h – 21h", status: "Ouverture prochaine" },
  { id: "dkr-plateau", name: "IVOLT Station Dakar Plateau", city: "Dakar", country: "Sénégal", address: "Plateau, Dakar", lat: 14.7167, lng: -17.4677, type: "Recharge + Swap", slots: 8, hours: "6h – 22h", status: "Ouverture prochaine" },
  { id: "lfw-centre", name: "IVOLT Station Lomé Centre", city: "Lomé", country: "Togo", address: "Boulevard du 13 Janvier, Lomé", lat: 6.1319, lng: 1.2228, type: "Recharge + Swap", slots: 8, hours: "6h – 22h", status: "Ouverture prochaine" },
  { id: "cot-centre", name: "IVOLT Station Cotonou", city: "Cotonou", country: "Bénin", address: "Boulevard Saint-Michel, Cotonou", lat: 6.3703, lng: 2.3912, type: "Recharge + Swap", slots: 6, hours: "6h – 22h", status: "Ouverture prochaine" },
  { id: "acc-centre", name: "IVOLT Station Accra", city: "Accra", country: "Ghana", address: "Osu, Accra", lat: 5.6037, lng: -0.1870, type: "Recharge + Swap", slots: 6, hours: "6h – 22h", status: "Ouverture prochaine" },
];

export const stationCities = Array.from(new Set(stations.map((s) => s.city)));

export function stationStats() {
  const active = stations.filter((s) => s.status === "En service");
  return {
    totalStations: stations.length,
    activeStations: active.length,
    totalSlots: active.reduce((sum, s) => sum + s.slots, 0),
    cities: stationCities.length,
    countries: Array.from(new Set(stations.map((s) => s.country))).length,
  };
}
