import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre IKOMI Perú y nuestra historia como importadora de repuestos.",
};

const cards = [
  {
    title: "Equipo",
    text: "Un equipo orientado a brindar soluciones técnicas para flotas y talleres.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Almacén",
    text: "Disponemos de almacenamiento ordenado y piezas para distintos tipos de vehículos.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tienda",
    text: "Atención directa para clientes que requieren repuestos rápidos y confiables.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Empresa",
    text: "Más de una década apoyando al transporte y la industria con repuestos de calidad.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
];

export default function NosotrosPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        title="NOSOTROS"
        subtitle="Empresa importadora de repuestos para camiones y equipos pesados"
      />

      <div className="card-grid four-columns">
        {cards.map((card) => (
          <article key={card.title} className="info-card">
            <div className="info-card-image-wrap">
              <Image
                src={card.image}
                alt={`Vista de ${card.title.toLowerCase()} de IKOMI`}
                width={900}
                height={600}
                sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
                className="info-card-image"
              />
            </div>
            <div className="info-card-body">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
