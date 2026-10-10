"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { FieldWrap, inputClass } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Indiquez votre nom complet"),
  email: z.string().email("Adresse e-mail invalide"),
  phone: z.string().min(8, "Indiquez un numéro valide"),
  city: z.string().min(2, "Indiquez votre ville"),
  need: z.string().min(1, "Choisissez un besoin"),
  message: z.string().optional(),
  consent: z.literal(true, {
    error: "Vous devez accepter pour continuer",
  }),
});

type FormValues = z.infer<typeof schema>;

const needs = [
  "Achat d'un véhicule électrique",
  "Achat d'une moto électrique",
  "Location / paiement échelonné",
  "Flotte VTC ou livraison",
  "Installation d'une borne de recharge",
  "Installation de panneaux solaires",
  "Devenir partenaire",
  "Autre demande",
];

export function DevisForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Demande de devis IVOLT — ${data.need}`);
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nVille: ${data.city}\nBesoin: ${data.need}\n\nMessage:\n${data.message ?? "—"}`
    );
    // Event-handler side effect (form submit), not a render-phase mutation.
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:devis@ivolt.ci?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-jade/40 bg-jade/10 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto text-jade" size={36} />
        <h3 className="font-display font-bold text-xl mt-4">Votre client mail s&apos;est ouvert</h3>
        <p className="text-sm text-ink-light-muted mt-2">
          Finalisez l&apos;envoi depuis votre messagerie pour transmettre votre
          demande à notre équipe. Réponse sous 24h ouvrées.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="Nom complet" htmlFor="name" error={errors.name}>
          <input id="name" className={inputClass} placeholder="Ex. Aïcha Koné" {...register("name")} />
        </FieldWrap>
        <FieldWrap label="Téléphone" htmlFor="phone" error={errors.phone}>
          <input id="phone" className={inputClass} placeholder="+225 07 00 00 00 00" {...register("phone")} />
        </FieldWrap>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FieldWrap label="E-mail" htmlFor="email" error={errors.email}>
          <input id="email" type="email" className={inputClass} placeholder="vous@exemple.com" {...register("email")} />
        </FieldWrap>
        <FieldWrap label="Ville" htmlFor="city" error={errors.city}>
          <input id="city" className={inputClass} placeholder="Abidjan" {...register("city")} />
        </FieldWrap>
      </div>
      <FieldWrap label="Votre besoin" htmlFor="need" error={errors.need}>
        <select id="need" className={inputClass} defaultValue="" {...register("need")}>
          <option value="" disabled>
            Sélectionnez un besoin
          </option>
          {needs.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </FieldWrap>
      <FieldWrap label="Message (optionnel)" htmlFor="message">
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          placeholder="Précisez votre besoin, votre budget, vos délais..."
          {...register("message")}
        />
      </FieldWrap>
      <label className="flex items-start gap-2.5 text-xs text-ink-light-muted">
        <input type="checkbox" className="mt-0.5 accent-jade" {...register("consent")} />
        <span>
          J&apos;accepte que mes informations soient utilisées par IVOLT pour me
          recontacter, conformément à la{" "}
          <a href="/confidentialite" className="underline hover:text-indigo">
            politique de confidentialité
          </a>
          .
        </span>
      </label>
      {errors.consent && <p className="text-xs text-red-600 -mt-3">{errors.consent.message}</p>}

      <Button type="submit" className="self-start">
        {isSubmitting ? "Envoi..." : "Envoyer ma demande"} <Send size={16} />
      </Button>
    </form>
  );
}
