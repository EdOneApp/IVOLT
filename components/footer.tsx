import Link from "next/link";
import { Zap } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/social-icons";

const columns = [
  {
    title: "Véhicules",
    links: [
      { href: "/vehicules", label: "Voitures électriques" },
      { href: "/motos", label: "Motos électriques" },
      { href: "/location", label: "Location & paiement échelonné" },
    ],
  },
  {
    title: "Mobilité",
    links: [
      { href: "/vtc", label: "VTC électrique" },
      { href: "/livraison", label: "Livraison à moto" },
    ],
  },
  {
    title: "Énergie",
    links: [
      { href: "/stations", label: "Stations de charge" },
      { href: "/swapping", label: "Battery swapping" },
      { href: "/bornes-de-recharge", label: "Bornes de recharge" },
      { href: "/panneaux-solaires", label: "Panneaux solaires" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/devenir-partenaire", label: "Devenir partenaire" },
      { href: "/devis", label: "Demander un devis" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-nuit text-ink-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-or text-nuit">
                <Zap size={18} strokeWidth={2.5} />
              </span>
              IVOLT
            </Link>
            <p className="mt-4 text-sm text-ink-dark-muted max-w-xs">
              Mobilité électrique et énergie, pensées pour l&apos;Afrique de l&apos;Ouest.
              Véhicules, motos, charge, swapping et solaire — dans une seule marque.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="text-ink-dark-muted hover:text-or transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-ink-dark-muted hover:text-or transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ink-dark-muted hover:text-or transition-colors">
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-mono uppercase tracking-wider text-ink-dark-muted mb-3">
                {col.title}
              </div>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-dark/90 hover:text-or transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-rule-dark flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-ink-dark-muted">
            © {new Date().getFullYear()} IVOLT. Tous droits réservés. Abidjan, Côte d&apos;Ivoire.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-dark-muted">
            <Link href="/mentions-legales" className="hover:text-or transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-or transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-or transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
