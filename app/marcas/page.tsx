import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { marcas } from "@/data/marcas";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Marcas con las que trabajamos en IKOMI Perú.",
};

export default function MarcasPage() {
  return (
    <main className="page-shell">
      <SectionTitle
        title="MARCAS"
        subtitle="Trabajamos con marcas líderes para ofrecer repuestos confiables"
      />

      <div className="card-grid four-columns">
        {marcas.map((marca) => (
          <article key={marca.name} className="brand-card">
            <div className="brand-image-wrap">
              <Image
                src={marca.image}
                alt={`Vehículo representativo de ${marca.name}`}
                width={800}
                height={600}
                sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
                className="brand-image"
              />
            </div>
            <div className="brand-body">
              <h3>{marca.name}</h3>
              <p>{marca.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
