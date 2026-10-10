import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { AnimatedSection } from "@/components/animated-section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe IVOLT à Abidjan — questions, support, presse ou partenariats.",
};

const details = [
  { icon: MapPin, label: "Siège social", value: "Boulevard de la République, Plateau, Abidjan" },
  { icon: Phone, label: "Téléphone", value: "+225 27 20 00 00 00" },
  { icon: Mail, label: "E-mail", value: "contact@ivolt.ci" },
  { icon: Clock, label: "Horaires", value: "Lun – Sam, 7h30 – 19h" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet électrique."
        description="Une question sur un véhicule, un partenariat, ou besoin d'aide ? Notre équipe à Abidjan vous répond rapidement."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-14">
        <AnimatedSection>
          <Eyebrow>Nos coordonnées</Eyebrow>
          <div className="flex flex-col gap-6 mt-6">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-or/15 text-or">
                  <d.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-ink-light-muted">{d.label}</div>
                  <div className="text-sm font-semibold mt-0.5">{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Eyebrow>Envoyer un message</Eyebrow>
          <h2 className="font-display font-extrabold text-2xl mb-8">On vous répond sous 24h ouvrées.</h2>
          <ContactForm />
        </AnimatedSection>
      </section>
    </>
  );
}
