import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[1.5fr_1fr_1fr] gap-12 pt-[54px] pb-12 max-[700px]:grid-cols-1 max-[700px]:gap-7 max-[700px]:pt-10 max-[700px]:pb-9">
        <div>
          <h3 className="mb-4 font-bold">IKOMI PERÚ</h3>
          <p className="text-sm leading-[1.8] text-[#c7c7c7]">
            Importadora de repuestos para camiones y equipos pesados.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Navegación</h4>
          <ul className="grid list-none gap-1.5 p-0 text-sm leading-[1.8] text-[#c7c7c7]">
            <li><Link className="hover:text-ikomi-yellow" href="/">Inicio</Link></li>
            <li><Link className="hover:text-ikomi-yellow" href="/nosotros">Nosotros</Link></li>
            <li><Link className="hover:text-ikomi-yellow" href="/servicios">Servicios</Link></li>
            <li><Link className="hover:text-ikomi-yellow" href="/productos">Productos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-bold">Contacto</h4>
          <ul className="grid list-none gap-1.5 p-0 text-sm leading-[1.8] text-[#c7c7c7]">
            <li><Link className="hover:text-ikomi-yellow" href="/contacto">Solicitar información</Link></li>
            <li><Link className="hover:text-ikomi-yellow" href="/contacto">Pedir una cotización</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#333] px-6 py-[18px] text-center text-xs text-[#bdbdbd]">
        Sitio académico de demostración · IKOMI PERÚ
      </div>
    </footer>
  );
}
