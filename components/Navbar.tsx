"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contáctenos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="IKOMI Perú inicio">
          <span className="brand-mark">IKM</span>
          <span className="brand-text">IKOMI PERÚ</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>

        <nav className={open ? "nav-menu open" : "nav-menu"}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link active" : "nav-link"}
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
