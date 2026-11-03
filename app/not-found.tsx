import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-card">
        <span className="eyebrow">IKOMI PERÚ</span>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>La ruta que intentas visitar no existe o fue movida.</p>
        <Link href="/" className="primary-button">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
