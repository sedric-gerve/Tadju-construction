export default function CtaBanner() {
  return (
    <section className="bg-red py-12">
      <div className="mx-auto flex max-w-site flex-col items-start gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Un chantier à équiper ?
        </h2>
        <a href="#contact" className="btn btn-outline-light">
          Demander un devis
        </a>
      </div>
    </section>
  );
}
