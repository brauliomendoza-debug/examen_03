import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos",
  description: "Escríbenos para solicitar información o cotizar repuestos para tu flota.",
};

export default function ContactoPage() {
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-48px))] py-16 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-12">
      <header className="mb-10 text-center">
        <span className="mb-3 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">IKOMI PERÚ</span>
        <h1 className="text-[clamp(30px,4vw,44px)] font-black text-ikomi-blue">CONTÁCTENOS</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ikomi-muted">Llene el formulario y un asesor se pondrá en contacto con usted.</p>
      </header>

      <div className="grid grid-cols-2 items-start gap-9 max-[800px]:grid-cols-1">
        <section aria-labelledby="location-heading">
          <h2 id="location-heading" className="mb-2 text-2xl font-bold text-ikomi-blue">Visítanos</h2>
          <p className="mb-4 text-sm leading-relaxed text-ikomi-muted">Avenida Nicolás Ayllón 3384, Ate, Lima, Perú</p>
          <div className="h-[360px] overflow-hidden rounded border border-[#dce1e2] bg-[#edf1f2] max-[700px]:h-[300px]" id="mapa">
            <iframe
              className="h-full w-full border-0"
              title="Mapa de ubicación de IKOMI Perú en Avenida Nicolás Ayllón 3384, Ate"
              src="https://maps.google.com/maps?cid=6203740438463707532&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            className="mt-4 inline-flex items-center gap-1 text-sm font-extrabold text-ikomi-red hover:underline"
            href="https://maps.google.com/?cid=6203740438463707532"
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section aria-label="Formulario de contacto">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
