export type Servicio = {
  title: string;
  description: string;
  icon: string;
};

export const servicios: Servicio[] = [
  {
    title: "Asesoría técnica",
    description:
      "Recomendamos la pieza correcta según la marca, modelo, condición de uso y necesidades de la flota.",
    icon: "🔧",
  },
  {
    title: "Importación directa",
    description:
      "Trabajamos con proveedores internacionales para ofrecer repuestos con calidad y disponibilidad competitiva.",
    icon: "📦",
  },
  {
    title: "Atención a flotas",
    description:
      "Brindamos soporte constante a transportistas, talleres y empresas que manejan camiones pesados.",
    icon: "🚚",
  },
  {
    title: "Ventas por catálogo",
    description:
      "Mantenemos un portafolio de repuestos para frenos, filtro, embrague, suspensión y motor.",
    icon: "🧰",
  },
];
