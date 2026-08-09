export default function About() {
  return (
    <section id="apropos" className="pt-14">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="aspect-[4/3] overflow-hidden border border-ink bg-panel">
          <img
            src="/images/produits/hiro.jpg"
            alt="Dépôt Magloire & Fils à Bafoussam"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">À propos</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Un partenaire de chantier, pas un simple fournisseur
          </h2>
          <p className="max-w-[56ch] text-muted">
            Ets Magloire &amp; Fils approvisionne entreprises de construction,
            architectes et promoteurs en gravier, sable, parpaings et
            quincaillerie, et met à disposition les engins nécessaires au
            terrassement. Un seul interlocuteur, du premier mètre cube livré à
            la clôture du chantier.
          </p>
        </div>
      </div>
      <hr className="section-rule" />
    </section>
  );
}
