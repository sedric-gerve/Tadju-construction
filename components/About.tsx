import ImagePlaceholder from "./ImagePlaceholder";

export default function About() {
  return (
    <section id="apropos" className="pt-14">
      <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2.5 border border-ink bg-panel p-4 text-center text-muted">
          <ImagePlaceholder className="h-10 w-10" />
          <span className="text-sm">Dépôt Magloire &amp; Fils — Bafoussam</span>
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
