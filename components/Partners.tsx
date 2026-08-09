"use client";

import { useEffect, useState } from "react";

const PARTNERS = [
  { src: "/images/produits/logo-client1.jpg", alt: "Logo partenaire" },
  { src: "/images/produits/logo-client2.jpg", alt: "Logo partenaire" },
];

export default function Partners() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % PARTNERS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="partenaires" className="py-14">
      <div className="mx-auto max-w-site px-6 text-center">
        <p className="eyebrow">Partenaires</p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Ils nous font confiance
        </h2>

        <div className="relative mx-auto flex h-28 w-full max-w-xs items-center justify-center">
          {PARTNERS.map((partner, index) => (
            <img
              key={partner.src}
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {PARTNERS.map((partner, index) => (
            <button
              key={partner.src}
              type="button"
              aria-label={`Afficher le logo partenaire ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={`h-2 w-2 rounded-full border border-ink transition-colors ${
                index === active ? "bg-red" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
      <hr className="section-rule" />
    </section>
  );
}
