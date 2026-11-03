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

La portada usa una organización propia inspirada en la navegación de un catálogo automotriz: acceso por sistemas, orientación de compra y referencias de muestra. Los textos y la composición son originales, no una copia literal del sitio de referencia. Los productos y sus imágenes son demostrativos y se cargan desde Unsplash; reemplázalos por información y fotografías autorizadas antes de presentar la web como catálogo real.

## Evidencias

Guardar en `evidencias/` las capturas del build, el experimento `Link` vs. `<a>` y las pruebas responsive de 375 px, 768 px y 1280 px.
