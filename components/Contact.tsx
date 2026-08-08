"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-10 px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Demander un devis
          </h2>
          <form onSubmit={handleSubmit} className="flex max-w-[420px] flex-col gap-3.5">
            <label htmlFor="name" className="-mb-2 text-sm font-semibold">
              Nom / Entreprise
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ets Dupont Construction"
              className="rounded-sm border border-ink bg-white px-3 py-2.5 focus:outline focus:outline-2 focus:outline-red"
            />

            <label htmlFor="phone" className="-mb-2 text-sm font-semibold">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+237 6 99 99 10 17"
              className="rounded-sm border border-ink bg-white px-3 py-2.5 focus:outline focus:outline-2 focus:outline-red"
            />

            <label htmlFor="details" className="-mb-2 text-sm font-semibold">
              Détails du chantier
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              placeholder="Quantité, type de matériaux, adresse de livraison..."
              className="resize-y rounded-sm border border-ink bg-white px-3 py-2.5 focus:outline focus:outline-2 focus:outline-red"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary mt-1 self-start disabled:opacity-60"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer la demande"}
            </button>

            <p className="min-h-[1.2em] text-sm text-red" role="status">
              {status === "sent" &&
                "Merci, votre demande a bien été enregistrée. Nous vous recontacterons rapidement."}
              {status === "error" &&
                "Une erreur est survenue. Merci de réessayer ou de nous appeler directement."}
            </p>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="eyebrow">Dépôt</p>
            <p className="text-[0.92rem]">
              Zone industrielle, Bafoussam
              <br />
              Région de l&apos;Ouest, Cameroun
            </p>
          </div>
          <div>
            <p className="eyebrow">Téléphone</p>
            <p className="text-[0.92rem]">
              <a href="tel:+237699991017" className="hover:text-red">
                +237 699 99 10 17
              </a>
              <br />
              <a href="tel:+237676572294" className="hover:text-red">
                +237 676 57 22 94
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Horaires</p>
            <p className="text-[0.92rem]">Lundi – Samedi, 7h30 – 18h00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
