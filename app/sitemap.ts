import type { MetadataRoute } from "next";
import { vehicles } from "@/lib/data/vehicles";
import { motos } from "@/lib/data/motos";

export const dynamic = "force-static";

const BASE = "https://ivolt.myoctogone.com";

const staticRoutes = [
  "",
  "/vehicules",
  "/motos",
  "/location",
  "/vtc",
  "/livraison",
  "/stations",
  "/swapping",
  "/bornes-de-recharge",
  "/panneaux-solaires",
  "/devenir-partenaire",
  "/devis",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cgu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...vehicles.map((v) => `/vehicules/${v.slug}`),
    ...motos.map((m) => `/motos/${m.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
