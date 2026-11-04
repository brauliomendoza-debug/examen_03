import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de repuestos para camiones, frenos, filtración y suspensión.",
};

export default function ProductosPage() {
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-48px))] py-16 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-12">
      <SectionTitle
        title="PRODUCTOS"
        subtitle="Repuestos disponibles para camiones y equipos pesados"
      />

      <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[700px]:grid-cols-1">
        {productos.map((producto, index) => (
          <ProductCard
            key={producto.slug}
            product={producto}
            eager={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
