# DECISIONES — ikomi-next-mendoza

## 1. Configuración del proyecto

| Opción elegida | Alternativa descartada | Justificación |
|---|---|---|

| TypeScript | JavaScript |

 Me ayuda a detectar errores y a comprobar que los datos que pasan a componentes, como los productos, tengan la forma esperada.


| Tailwind CSS 4 | CSS Modules o Bootstrap |


 Elegí Tailwind porque puedo aplicar estilos con clases directamente en los elementos, de una forma parecida al CSS. En este proyecto las clases también me permiten definir el diseño responsive en las páginas y componentes.
| Sin carpeta `src/` | Colocar la aplicación dentro de `src/` |


 Mantuve `app/` en la raíz para seguir la estructura creada para el proyecto y encontrar directamente las rutas y archivos principales.


| App Router | Pages Router |


App Router organiza las rutas en archivos y permite crear el catálogo y las páginas de detalle de productos mediante segmentos dinámicos.


| ESLint activado | Desarrollar sin ESLint |


Lo uso para ayudar a encontrar problemas en el código mientras desarrollo. |

## 2. Funcionamiento básico

- `app/layout.tsx`: contiene la estructura común de las páginas, incluidos Navbar y Footer.
- `app/page.tsx`: representa la página de inicio (`/`).
- `public/`: guarda recursos estáticos del proyecto, como imágenes o archivos que se sirven directamente.
- `next.config.ts`: contiene ajustes de Next.js; en este proyecto conserva la configuración de Turbopack necesaria para procesar Tailwind CSS.
- Scripts:
  - `dev`: inicia la aplicación en modo desarrollo para trabajar y probarla localmente.
  - `build`: compila y prepara una versión optimizada para producción; también permite detectar errores antes de publicarla.
  - `start`: inicia la versión de producción que ya se preparó con `build`.

## 3. Next.js frente a una SPA para IKOMI

Considero útil que el servidor pueda entregar el contenido HTML de las páginas desde el inicio para que los buscadores puedan leer mejor el catálogo. Por ejemplo, la página de un producto puede tener su propio título y descripción.

## 4. Rutas y layouts

La ruta `/` muestra Home. `/productos` muestra el catálogo, y una URL como `/productos/disco-de-freno` muestra un producto concreto. Si el slug no existe, la aplicación muestra una página 404. La ruta de detalle usa `generateMetadata` para preparar el título y la descripción de cada producto.

Las páginas comparten Navbar y Footer porque su contenido se mantiene igual en todo el sitio. Así reutilizo la misma estructura y mantengo una presentación consistente; compartir el layout no garantiza por sí solo que la página cargue más rápido.

## 5. Componentes de servidor y cliente

- El Navbar es Client Component porque necesita abrir el menú móvil y resaltar la ruta actual.
- El Footer puede ser Server Component: muestra contenido y enlaces, pero no necesita estado ni interacción propia.
- Las páginas que solo muestran información y no necesitan interacciones pueden quedarse como Server Components; no hace falta agregar `"use client"` a todas.

## 6. Navegación: `Link` vs. `<a>`

Al hacer clic en un `Link` del menú, observé que la página cambia sin recargar todo el documento. Para comparar, lo reemplacé temporalmente por `<a>`; en ese caso la página se recargó y Network mostró una solicitud de tipo `document`. Restauré el `Link` después de la prueba.

**Pendiente:** guardar una captura de Network como evidencia.

## 7. Estilos, imágenes y fuente

- Uso clases utilitarias de Tailwind en las páginas y componentes para definir su distribución, espaciado, tipografía y comportamiento responsive.
- En `app/globals.css` importo Tailwind y defino el tema compartido de colores y tipografía. Por ejemplo, `bg-ikomi-blue` aplica el color del navbar.
- Uso `Image` de `next/image` para ayudar a optimizar la carga y presentación de imágenes locales guardadas en `public/images/`.
- Uso `next/font` con Raleway para cargar y optimizar la tipografía.

## 8. Animación

Al pasar el cursor sobre una tarjeta de sistema en Inicio, la tarjeta se eleva un poco y muestra una sombra. Esto ayuda al cliente a identificar con más claridad la opción sobre la que está el cursor.

## 9. Diseño adaptable

En pantallas pequeñas, las tarjetas del catálogo se muestran en una sola columna para que sea más fácil entender la aplicación.
