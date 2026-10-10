---
tokens:
  color.bg.dark: "#12161C"
  color.bg.dark.surface: "#1A2028"
  color.bg.light: "#EFEDE7"
  color.bg.light.surface: "#FFFFFF"
  color.ink.light: "#1C2127"
  color.ink.light.muted: "#5B5A53"
  color.ink.dark: "#F3F1EA"
  color.ink.dark.muted: "#9CA3AE"
  color.accent.gold: "#D99A3A"
  color.accent.gold.soft: "#F0D4A0"
  color.accent.jade: "#1E8F6F"
  color.accent.jade.soft: "#BFE3D6"
  color.accent.indigo: "#4B4FDB"
  color.accent.indigo.soft: "#C7C8F5"
  color.rule.light: "#D8D4C8"
  color.rule.dark: "#2A313B"
  font.display: "Bricolage Grotesque"
  font.body: "Manrope"
  font.mono: "IBM Plex Mono"
  radius.base: "4px"
  radius.button: "3px"
---

# IVOLT — Design System

Site vitrine premium pour IVOLT (mobilité électrique et énergie, Côte d'Ivoire /
Afrique de l'Ouest). Direction validée le 2026-10-10.

## Mémorable

"L'avenir de la mobilité en Afrique est déjà là." Chaque décision visuelle sert
cette phrase : vision, modernité, fierté africaine tournée vers l'avenir.

## Recherche

Calibré contre trois références réelles capturées en live (gstack browse) :
- **Roam Electric** (roam-electric.com) — noir + orange vif, photographie
  documentaire africaine forte, bandeau presse/awards.
- **Ampersand Energy** (ampersand.energy) — noir/blanc + jaune électrique,
  univers industriel assumé (ateliers de swapping), badges de stats circulaires.
- **Rivian** (rivian.com) — fond clair, typographie énorme et confiante,
  accents de couleur assignés par usage, beaucoup de respiration.

IVOLT s'en démarque en évitant le duo noir+un-seul-accent-saturé (déjà pris par
Roam et Ampersand) et en assignant trois accents distincts aux trois familles
de métiers, plutôt qu'une seule couleur de marque arbitraire.

## Couleurs

| Token | Hex | Usage |
|---|---|---|
| `color.bg.dark` Nuit Ivoirienne | `#12161C` | Fond sombre premium — hero, sections événement |
| `color.bg.light` Pierre | `#EFEDE7` | Fond clair — catalogues, tarifs, pages légales |
| `color.accent.gold` Or Solaire | `#D99A3A` | CTA principal, solaire, bornes de recharge |
| `color.accent.jade` Jade Circuit | `#1E8F6F` | Charge, battery swapping, statuts positifs |
| `color.accent.indigo` Indigo Mobile | `#4B4FDB` | VTC, livraison, éléments applicatifs |
| `color.ink.light` Encre | `#1C2127` | Texte sur fond clair |

Règle de mapping : la couleur d'accent suit le métier évoqué sur la page, pas
une hiérarchie arbitraire. Une page solaire/bornes est à dominante or ; une
page swapping/charge à dominante jade ; une page VTC/livraison à dominante
indigo. L'accueil mélange les trois dans l'ordre de l'offre.

## Typographie

- **Display — Bricolage Grotesque** (Google Fonts, 400–800) : tous les titres,
  gras (700–800), letter-spacing légèrement négatif, `text-wrap: balance`.
  Choisi pour son caractère anguleux/contemporain, évite le réflexe
  Inter/Space Grotesk en display.
- **Corps — Manrope** (400–700) : texte courant, excellent rendu des accents
  français (é, è, à, ç, œ).
  Échelle ~1.05rem corps, 1.15rem lede, line-height 1.5.
- **Données — IBM Plex Mono** (500) : tarifs, autonomie, specs techniques,
  toujours avec `font-variant-numeric: tabular-nums` quand aligné en colonne.

## Layout & motion

- Alternance de sections sombres (hero, moments "événement") et claires
  (catalogues, contenu dense) — jamais tout un site en un seul ton.
- Smooth-scroll (Lenis) + Framer Motion pour les reveals au scroll et
  transitions de page.
- Accents WebGL/shader localisés : hero d'accueil, page véhicules, page
  stations de charge — pas sur l'ensemble du site (budget perf mobile).
- Lueurs radiales ancrées aux coins des sections sombres (pas un halo néon
  central) pour évoquer la charge électrique sans tomber dans le cliché
  "near-black + un seul accent néon".
- Boutons à coins légèrement arrondis (`3px`), jamais en pilule.
- Pas de badges numérotés 01/02/03 sauf séquence réelle (ex. étapes d'un
  swap de batterie, qui EST un processus ordonné).

## Référence visuelle

Preview palette/typo : `/Users/danielmac/Documents/ivolt/design-system-preview.html`
(publié : https://claude.ai/code/artifact/00096629-5475-4fe9-968c-958d2e38af9b)
