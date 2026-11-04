"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Repuestos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contáctenos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-ikomi-blue/95 text-white shadow-[0_3px_14px_rgb(0_0_0/14%)]">
      <div className="mx-auto flex min-h-[76px] w-[min(1180px,calc(100%-48px))] items-center justify-between gap-6 max-[700px]:min-h-[68px] max-[700px]:w-[calc(100%-36px)]">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-extrabold tracking-wider"
          aria-label="IKOMI Perú inicio"
        >
          <span className="grid h-[38px] w-11 place-items-center border-b-[3px] border-ikomi-red text-[19px] font-black tracking-[-0.08em]">
            IKM
          </span>
          <span className="text-[15px]">IKOMI PERÚ</span>
        </Link>

        <button
          type="button"
          className="hidden cursor-pointer border-0 bg-transparent text-[26px] text-white max-[700px]:block"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>

        <nav
          aria-label="Navegación principal"
          className={`flex items-center gap-6 max-[960px]:gap-3.5 max-[700px]:absolute max-[700px]:top-[68px] max-[700px]:right-0 max-[700px]:left-0 max-[700px]:items-stretch max-[700px]:flex-col max-[700px]:gap-0 max-[700px]:bg-ikomi-blue max-[700px]:px-[18px] max-[700px]:pt-2 max-[700px]:pb-4 ${open ? "max-[700px]:flex" : "max-[700px]:hidden"}`}
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-4 border-transparent py-6 text-[13px] font-bold transition-colors hover:border-ikomi-yellow hover:text-ikomi-yellow max-[960px]:text-xs max-[700px]:border-b-2 max-[700px]:px-1 max-[700px]:py-3 ${isActive ? "border-ikomi-yellow text-ikomi-yellow" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
