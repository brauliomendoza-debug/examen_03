export type Producto = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
};

export const productos: Producto[] = [
  {
    slug: "disco-de-freno",
    name: "Disco de freno",
    category: "Frenos",
    description:
      "Referencia de ejemplo para consultar componentes del sistema de freno de una unidad.",
    image: "/images/productos/disco.png",
    specs: [
      "Verificar diámetro y montaje",
      "Confirmar aplicación por modelo y año",
      "Imagen referencial",
    ],
  },
  {
    slug: "filtro-de-aceite",
    name: "Filtro de aceite",
    category: "Filtración",
    description:
      "Referencia de ejemplo para ubicar filtros y componentes de mantenimiento del motor.",
    image: "/images/productos/filtro.png",
    specs: [
      "Confirmar código de pieza",
      "Verificar medidas y rosca",
      "Aplicación por validar",
    ],
  },
  {
    slug: "manguera-de-freno",
    name: "Manguera de freno",
    category: "Sistema de freno",
    description:
      "Referencia de ejemplo para solicitar componentes de conexión del sistema de freno.",
    image: "/images/productos/manguera-freno.png",
    specs: ["Confirmar largo y terminales", "Verificar especificación requerida", "Imagen referencial"],
  },
  {
    slug: "kit-de-embrague",
    name: "Kit de embrague",
    category: "Transmisión",
    description:
      "Referencia de ejemplo para consultar piezas del embrague y tren de transmisión.",
    image: "/images/productos/kit-embrague.png",
    specs: ["Confirmar código de motor", "Verificar estrías y medidas", "Contenido por confirmar"],
  },
  {
    slug: "amortiguador",
    name: "Amortiguador",
    category: "Suspensión",
    description:
      "Referencia de ejemplo para consultar componentes de suspensión según aplicación.",
    image: "/images/productos/amortiguador.png",
    specs: ["Confirmar puntos de montaje", "Verificar dimensiones", "Aplicación por validar"],
  },
  {
    slug: "turbocompresor",
    name: "Turbo compresor",
    category: "Motor",
    description:
      "Referencia de ejemplo para consultar componentes del motor por código y aplicación.",
    image: "/images/productos/turbo-compresor.png",
    specs: ["Confirmar código de motor", "Verificar número de pieza", "Imagen referencial"],
  },
];
