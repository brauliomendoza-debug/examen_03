# IKOMI PERÚ — Sitio corporativo con Next.js

**Autor:** Mendoza Santos, Braulio Rodolfo  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Demo desplegada:** pendiente de despliegue  
**Repositorio:** agregar URL de GitHub

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para compilar y servir la versión de producción:

```bash
npm run build
npm start
```

## Rutas

- `/` — Inicio
- `/nosotros` — Información de la empresa
- `/servicios` — Servicios
- `/productos` — Catálogo
- `/productos/[slug]` — Detalle de un producto
- `/marcas` — Marcas
- `/contacto` — Formulario visual de contacto
- Ruta inexistente — Página 404 personalizada

## Árbol de componentes (S = Server, C = Client)

```text
RootLayout (S)
├─ Navbar (C) — ruta activa y menú responsive
├─ {children}
│  ├─ HomePage (S)
│  │  ├─ Hero (S)
│  │  ├─ SectionTitle (S)
│  │  └─ ProductCard (S)
│  ├─ NosotrosPage (S)
│  ├─ ServiciosPage (S)
│  ├─ ProductosPage (S)
│  ├─ ProductDetailPage (S)
│  ├─ MarcasPage (S)
│  └─ ContactoPage (S)
│     └─ ContactForm (C) — validación visual del formulario
├─ Footer (S)
└─ NotFound (S)
```

## Datos e imágenes

Los productos, precios, descripciones e imágenes son datos de demostración. Las imágenes se cargan desde Unsplash. Para la entrega, reemplázalos por información y fotografías autorizadas y representativas de IKOMI; evita presentar contenido de muestra como información oficial.

## Evidencias

Guardar en `evidencias/` las capturas del build, el experimento `Link` vs. `<a>` y las pruebas responsive de 375 px, 768 px y 1280 px.
