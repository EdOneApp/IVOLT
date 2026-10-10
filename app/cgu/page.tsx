import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalProse } from "@/components/legal-prose";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site IVOLT.",
};

export default function CguPage() {
  return (
    <>
      <PageHero
        eyebrow="Conditions d'utilisation"
        title="Conditions générales d'utilisation"
        description="Dernière mise à jour : 10 octobre 2026."
      />
      <LegalProse>
        <h2>Objet</h2>
        <p>
          Les présentes conditions générales d&apos;utilisation (CGU) régissent
          l&apos;accès et l&apos;utilisation du site ivolt.myoctogone.com, édité par
          IVOLT SARL. L&apos;utilisation du site implique l&apos;acceptation pleine et
          entière des présentes CGU.
        </p>

        <h2>Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant
          d&apos;un accès à internet. Tous les frais afférents à l&apos;accès au site
          (matériel informatique, connexion internet, etc.) sont à la charge
          de l&apos;utilisateur.
        </p>

        <h2>Demandes de devis et formulaires</h2>
        <p>
          Les formulaires présents sur le site (demande de devis, candidature
          partenaire, contact) permettent d&apos;adresser une demande d&apos;information
          commerciale à IVOLT. Ils ne constituent ni une commande ferme, ni un
          engagement contractuel. Toute vente, location ou prestation de
          service fait l&apos;objet d&apos;un contrat distinct, signé séparément entre
          IVOLT et le client.
        </p>

        <h2>Prix et disponibilité</h2>
        <p>
          Les prix, caractéristiques techniques et disponibilités affichés sur
          le site sont donnés à titre indicatif, exprimés en francs CFA (FCFA),
          et peuvent évoluer sans préavis. Le simulateur de paiement échelonné
          fournit une estimation et ne constitue pas une offre de financement
          contractuelle.
        </p>

        <h2>Comportement de l&apos;utilisateur</h2>
        <p>
          L&apos;utilisateur s&apos;engage à utiliser le site de bonne foi et à ne pas
          porter atteinte à son fonctionnement normal, notamment par l&apos;envoi
          de contenus frauduleux via les formulaires.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Le contenu du site est protégé par le droit de la propriété
          intellectuelle. Voir les{" "}
          <a href="/mentions-legales">mentions légales</a> pour plus de détails.
        </p>

        <h2>Modification des CGU</h2>
        <p>
          IVOLT se réserve le droit de modifier les présentes CGU à tout
          moment. Les CGU applicables sont celles en vigueur à la date de
          consultation du site.
        </p>

        <h2>Droit applicable et juridiction</h2>
        <p>
          Les présentes CGU sont soumises au droit ivoirien. En cas de litige,
          et à défaut de résolution amiable, les tribunaux d&apos;Abidjan seront
          seuls compétents.
        </p>
      </LegalProse>
    </>
  );
}
