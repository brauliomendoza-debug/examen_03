import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Repuestos para camiones y buses",
  description:
    "Explora repuestos por sistema del vehículo y solicita orientación para identificar la pieza adecuada.",
};

const systems = [
  {
    number: "01",
    name: "Motor",
    detail: "Piezas para mantenimiento y reparación del conjunto motriz.",
    href: "/productos/turbocompresor",
    icon: "⚙",
  },
  {
    number: "02",
    name: "Embrague",
    detail: "Componentes de transmisión de fuerza para distintas aplicaciones.",
    href: "/productos/kit-de-embrague",
    icon: "◉",
  },
  {
    number: "03",
    name: "Filtración",
    detail: "Filtros para acompañar los ciclos de mantenimiento del vehículo.",
    href: "/productos/filtro-de-aceite",
    icon: "▤",
  },
  {
    number: "04",
    name: "Frenos",
    detail: "Elementos del sistema de freno para revisar según modelo y versión.",
    href: "/productos/disco-de-freno",
    icon: "⦿",
  },
  {
    number: "05",
    name: "Suspensión",
    detail: "Repuestos para el soporte y control de la unidad en ruta.",
    href: "/productos/amortiguador",
    icon: "↕",
  },
  {
    number: "06",
    name: "Dirección",
    detail: "Consulta las referencias disponibles para tu sistema de dirección.",
    href: "/productos",
    icon: "↗",
  },
];

const buyingSteps = [
  {
    number: "01",
    title: "Identifica tu unidad",
    text: "Ten a la mano marca, modelo, año y, si es posible, el código de la pieza.",
  },
  {
    number: "02",
    title: "Describe lo que buscas",
    text: "Comparte la información del repuesto para orientar mejor la consulta.",
  },
  {
    number: "03",
    title: "Confirma compatibilidad",
    text: "Antes de comprar, verifica aplicación, disponibilidad y condiciones con el vendedor.",
  },
];

const featuredProducts = productos.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <Image
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=85"
          alt="Camión de carga recorriendo una carretera"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">IKOMI PERÚ · PARTES PARA TRANSPORTE</span>
            <h1>
              Cada ruta empieza
              <br />
              con la pieza correcta.
            </h1>
            <p>
              Explora repuestos para camiones y buses por sistema, y prepara tu
              consulta con los datos de tu unidad.
            </p>
            <div className="hero-actions">
              <Link href="#sistemas" className="primary-button">
                Explorar sistemas
              </Link>
              <Link href="/contacto" className="secondary-button">
                Consultar una pieza
              </Link>
            </div>
            <div className="hero-tags" aria-label="Tipos de unidades">
              <span>Camiones</span>
              <span>Buses</span>
              <span>Vehículos de trabajo</span>
            </div>
          </div>
        </div>
        <Link className="hero-scroll" href="#sistemas">
          Desliza para explorar <span aria-hidden="true">↓</span>
        </Link>
      </section>

      <section className="section-block systems-section" id="sistemas">
        <div className="container">
          <div className="section-kicker">ENCUENTRA POR SISTEMA</div>
          <SectionTitle
            title="Repuestos organizados por necesidad"
            subtitle="Empieza por el sistema del vehículo y revisa referencias de ejemplo para orientar tu búsqueda."
          />

          <div className="systems-grid">
            {systems.map((system) => (
              <Link
                key={system.number}
                href={system.href}
                className="system-card"
              >
                <span className="system-number">{system.number}</span>
                <span className="system-icon" aria-hidden="true">
                  {system.icon}
                </span>
                <h3>{system.name}</h3>
                <p>{system.detail}</p>
                <span className="system-link">
                  Ver referencia <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="demo-note">
            Las piezas mostradas son ejemplos académicos. Confirma la
            compatibilidad y disponibilidad con IKOMI antes de tomar una decisión.
          </p>
        </div>
      </section>

      <section className="brands-band" aria-labelledby="brands-heading">
        <div className="container brands-band-inner">
          <div>
            <span className="section-kicker">APLICACIONES</span>
            <h2 id="brands-heading">Consulta por marca y modelo</h2>
          </div>
          <ul className="brand-name-list" aria-label="Marcas de vehículos">
            <li>Hyundai</li>
            <li>Kia</li>
            <li>Mitsubishi</li>
            <li>Hino</li>
            <li>Isuzu</li>
            <li>Nissan</li>
          </ul>
          <p>
            La compatibilidad puede variar según la versión. Comparte los datos
            de tu unidad para confirmar la referencia.
          </p>
        </div>
      </section>

      <section className="section-block value-section">
        <div className="container value-layout">
          <div className="value-heading">
            <span className="section-kicker">UNA BÚSQUEDA MÁS CLARA</span>
            <h2>Un buen diagnóstico comienza con los datos correctos.</h2>
            <p>
              Una misma pieza puede cambiar entre modelos y años. Reunir la
              información del vehículo ayuda a hacer una consulta más precisa.
            </p>
            <Link href="/contacto" className="text-link">
              Preparar una consulta <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Indica la aplicación</h3>
                <p>Marca, modelo, año y motorización ayudan a acotar opciones.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Comparte una referencia</h3>
                <p>El código de la pieza o una foto legible puede aportar contexto.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Verifica antes de instalar</h3>
                <p>Confirma medidas, conectores y compatibilidad con el proveedor.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block featured-section">
        <div className="container">
          <div className="featured-heading">
            <div>
              <span className="section-kicker">REFERENCIAS DE MUESTRA</span>
              <h2>Explora algunas piezas</h2>
            </div>
            <Link href="/productos" className="text-link">
              Ver catálogo de demostración <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="card-grid three-columns">
            {featuredProducts.map((producto) => (
              <ProductCard key={producto.slug} product={producto} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block buying-section">
        <div className="container">
          <div className="buying-heading">
            <span className="section-kicker">ANTES DE COTIZAR</span>
            <SectionTitle
              title="Tres pasos para describir tu repuesto"
              subtitle="Una consulta clara facilita la búsqueda y la confirmación de compatibilidad."
            />
          </div>
          <div className="buying-grid">
            {buyingSteps.map((step) => (
              <article key={step.number} className="buying-step">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="container contact-banner-inner">
          <div>
            <span className="section-kicker">¿NO ENCUENTRAS LA REFERENCIA?</span>
            <h2>Cuéntanos qué unidad necesitas mantener en marcha.</h2>
            <p>
              Incluye marca, modelo y los datos de la pieza para comenzar la
              consulta.
            </p>
          </div>
          <Link href="/contacto" className="primary-button">
            Ir a contacto <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
