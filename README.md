# IKOMI PERÚ — Sitio corporativo con Next.js

**Autor:** Mendoza Santos, Braulio Rodolfo  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Demo desplegada:** pendiente de despliegue en Render
**Repositorio:** https://github.com/brauliomendoza-debug/examen_03

## Despliegue en Render

El archivo `render.yaml` configura un servicio web de Node.js con el comando de compilación `npm ci && npm run build`, el comando de inicio `npm run start` y una comprobación de salud en `/`.

Para desplegar:

1. Confirma los cambios y súbelos a la rama `master` de GitHub.
2. En Render, selecciona **New +** → **Blueprint** y conecta el repositorio `brauliomendoza-debug/examen_03`.
3. Render leerá `render.yaml`; revisa la configuración y crea el servicio.
4. Cuando termine la compilación, abre la URL que Render asigna y actualiza aquí **Demo desplegada**.

No se requieren variables de entorno para esta versión.

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

La portada usa una organización propia inspirada en la navegación de un catálogo automotriz: acceso por sistemas, orientación de compra y referencias de muestra. Los textos y la composición son originales, no una copia literal del sitio de referencia. Las imágenes se sirven desde `public/images/` con los nombres de archivo descargados:

- `productos/disco.png`, `productos/filtro.png`, `productos/manguera-freno.png`, `productos/kit-embrague.png`, `productos/amortiguador.png` y `productos/turbo-compresor.png`
- `marcas/mitsubishi.png`, `marcas/hino.png`, `marcas/izusu.png` y `marcas/volvo.png`
- `nosotros/equipo.png`, `nosotros/almacen.png`, `nosotros/tienda.png` y `nosotros/empresa.png`

Usa imágenes que tengas permiso de utilizar y reemplaza los ejemplos por contenido autorizado antes de presentar la web como catálogo real.

Por ahora, el hero reutiliza `nosotros/empresa.png` hasta que se agregue una imagen específica para esa sección.

## Evidencias

En `evidencias/` están la captura del build y capturas de las páginas Productos, Servicios, Nosotros, Marcas y Contacto a 375 px, 768 px y 1280 px. Falta guardar una captura clara de Network que compare las navegaciones con `Link` y `<a>`.
