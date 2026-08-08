import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ets Magloire & Fils — Matériaux de construction à Bafoussam",
  description:
    "Gravier, sable, parpaings, quincaillerie et location d'engins de terrassement à Bafoussam. Livraison sur chantier, devis sur mesure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
