export type Marca = {
  name: string;
  description: string;
  image: string;
};

export const marcas: Marca[] = [
  {
    name: "Mitsubishi",
    description: "Piezas para equipos de servicio pesado y flotas de transporte.",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hino",
    description: "Soluciones para camiones de carga, distribución y transporte regional.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Isuzu",
    description: "Componentes para freno, tren de rodaje y piezas de mantenimiento.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Volvo",
    description: "Repuestos de alto desempeño para equipos de larga duración y uso intensivo.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
  },
];
