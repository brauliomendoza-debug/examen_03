"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="grid gap-[18px] rounded border border-[#e5e7eb] bg-white p-7 shadow-[0_8px_25px_rgb(0_0_0/5%)]" onSubmit={handleSubmit}>
      <div className="grid gap-[7px]">
        <label htmlFor="nombre" className="text-[13px] font-bold">Nombre</label>
        <input className="w-full rounded-sm border border-[#d1d5db] bg-white px-3.5 py-3 focus:border-ikomi-blue-light focus:outline-2 focus:outline-ikomi-blue-light/20" id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
      </div>

      <div className="grid gap-[7px]">
        <label htmlFor="email" className="text-[13px] font-bold">Correo</label>
        <input
          className="w-full rounded-sm border border-[#d1d5db] bg-white px-3.5 py-3 focus:border-ikomi-blue-light focus:outline-2 focus:outline-ikomi-blue-light/20"
          id="email"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div className="grid gap-[7px]">
        <label htmlFor="telefono" className="text-[13px] font-bold">Teléfono</label>
        <input className="w-full rounded-sm border border-[#d1d5db] bg-white px-3.5 py-3 focus:border-ikomi-blue-light focus:outline-2 focus:outline-ikomi-blue-light/20" id="telefono" name="telefono" type="tel" placeholder="987 654 321" required />
      </div>

      <div className="grid gap-[7px]">
        <label htmlFor="mensaje" className="text-[13px] font-bold">Mensaje</label>
        <textarea
          className="w-full rounded-sm border border-[#d1d5db] bg-white px-3.5 py-3 focus:border-ikomi-blue-light focus:outline-2 focus:outline-ikomi-blue-light/20"
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu consulta"
          rows={5}
          required
        />
      </div>

      <button type="submit" className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828]">
        Enviar mensaje
      </button>
      {submitted ? (
        <p role="status" className="m-0 text-sm font-bold text-[#177245]">
          Formulario validado. Esta demostración aún no envía datos a un servidor.
        </p>
      ) : null}
    </form>
  );
}
