export default function Footer() {
  return (
    <footer className="py-7">
      <div className="mx-auto max-w-site px-6">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Ets Magloire &amp; Fils. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
