# BITÁCORA DE USO DE IA — ikomi-next-mendoza

Herramienta(s) usada(s): asistente IA de esta conversación, copilot, gpt-luna

> Completa **Decisión** y **Justificación** con lo que realmente piensas. No conserves ejemplos de errores si no coinciden con lo que observaste en tu proyecto.

## Entrada 1 — 2026-11-03
- **Objetivo:** Revisar el contexto de la evaluación y recibir orientación para organizar el trabajo.
- **Prompt utilizado:** “mira el .md de contexto y ayudame hacer mi examen de manera satisfactoria”
- **Resumen de la respuesta:** Se revisó la rúbrica, las páginas requeridas, los entregables y el estado inicial del proyecto.
- **Decisión:** Aceptado
- **Justificación:** La usé como orientación, pero decidí hacer el trabajo paso a paso.

## Entrada 2 — 2026-11-03
- **Objetivo:** Aclarar que la ayuda debía ser de guía y no modificar el proyecto en ese momento.
- **Prompt utilizado:** “no modifiques nada solo guiame en la creacion de todo esto”
- **Resumen de la respuesta:** Se explicó la estructura de archivos y el contenido esperado de las páginas, componentes, datos y estilos.
- **Decisión:** Aceptado
- **Justificación:** Quería mantener el control de los cambios y decidir qué hacer.

## Entrada 3 — 2026-11-03
- **Objetivo:** Solicitar el detalle de la opción A, es decir, la estructura y los archivos del proyecto.
- **Prompt utilizado:** “opción A”
- **Resumen de la respuesta:** Se describió el contenido base de rutas, componentes, datos, estilos y documentación.
- **Decisión:** Aceptado
- **Justificación:** Elegí la opción para ver las carpetas y archivos necesarios.

## Entrada 4 — 2026-11-03
- **Objetivo:** Pedir que se prepare la implementación del sitio indicado.
- **Prompt utilizado:** “crea eso de todo lo que me diste”
- **Resumen de la respuesta:** Se crearon componentes, datos y páginas con App Router; se agregaron estilos responsive, metadata, navegación y detalle dinámico.
- **Decisión:** Modificado
- **Justificación:** Quería ver cómo quedaba la implementación y, a partir de eso, decidir qué cambios pedir.

## Entrada 5 — 2026-11-03
- **Objetivo:** Asegurar que el proceso incluya commits progresivos.
- **Prompt utilizado:** “espera aun falta hacer los commits”
- **Resumen de la respuesta:** Se organizaron los cambios iniciales en ocho commits progresivos con mensajes descriptivos en español y se subieron a GitHub. Los cambios hechos después de esos commits todavía están pendientes de registrar.
- **Decisión:** Aceptado
- **Justificación:** Quería mostrar el avance del trabajo por partes y saber qué cambios hice en cada etapa.

## Entrada 6 — 2026-11-03
- **Objetivo:** Agregar el mapa de ubicación a la página de contacto.
- **Prompt utilizado:** “en la parte de contactano puedes agregar el mapa”
- **Resumen de la respuesta:** Se añadió un mapa incrustado de Google Maps para la dirección publicada de IKOMI, con enlace para abrir las indicaciones.
- **Decisión:** Aceptado
- **Justificación:** Lo agregué como un elemento decorativo en la página de contacto.

---

## Errores de la IA detectados y corregidos

### Caso 1 — URL de imagen que devolvía 404
- **Qué propuso la IA:** Algunas imágenes de Unsplash usaban URL que no cargaban.
- **Por qué era inadecuado:** La imagen del hero y la del turbocompresor no se podían mostrar porque sus URL devolvían 404.
- **ANTES:**
  ```tsx
  src="https://images.unsplash.com/photo-1605559424843-9e4c179364a4?auto=format&fit=crop&w=1600&q=80"
  ```
- **DESPUÉS:**
  ```tsx
  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
  ```
- **Explicación de la corrección:** Se reemplazó la URL que fallaba por otra imagen que sí cargaba. También se corrigió la URL de imagen del turbocompresor en los datos de productos.

---

## Reflexión (máx. 200 palabras)

Aprendí que con `Link` no se recarga toda la página y con `<a>` se vuelve a cargar toda la página. Lo comprobé mirando Network durante la prueba.
