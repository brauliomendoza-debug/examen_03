import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>IKOMI PERÚ</h3>
          <p>
            Importadora de repuestos para camiones y equipos pesados.
          </p>
        </div>

        <div>
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/productos">Productos</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li><Link href="/contacto">Solicitar información</Link></li>
            <li><Link href="/contacto">Pedir una cotización</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 IKOMI PERÚ — Repuestos de Korea y Japón
      </div>
    </footer>
  );
}
