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
  name: z.string().min(2, "Indiquez votre nom"),
  email: z.string().email("Adresse e-mail invalide"),
  subject: z.string().min(2, "Indiquez un sujet"),
  message: z.string().min(10, "Votre message est trop court"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    // Event-handler side effect (form submit), not a render-phase mutation.
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:contact@ivolt.ci?subject=${subject}&body=${body}`;
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
          Finalisez l&apos;envoi pour nous transmettre votre message.
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
        <FieldWrap label="E-mail" htmlFor="email" error={errors.email}>
          <input id="email" type="email" className={inputClass} {...register("email")} />
        </FieldWrap>
      </div>
      <FieldWrap label="Sujet" htmlFor="subject" error={errors.subject}>
        <input id="subject" className={inputClass} {...register("subject")} />
      </FieldWrap>
      <FieldWrap label="Message" htmlFor="message" error={errors.message}>
        <textarea id="message" rows={5} className={inputClass} {...register("message")} />
      </FieldWrap>
      <Button type="submit" className="self-start">
        {isSubmitting ? "Envoi..." : "Envoyer le message"} <Send size={16} />
      </Button>
    </form>
  );
}
