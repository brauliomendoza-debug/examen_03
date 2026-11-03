"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
      </div>

      <div className="field-group">
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" placeholder="987 654 321" required />
      </div>

      <div className="field-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu consulta"
          rows={5}
          required
        />
      </div>

      <button type="submit" className="primary-button">
        Enviar mensaje
      </button>
      {submitted ? (
        <p role="status" className="form-status">
          Formulario validado. Esta demostración aún no envía datos a un servidor.
        </p>
      ) : null}
    </form>
  );
}
