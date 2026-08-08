export default function Hero() {
  return (
    <section className="pb-10 pt-16">
      <div className="mx-auto max-w-site px-6">
        <h1 className="mb-6 max-w-[14ch] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Des matériaux fiables. Livrés à l&apos;heure.
        </h1>
        <p className="mb-7 max-w-[46ch] text-muted">
          Gravier, sable, parpaings, quincaillerie et location d&apos;engins de
          terrassement — pour les professionnels du bâtiment, les entreprises et
          les architectes qui ne peuvent pas se permettre d&apos;attendre.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="#catalogue" className="btn btn-primary">
            Parcourir le catalogue
          </a>
          <a href="#contact" className="btn btn-outline">
            Demander un devis
          </a>
        </div>
      </div>
      <hr className="section-rule" />
    </section>
  );
}
