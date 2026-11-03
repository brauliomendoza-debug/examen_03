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
    <main className="page-shell">
      <SectionTitle
        title="PRODUCTOS"
        subtitle="Repuestos disponibles para camiones y equipos pesados"
      />

      <div className="card-grid three-columns">
        {productos.map((producto) => (
          <ProductCard key={producto.slug} product={producto} />
        ))}
      </div>
    </main>
  );
}
