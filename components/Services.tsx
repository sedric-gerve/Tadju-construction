const STEPS = [
  {
    number: "01",
    title: "Livraison sur chantier",
    description:
      "Livraison directe sur site, aux volumes et délais convenus avec votre conducteur de travaux.",
  },
  {
    number: "02",
    title: "Devis sur mesure",
    description:
      "Un devis détaillé par catégorie de matériaux, ajusté à l'avancement et aux quantités réelles du chantier.",
  },
  {
    number: "03",
    title: "Location de matériel",
    description:
      "Engins de terrassement disponibles à la journée ou à la semaine, entretenus et prêts à l'emploi.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14">
      <div className="mx-auto max-w-site px-6">
        <p className="eyebrow">Nos services</p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          De la commande au chantier
        </h2>

        <ol className="border-t border-ink">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[48px_1fr] gap-x-6 gap-y-1.5 border-b border-ink py-7 sm:grid-cols-[60px_220px_1fr] sm:gap-y-0"
            >
              <span className="pt-0.5 text-sm font-bold text-red">
                {step.number}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="col-start-2 max-w-[60ch] text-sm text-muted sm:col-start-3">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
