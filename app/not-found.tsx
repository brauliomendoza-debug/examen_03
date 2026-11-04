import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[55vh] place-items-center px-6 py-16">
      <div className="max-w-[600px] text-center">
        <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-ikomi-yellow">IKOMI PERÚ</span>
        <h1 className="my-2 text-[96px] leading-none font-black text-ikomi-blue">404</h1>
        <h2 className="mb-3 text-2xl font-bold">Página no encontrada</h2>
        <p className="mb-7 text-sm leading-relaxed text-ikomi-muted">La ruta que intentas visitar no existe o fue movida.</p>
        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828]">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
