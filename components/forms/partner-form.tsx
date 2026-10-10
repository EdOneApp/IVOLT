"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { FieldWrap, inputClass } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { partnerTracks } from "@/lib/data/plans";

const schema = z.object({
  name: z.string().min(2, "Indiquez votre nom"),
  company: z.string().optional(),
  email: z.string().email("Adresse e-mail invalide"),
  phone: z.string().min(8, "Indiquez un numéro valide"),
  city: z.string().min(2, "Indiquez votre ville"),
  track: z.string().min(1, "Choisissez un programme"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function PartnerForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Candidature partenaire IVOLT — ${data.track}`);
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEntreprise: ${data.company ?? "—"}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nVille: ${data.city}\nProgramme: ${data.track}\n\nMessage:\n${data.message ?? "—"}`
    );
    // Event-handler side effect (form submit), not a render-phase mutation.
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:partenaires@ivolt.ci?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-indigo/40 bg-indigo/10 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-indigo" size={36} />
        <h3 className="font-display font-bold text-xl mt-4">Votre client mail s&apos;est ouvert</h3>
        <p className="text-sm text-ink-light-muted mt-2">
          Notre équipe partenariats vous recontacte sous 2 à 3 jours ouvrés.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="Nom complet" htmlFor="name" error={errors.name}>
          <input id="name" className={inputClass} {...register("name")} />
        </FieldWrap>
        <FieldWrap label="Entreprise (optionnel)" htmlFor="company">
          <input id="company" className={inputClass} {...register("company")} />
        </FieldWrap>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="E-mail" htmlFor="email" error={errors.email}>
          <input id="email" type="email" className={inputClass} {...register("email")} />
        </FieldWrap>
        <FieldWrap label="Téléphone" htmlFor="phone" error={errors.phone}>
          <input id="phone" className={inputClass} {...register("phone")} />
        </FieldWrap>
      </div>
      <FieldWrap label="Ville" htmlFor="city" error={errors.city}>
        <input id="city" className={inputClass} {...register("city")} />
      </FieldWrap>
      <FieldWrap label="Programme partenaire" htmlFor="track" error={errors.track}>
        <select id="track" className={inputClass} defaultValue="" {...register("track")}>
          <option value="" disabled>
            Sélectionnez un programme
          </option>
          {partnerTracks.map((t) => (
            <option key={t.slug} value={t.title}>
              {t.title}
            </option>
          ))}
        </select>
      </FieldWrap>
      <FieldWrap label="Message (optionnel)" htmlFor="message">
        <textarea id="message" rows={4} className={inputClass} {...register("message")} />
      </FieldWrap>
      <Button type="submit" className="self-start">
        {isSubmitting ? "Envoi..." : "Envoyer ma candidature"} <Send size={16} />
      </Button>
    </form>
  );
}
