export type Marca = {
  name: string;
  description: string;
  image: string;
};

export const marcas: Marca[] = [
  {
    name: "Mitsubishi",
    description: "Piezas para equipos de servicio pesado y flotas de transporte.",
    image: "/images/marcas/mitsubishi.png",
  },
  {
    name: "Hino",
    description: "Soluciones para camiones de carga, distribución y transporte regional.",
    image: "/images/marcas/hino.png",
  },
  {
    name: "Isuzu",
    description: "Componentes para freno, tren de rodaje y piezas de mantenimiento.",
    image: "/images/marcas/izusu.png",
  },
  {
    name: "Volvo",
    description: "Repuestos de alto desempeño para equipos de larga duración y uso intensivo.",
    image: "/images/marcas/volvo.png",
  },
];
