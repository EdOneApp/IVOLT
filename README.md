# IVOLT

Site vitrine premium pour IVOLT — mobilité électrique et énergie en Côte d'Ivoire
et en Afrique de l'Ouest (vente et location de véhicules/motos électriques,
paiement échelonné, VTC, livraison, stations de charge, battery swapping,
bornes de recharge, panneaux solaires).

## Stack

- Next.js 16 (App Router, export statique) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations, transitions de page)
- Three.js / React Three Fiber (accents WebGL : hero, véhicules, stations)
- Lenis (smooth scroll)
- React Leaflet (carte des stations de charge)
- React Hook Form + Zod (formulaires : devis, partenariat, contact)

Système de design : voir `DESIGN.md`.

## Développement

```bash
bun install
bun dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build & export statique

```bash
bun run build
```

Génère un export statique dans `out/` (voir `next.config.ts`, `output: "export"`),
déployé automatiquement sur GitHub Pages via `.github/workflows/deploy.yml`.

## Déploiement

- Hébergement : GitHub Pages
- Domaine personnalisé : [ivolt.myoctogone.com](https://ivolt.myoctogone.com) (voir `public/CNAME`)
