export type Producto = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  specs: string[];
};

export const productos: Producto[] = [
  {
    slug: "disco-de-freno",
    name: "Disco de freno",
    category: "Frenos",
    price: "S/ 320",
    description:
      "Disco de freno de alto rendimiento para camiones pesados y flotas de transporte.",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    specs: ["Material: hierro fundido", "Uso: urbano y carretera", "Garantía: 6 meses"],
  },
  {
    slug: "filtro-de-aceite",
    name: "Filtro de aceite",
    category: "Filtración",
    price: "S/ 85",
    description:
      "Filtro de aceite compatible con motores de servicio pesado para mayor protección del motor.",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Alta eficiencia",
      "Compatibilidad: varios modelos",
      "Mantenimiento recomendado cada 10,000 km",
    ],
  },
  {
    slug: "manguera-de-freno",
    name: "Manguera de freno",
    category: "Sistema de freno",
    price: "S/ 180",
    description:
      "Manguera reforzada diseñada para soportar presión, vibración y desgaste constante.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    specs: ["Reforzada", "Alta resistencia térmica", "Instalación rápida"],
  },
  {
    slug: "kit-de-embrague",
    name: "Kit de embrague",
    category: "Transmisión",
    price: "S/ 980",
    description:
      "Kit completo para renovación del sistema de embrague con durabilidad y desempeño confiable.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    specs: ["Completo", "Alta fricción", "Uso pesado"],
  },
  {
    slug: "amortiguador",
    name: "Amortiguador",
    category: "Suspensión",
    price: "S/ 420",
    description:
      "Solución para mejorar el control y la estabilidad del vehículo con cargas variables.",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
    specs: ["Estabilidad", "Carga soportada", "Durabilidad mejorada"],
  },
  {
    slug: "turbocompresor",
    name: "Turbo compresor",
    category: "Motor",
    price: "S/ 1,350",
    description:
      "Componente clave para mejorar potencia, respuesta y rendimiento del motor del camión.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=1200&q=80",
    specs: ["Rendimiento optimizado", "Mayor respuesta", "Repuestos originales"],
  },
];
