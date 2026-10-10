"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fcfa } from "@/lib/format";
import type { Vehicle } from "@/lib/data/vehicles";

export function VehicleCard({ vehicle, index = 0 }: { vehicle: Vehicle; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/vehicules/${vehicle.slug}`}
        className="group block overflow-hidden rounded-md border border-rule-light bg-pierre-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute top-3 left-3 rounded-[3px] bg-nuit/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono-data text-ink-dark">
            {vehicle.category}
          </div>
        </div>
        <div className="p-5">
          <div className="text-xs font-mono-data uppercase tracking-wider text-ink-light-muted">
            {vehicle.brand}
          </div>
          <h3 className="font-display font-bold text-xl mt-0.5">{vehicle.model}</h3>
          <p className="text-sm text-ink-light-muted mt-1.5">{vehicle.tagline}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-rule-light">
            <div>
              <div className="text-[11px] text-ink-light-muted">À partir de</div>
              <div className="font-mono-data font-semibold text-base">{fcfa(vehicle.priceFrom)}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-ink-light-muted">Autonomie</div>
              <div className="font-mono-data font-semibold text-base">{vehicle.range} km</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
