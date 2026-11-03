import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos",
  description: "Escríbenos para solicitar información o cotizar repuestos para tu flota.",
};

export default function ContactoPage() {
  return (
    <main className="page-shell contact-shell">
      <div className="contact-intro">
        <span className="eyebrow">IKOMI PERÚ</span>
        <h1>CONTÁCTENOS</h1>
        <p>
          Escribenos para solicitar cotizaciones, asesoría técnica o información sobre
          repuestos para tu operación.
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
