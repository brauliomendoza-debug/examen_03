import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios de asesoría, importación y soporte para flotas y talleres.",
};

export default function ServiciosPage() {
  return (
    <main className="bg-ikomi-dark px-0 py-16 text-white max-[700px]:py-12">
      <SectionTitle
        title="SERVICIOS"
        subtitle="Estamos listos para atender tus necesidades de repuestos y mantenimiento"
        tone="dark"
      />

      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-4 gap-4 max-[960px]:grid-cols-2 max-[700px]:w-[calc(100%-36px)] max-[700px]:grid-cols-1">
        {servicios.map((servicio) => (
          <article key={servicio.title} className="min-h-[210px] border border-white/10 bg-ikomi-dark-card p-7 transition hover:-translate-y-1 hover:border-ikomi-yellow">
            <div className="mb-5 text-3xl text-ikomi-yellow">{servicio.icon}</div>
            <h3 className="mb-2 text-xl font-bold">{servicio.title}</h3>
            <p className="text-sm leading-[1.7] text-white/75">{servicio.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
