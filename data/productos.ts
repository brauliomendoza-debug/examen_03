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
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
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
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    specs: ["Confirmar largo y terminales", "Verificar especificación requerida", "Imagen referencial"],
  },
  {
    slug: "kit-de-embrague",
    name: "Kit de embrague",
    category: "Transmisión",
    description:
      "Referencia de ejemplo para consultar piezas del embrague y tren de transmisión.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    specs: ["Confirmar código de motor", "Verificar estrías y medidas", "Contenido por confirmar"],
  },
  {
    slug: "amortiguador",
    name: "Amortiguador",
    category: "Suspensión",
    description:
      "Referencia de ejemplo para consultar componentes de suspensión según aplicación.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    specs: ["Confirmar puntos de montaje", "Verificar dimensiones", "Aplicación por validar"],
  },
  {
    slug: "turbocompresor",
    name: "Turbo compresor",
    category: "Motor",
    description:
      "Referencia de ejemplo para consultar componentes del motor por código y aplicación.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    specs: ["Confirmar código de motor", "Verificar número de pieza", "Imagen referencial"],
  },
];
