import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de asesoría, importación y soporte para flotas y talleres.",
};

export default function ServiciosPage() {
  return (
    <main className="page-shell dark-section">
      <SectionTitle
        title="SERVICIOS"
        subtitle="Estamos listos para atender tus necesidades de repuestos y mantenimiento"
      />

      <div className="card-grid four-columns">
        {servicios.map((servicio) => (
          <article key={servicio.title} className="service-card">
            <div className="service-icon">{servicio.icon}</div>
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
