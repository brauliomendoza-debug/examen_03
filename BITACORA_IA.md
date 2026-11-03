# BITÁCORA DE USO DE IA — ikomi-next-mendoza

Herramienta(s) usada(s): asistente IA de esta conversación

> Completa **Decisión** y **Justificación** con lo que realmente piensas. No conserves ejemplos de errores si no coinciden con lo que observaste en tu proyecto.

## Entrada 1 — 2026-11-03
- **Objetivo:** Revisar el contexto de la evaluación y recibir orientación para organizar el trabajo.
- **Prompt utilizado:** “mira el .md de contexto y ayudame hacer mi examen de manera satisfactoria”
- **Resumen de la respuesta:** Se revisó la rúbrica, las páginas requeridas, los entregables y el estado inicial del proyecto.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

## Entrada 2 — 2026-11-03
- **Objetivo:** Aclarar que la ayuda debía ser de guía y no modificar el proyecto en ese momento.
- **Prompt utilizado:** “no modifiques nada solo guiame en la creacion de todo esto”
- **Resumen de la respuesta:** Se explicó la estructura de archivos y el contenido esperado de las páginas, componentes, datos y estilos.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

## Entrada 3 — 2026-11-03
- **Objetivo:** Solicitar el detalle de la opción A, es decir, la estructura y los archivos del proyecto.
- **Prompt utilizado:** “opción A”
- **Resumen de la respuesta:** Se describió el contenido base de rutas, componentes, datos, estilos y documentación.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

## Entrada 4 — 2026-11-03
- **Objetivo:** Pedir que se prepare la implementación del sitio indicado.
- **Prompt utilizado:** “crea eso de todo lo que me diste”
- **Resumen de la respuesta:** Se crearon componentes, datos y páginas con App Router; se agregaron estilos responsive, metadata, navegación y detalle dinámico.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

## Entrada 5 — 2026-11-03
- **Objetivo:** Asegurar que el proceso incluya commits progresivos.
- **Prompt utilizado:** “espera aun falta hacer los commits”
- **Resumen de la respuesta:** Se comprobó que el repositorio tenía el commit inicial y que faltaba organizar los cambios en commits descriptivos.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

## Entrada 6 — 2026-11-03
- **Objetivo:** Continuar el trabajo después de las interrupciones de edición.
- **Prompt utilizado:** “sigue”
- **Resumen de la respuesta:** Se terminó la página de inicio y los estilos, se configuró el uso permitido de imágenes remotas y se corrigieron las imágenes y el formulario.
- **Decisión:** Completar
- **Justificación:** Completar con mis palabras.

---

## Errores de la IA detectados y corregidos

### Caso 1 — Etiquetas `<img>` en páginas
- **Qué propuso la IA:** La primera versión de la página de marcas y nosotros (y la sección de marcas de inicio) usaba etiquetas `<img>`.
- **Por qué era inadecuado:** La evaluación pide usar `next/image`. También se necesitaba declarar el host remoto permitido en `next.config.ts`.
- **ANTES:**
  ```tsx
  <img src={marca.image} alt={marca.name} className="brand-image" />
  ```
- **DESPUÉS:**
  ```tsx
  <Image
    src={marca.image}
    alt={`Vehículo representativo de ${marca.name}`}
    width={800}
    height={600}
    sizes="(max-width: 700px) 100vw, (max-width: 960px) 50vw, 25vw"
    className="brand-image"
  />
  ```
- **Explicación de la corrección:** `next/image` permite optimización y dimensiones explícitas. El dominio remoto también debe permitirse mediante `images.remotePatterns`.

### Caso 2 — Formulario sin comportamiento de envío
- **Qué propuso la IA:** La primera versión del formulario tenía un botón `submit`, pero ningún controlador para procesar el evento.
- **Por qué era inadecuado:** El formulario podía realizar un envío nativo sin que la aplicación mostrara un resultado. Como esta evaluación solo requiere la interfaz, se agregó validación del navegador y una confirmación visual, sin afirmar que los datos se envían a un servidor.
- **ANTES:**
  ```tsx
  <form className="contact-form">
    {/* campos */}
    <button type="submit">Enviar mensaje</button>
  </form>
  ```
- **DESPUÉS:**
  ```tsx
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  ```
- **Explicación de la corrección:** El componente ahora controla el evento y muestra un estado local. Para enviar mensajes de verdad todavía haría falta conectarlo a un backend o servicio.

---

## Reflexión (máx. 200 palabras)

Escribir con mis palabras: ¿qué parte entiendo mejor gracias a la IA y qué tuve que razonar o comprobar por mi cuenta? Incluir un ejemplo concreto de este proyecto.
