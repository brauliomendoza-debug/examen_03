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
    <main className="mx-auto w-[min(1180px,calc(100%-48px))] py-16 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-12">
      <SectionTitle
        title="MARCAS"
        subtitle="Trabajamos con marcas líderes para ofrecer repuestos confiables"
      />

      <div className="grid grid-cols-4 gap-5 max-[960px]:grid-cols-2 max-[700px]:grid-cols-1">
        {marcas.map((marca, index) => (
          <article key={marca.name} className="overflow-hidden rounded border border-[#e5e7eb] bg-white shadow-[0_8px_25px_rgb(0_0_0/6%)]">
            <div className="overflow-hidden bg-[#f2f3f5]">
              <Image
                src={marca.image}
                alt={`Vehículo representativo de ${marca.name}`}
                width={800}
                height={600}
                sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
                loading={index === 0 ? "eager" : undefined}
                className="block h-[190px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-bold text-ikomi-blue">{marca.name}</h3>
              <p className="text-sm leading-[1.65] text-ikomi-muted">{marca.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
