import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { marcas } from "@/data/marcas";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "IKOMI Perú, importadora de repuestos para camiones y equipos pesados.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section-block light-section">
        <div className="container">
          <SectionTitle
            title="SERVICIOS"
            subtitle="Soluciones para flotas, talleres y mantenimiento industrial"
          />
          <div className="card-grid four-columns">
            {servicios.map((servicio) => (
              <article key={servicio.title} className="service-card">
                <div className="service-icon" aria-hidden="true">
                  {servicio.icon}
                </div>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionTitle
            title="PRODUCTOS DESTACADOS"
            subtitle="Repuestos de calidad para camiones y equipos pesados"
          />
          <div className="card-grid three-columns">
            {productos.slice(0, 3).map((producto) => (
              <ProductCard key={producto.slug} product={producto} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block dark-section">
        <div className="container">
          <SectionTitle
            title="MARCAS"
            subtitle="Trabajamos con marcas reconocidas en el rubro"
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
        </div>
      </section>
    </main>
  );
}
