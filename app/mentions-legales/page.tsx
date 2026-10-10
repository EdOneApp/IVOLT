import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalProse } from "@/components/legal-prose";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site IVOLT.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Dernière mise à jour : 10 octobre 2026."
      />
      <LegalProse>
        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>ivolt.myoctogone.com</strong> est édité par <strong>IVOLT SARL</strong>,
          société de droit ivoirien dont le siège social est situé Boulevard
          de la République, Plateau, Abidjan, Côte d&apos;Ivoire.
        </p>
        <ul>
          <li>Numéro RCCM : [à compléter lors de l&apos;immatriculation]</li>
          <li>Numéro de compte contribuable : [à compléter]</li>
          <li>Capital social : [à compléter]</li>
          <li>Directeur de la publication : Aya N&apos;Guessan, Directrice Générale</li>
          <li>E-mail : contact@ivolt.ci</li>
          <li>Téléphone : +225 27 20 00 00 00</li>
        </ul>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par <strong>GitHub, Inc.</strong>, 88 Colin P Kelly Jr St,
          San Francisco, CA 94107, États-Unis, via le service GitHub Pages, et
          accessible sous le nom de domaine personnalisé ivolt.myoctogone.com.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des éléments du site IVOLT (textes, logos, graphismes,
          icônes, mise en page, structure) est protégé par le droit de la
          propriété intellectuelle. Toute reproduction, représentation,
          modification ou exploitation, totale ou partielle, sans autorisation
          écrite préalable d&apos;IVOLT, est interdite. Les photographies utilisées
          proviennent de banques d&apos;images libres de droits et sont utilisées
          à titre illustratif.
        </p>

        <h2>Responsabilité</h2>
        <p>
          IVOLT met tout en œuvre pour fournir des informations exactes et à
          jour sur ce site. Les prix, disponibilités et caractéristiques
          techniques des véhicules, motos, bornes et kits solaires sont donnés
          à titre indicatif et peuvent être modifiés sans préavis. Seule une
          offre contractuelle écrite émise par IVOLT engage la société.
        </p>

        <h2>Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. IVOLT
          n&apos;exerce aucun contrôle sur ces sites et décline toute
          responsabilité quant à leur contenu.
        </p>

        <h2>Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit ivoirien. Tout
          litige relatif à leur interprétation ou leur exécution relève de la
          compétence exclusive des tribunaux d&apos;Abidjan, sous réserve des
          dispositions légales impératives applicables.
        </p>
      </LegalProse>
    </>
  );
}
