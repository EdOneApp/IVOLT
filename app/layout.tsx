import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivolt.myoctogone.com"),
  title: {
    default: "IVOLT — Mobilité électrique & énergie en Afrique de l'Ouest",
    template: "%s — IVOLT",
  },
  description:
    "Vente et location de véhicules et motos électriques, VTC, livraison, stations de charge, battery swapping, bornes de recharge et panneaux solaires. L'avenir de la mobilité en Afrique est déjà là.",
  keywords: [
    "véhicule électrique Côte d'Ivoire",
    "moto électrique Abidjan",
    "battery swapping Afrique",
    "borne de recharge",
    "panneaux solaires Côte d'Ivoire",
    "VTC électrique",
    "livraison moto électrique",
  ],
  openGraph: {
    title: "IVOLT — Mobilité électrique & énergie en Afrique de l'Ouest",
    description:
      "L'avenir de la mobilité en Afrique est déjà là. Véhicules et motos électriques, VTC, livraison, charge, swapping, bornes et solaire.",
    url: "https://ivolt.myoctogone.com",
    siteName: "IVOLT",
    locale: "fr_CI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pierre text-ink-light">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
