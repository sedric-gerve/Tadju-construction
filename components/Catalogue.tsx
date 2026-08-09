const PRODUCTS = [
  {
    tag: "Agrégats",
    title: "Gravier & Sable",
    description:
      "Gravillons, sable de construction et de remblai, livrés en vrac ou en big bag selon le volume du chantier.",
    image: "/images/produits/agregats-gravier-sable.jpg",
    imageAlt: "Gravier et sable de construction empilés sur chantier",
  },
  {
    tag: "Gros œuvre",
    title: "Parpaings",
    description:
      "Blocs standard, blocs d'angle et de chaînage, toutes dimensions courantes, disponibles en stock.",
    image: "/images/produits/gros-oeuvre-parpaings.jpg",
    imageAlt: "Parpaings empilés sur chantier",
  },
  {
    tag: "Terrassement",
    title: "Location d'engins & Terrassement",
    description:
      "Pelles, tractopelles et engins de terrassement, avec ou sans opérateur, pour la préparation de vos chantiers.",
    image: "/images/produits/terrassement-location-engins.jpg",
    imageAlt: "Engin de terrassement en action",
  },
  {
    tag: "Second œuvre",
    title: "Quincaillerie",
    description:
      "Fers à béton, visserie, outillage et consommables de chantier pour toutes les étapes du gros œuvre.",
    image: "/images/produits/second-oeuvre-quincaillerie.jpg",
    imageAlt: "Quincaillerie et outillage de chantier",
  },
];

export default function Catalogue() {
  return (
    <section id="catalogue" className="pt-14">
      <div className="mx-auto max-w-site px-6">
        <p className="eyebrow">Notre catalogue</p>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Quatre familles de produits
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article key={product.title} className="flex flex-col">
              <div className="mb-4 aspect-[16/10] overflow-hidden border border-ink bg-panel">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-red">
                {product.tag}
              </p>
              <h3 className="mb-2 text-lg font-bold">{product.title}</h3>
              <p className="text-sm text-muted">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
      <hr className="section-rule" />
    </section>
  );
}
