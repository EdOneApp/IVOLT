import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalProse } from "@/components/legal-prose";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données du site IVOLT.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        description="Dernière mise à jour : 10 octobre 2026."
      />
      <LegalProse>
        <h2>Données collectées</h2>
        <p>
          Lorsque vous utilisez nos formulaires (demande de devis, candidature
          partenaire, contact), nous collectons les informations que vous nous
          transmettez volontairement : nom, e-mail, téléphone, ville, et le
          contenu de votre message. Ces formulaires s&apos;envoient directement
          vers notre messagerie ; aucune base de données de visiteurs n&apos;est
          constituée automatiquement par le site.
        </p>

        <h2>Finalités du traitement</h2>
        <ul>
          <li>Répondre à vos demandes de devis, de partenariat ou de contact</li>
          <li>Vous recontacter au sujet d&apos;un véhicule, d&apos;une moto ou d&apos;un service IVOLT</li>
          <li>Améliorer la qualité de nos offres et de notre service client</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Le traitement de vos données repose sur votre consentement explicite,
          recueilli lors de l&apos;envoi de chaque formulaire, ainsi que sur
          l&apos;intérêt légitime d&apos;IVOLT à répondre aux demandes commerciales qui
          lui sont adressées.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Vos données sont conservées le temps nécessaire au traitement de
          votre demande, puis archivées pendant une durée maximale de 3 ans à
          des fins commerciales, sauf opposition de votre part.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément à la réglementation ivoirienne sur la protection des
          données à caractère personnel, vous disposez d&apos;un droit d&apos;accès,
          de rectification, d&apos;opposition et de suppression de vos données.
          Pour exercer ces droits, contactez-nous à{" "}
          <a href="mailto:contact@ivolt.ci">contact@ivolt.ci</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site, étant un export statique hébergé sur GitHub Pages, n&apos;utilise
          pas de cookies de suivi publicitaire ni d&apos;outils d&apos;analyse tiers à
          ce stade. Si des outils de mesure d&apos;audience venaient à être ajoutés,
          cette politique serait mise à jour en conséquence et votre consentement
          vous serait demandé le cas échéant.
        </p>

        <h2>Partage des données</h2>
        <p>
          IVOLT ne vend ni ne loue vos données personnelles à des tiers. Vos
          informations peuvent être partagées avec nos partenaires opérationnels
          (financement, assurance) uniquement dans le cadre strict du traitement
          de votre demande, et avec votre accord préalable.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question relative à cette politique de confidentialité,
          écrivez-nous à <a href="mailto:contact@ivolt.ci">contact@ivolt.ci</a>.
        </p>
      </LegalProse>
    </>
  );
}
