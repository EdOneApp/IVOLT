"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fcfa } from "@/lib/format";
import type { Moto } from "@/lib/data/motos";

export function MotoCard({ moto, index = 0 }: { moto: Moto; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/motos/${moto.slug}`}
        className="group block overflow-hidden rounded-md border border-rule-light bg-pierre-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={moto.image}
            alt={`${moto.brand} ${moto.model}`}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute top-3 left-3 rounded-[3px] bg-nuit/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono-data text-ink-dark">
            {moto.category}
          </div>
          {moto.swappable && (
            <div className="absolute top-3 right-3 rounded-[3px] bg-jade/90 px-2.5 py-1 text-[11px] font-mono-data text-white">
              Batterie swap
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="text-xs font-mono-data uppercase tracking-wider text-ink-light-muted">
            {moto.brand}
          </div>
          <h3 className="font-display font-bold text-xl mt-0.5">{moto.model}</h3>
          <p className="text-sm text-ink-light-muted mt-1.5">{moto.tagline}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-rule-light">
            <div>
              <div className="text-[11px] text-ink-light-muted">Dès</div>
              <div className="font-mono-data font-semibold text-base">{fcfa(moto.priceLeaseFrom)}/j</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-ink-light-muted">Autonomie</div>
              <div className="font-mono-data font-semibold text-base">{moto.range} km</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
