"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#catalogue", label: "Catalogue" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-bg">
      <div className="mx-auto flex max-w-site items-center gap-8 px-6 py-4">
        <a href="#top" className="mr-auto text-sm font-extrabold tracking-wider">
          MAGLOIRE &amp; FILS
        </a>

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-ink bg-bg md:static md:flex md:flex-row md:gap-7 md:border-none`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-t border-ink px-6 py-4 text-sm hover:text-red md:border-none md:px-0 md:py-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hidden !px-4 !py-2.5 text-[0.85rem] md:inline-block">
          Demander un devis
        </a>

        <button
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-2 flex h-8 w-8 flex-col justify-center gap-1.5 md:hidden"
        >
          <span className="block h-0.5 w-full bg-ink" />
          <span className="block h-0.5 w-full bg-ink" />
          <span className="block h-0.5 w-full bg-ink" />
        </button>
      </div>
    </header>
  );
}
