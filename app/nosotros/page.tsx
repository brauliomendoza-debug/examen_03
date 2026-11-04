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
    image: "/images/nosotros/equipo.png",
  },
  {
    title: "Almacén",
    text: "Disponemos de almacenamiento ordenado y piezas para distintos tipos de vehículos.",
    image: "/images/nosotros/almacen.png",
  },
  {
    title: "Tienda",
    text: "Atención directa para clientes que requieren repuestos rápidos y confiables.",
    image: "/images/nosotros/tienda.png",
  },
  {
    title: "Empresa",
    text: "Más de una década apoyando al transporte y la industria con repuestos de calidad.",
    image: "/images/nosotros/empresa.png",
  },
];

export default function NosotrosPage() {
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-48px))] py-16 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-12">
      <SectionTitle
        title="NOSOTROS"
        subtitle="Empresa importadora de repuestos para camiones y equipos pesados"
      />

      <div className="grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-[700px]:grid-cols-1">
        {cards.map((card) => (
          <article key={card.title} className="overflow-hidden rounded border border-[#e5e7eb] bg-white shadow-[0_8px_25px_rgb(0_0_0/6%)]">
            <div className="overflow-hidden bg-[#f2f3f5]">
              <Image
                src={card.image}
                alt={`Vista de ${card.title.toLowerCase()} de IKOMI`}
                width={900}
                height={600}
                sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
                className="block h-[190px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-bold text-ikomi-blue">{card.title}</h3>
              <p className="text-sm leading-[1.65] text-ikomi-muted">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
