"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fcfa } from "@/lib/format";
import { vehicles } from "@/lib/data/vehicles";
import { motos } from "@/lib/data/motos";

type Mode = "vehicule" | "moto";

export function LeaseSimulator() {
  const [mode, setMode] = useState<Mode>("vehicule");
  const items = mode === "vehicule" ? vehicles : motos;
  const [slug, setSlug] = useState(items[0].slug);
  const [apport, setApport] = useState(20); // %

  const item = useMemo(() => {
    const list = mode === "vehicule" ? vehicles : motos;
    return list.find((i) => i.slug === slug) ?? list[0];
  }, [mode, slug]);

  const basePayment = item.priceLeaseFrom;
  const adjustedPayment = Math.round((basePayment * (1 - apport / 100)) / 1000) * 1000;
  const periodLabel = mode === "vehicule" ? "/ mois" : "/ jour";
  const durationLabel = mode === "vehicule" ? "36 mois" : "24 mois";
  const periodsCount = mode === "vehicule" ? 36 : 24 * 30;
  const totalCost = adjustedPayment * periodsCount + Math.round(item.priceFrom * (apport / 100));

  return (
    <div className="rounded-md border border-rule-light bg-pierre-2 p-6 md:p-8">
      <div className="flex gap-2 mb-6">
        {(["vehicule", "moto"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m);
              setSlug((m === "vehicule" ? vehicles : motos)[0].slug);
            }}
            className={`flex-1 rounded-[3px] py-2.5 text-sm font-semibold transition-colors ${
              mode === m ? "bg-nuit text-ink-dark" : "bg-pierre text-ink-light-muted"
            }`}
          >
            {m === "vehicule" ? "Véhicule" : "Moto"}
          </button>
        ))}
      </div>

      <label className="block text-xs font-mono-data uppercase tracking-wider text-ink-light-muted mb-2">
        Choisissez un modèle
      </label>
      <select
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full rounded-[3px] border border-rule-light bg-pierre px-3 py-2.5 text-sm font-semibold mb-6"
      >
        {items.map((i) => (
          <option key={i.slug} value={i.slug}>
            {i.brand} {i.model}
          </option>
        ))}
      </select>

      <label className="flex items-center justify-between text-xs font-mono-data uppercase tracking-wider text-ink-light-muted mb-2">
        <span>Apport initial</span>
        <span>{apport}%</span>
      </label>
      <input
        type="range"
        min={0}
        max={50}
        step={5}
        value={apport}
        onChange={(e) => setApport(Number(e.target.value))}
        className="w-full accent-jade mb-6"
      />

      <motion.div
        key={`${slug}-${apport}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-md bg-nuit p-5"
      >
        <div className="text-xs text-ink-dark-muted">Mensualité estimée</div>
        <div className="font-display font-extrabold text-3xl text-ink-dark mt-1">
          {fcfa(adjustedPayment)}
          <span className="text-base font-body font-normal text-ink-dark-muted"> {periodLabel}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-rule-dark">
          <div>
            <div className="text-[11px] text-ink-dark-muted">Durée</div>
            <div className="font-mono-data font-semibold text-ink-dark">{durationLabel}</div>
          </div>
          <div>
            <div className="text-[11px] text-ink-dark-muted">Coût total estimé</div>
            <div className="font-mono-data font-semibold text-ink-dark">{fcfa(totalCost)}</div>
          </div>
        </div>
      </motion.div>

      <p className="text-[11px] text-ink-light-muted mt-4">
        Simulation indicative, hors assurance. Un conseiller IVOLT valide votre
        plan exact avec vous avant signature.
      </p>
    </div>
  );
}
