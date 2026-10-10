"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { clsx } from "clsx";

type NavGroup = {
  label: string;
  items: { href: string; label: string; desc: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: "Véhicules",
    items: [
      { href: "/vehicules", label: "Voitures électriques", desc: "Catalogue, prix, fiches techniques" },
      { href: "/motos", label: "Motos électriques", desc: "Urbaines, livraison, VTC, cargo" },
      { href: "/location", label: "Location & paiement échelonné", desc: "Payez un peu, un peu" },
    ],
  },
  {
    label: "Mobilité",
    items: [
      { href: "/vtc", label: "VTC électrique", desc: "Réservez une course propre" },
      { href: "/livraison", label: "Livraison à moto", desc: "Pour particuliers et commerçants" },
    ],
  },
  {
    label: "Énergie",
    items: [
      { href: "/stations", label: "Stations de charge", desc: "Carte du réseau IVOLT" },
      { href: "/swapping", label: "Battery swapping", desc: "Échangez votre batterie en 3 min" },
      { href: "/bornes-de-recharge", label: "Bornes de recharge", desc: "Installation résidentielle & pro" },
      { href: "/panneaux-solaires", label: "Panneaux solaires", desc: "Kits solaires résidentiel & pro" },
    ],
  },
];

const directLinks = [
  { href: "/devenir-partenaire", label: "Devenir partenaire" },
  { href: "/a-propos", label: "À propos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Reset transient UI state when the route (external system) changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-pierre-2/90 backdrop-blur-md border-b border-rule-light"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-nuit text-or">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          IVOLT
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-ink-light hover:text-indigo transition-colors"
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <ChevronDown
                  size={14}
                  className={clsx(
                    "transition-transform",
                    openGroup === group.label && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openGroup === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-full pt-2 w-80"
                  >
                    <div className="rounded-md border border-rule-light bg-pierre-2 shadow-xl p-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-[4px] px-3 py-2.5 hover:bg-pierre transition-colors"
                        >
                          <div className="text-sm font-semibold text-ink-light">{item.label}</div>
                          <div className="text-xs text-ink-light-muted mt-0.5">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-ink-light hover:text-indigo transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-semibold text-ink-light hover:text-indigo transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/devis"
            className="rounded-[3px] bg-or px-4 py-2.5 text-sm font-bold text-[#1c1200] hover:brightness-95 transition"
          >
            Demander un devis
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-pierre-2 border-t border-rule-light"
          >
            <div className="px-5 py-4 flex flex-col gap-5">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <div className="text-xs font-mono uppercase tracking-wider text-ink-light-muted mb-2">
                    {group.label}
                  </div>
                  <div className="flex flex-col gap-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="py-1.5 text-sm font-semibold text-ink-light"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-1 pt-1 border-t border-rule-light">
                {directLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="py-1.5 text-sm font-semibold text-ink-light">
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="py-1.5 text-sm font-semibold text-ink-light">
                  Contact
                </Link>
              </div>
              <Link
                href="/devis"
                className="rounded-[3px] bg-or px-4 py-3 text-sm font-bold text-[#1c1200] text-center"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
