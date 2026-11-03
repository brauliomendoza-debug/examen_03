import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <Image
        src="https://images.unsplash.com/photo-1605559424843-9e4c179364a4?auto=format&fit=crop&w=1600&q=80"
        alt="Repuestos y piezas para camiones"
        fill
        priority
        className="hero-image"
      />

      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Importadora de repuestos</span>
          <h1>REPUESTOS EN GENERAL</h1>
          <h2>para camiones de todas las marcas.</h2>
          <p>
            Somos una empresa importadora de repuestos con soluciones para talleres,
            transportistas y flotas que buscan rendimiento y confianza.
          </p>

          <div className="hero-actions">
            <Link href="/productos" className="primary-button">
              Ver productos
            </Link>
            <Link href="/contacto" className="secondary-button">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
