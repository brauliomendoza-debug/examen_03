import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[min(730px,84vh)] items-center overflow-hidden bg-[#152c36] text-white">
      <Image
        src="/images/nosotros/empresa.png"
        alt="Camión de carga en carretera"
        fill
        priority
        className="z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(13_34_43/78%)_0%,rgb(13_34_43/54%)_55%,rgb(13_34_43/20%)_100%),linear-gradient(0deg,rgb(13_34_43/40%),transparent_48%)]" />
      <div className="relative z-[2] mx-auto flex w-[min(1180px,calc(100%-48px))] justify-start py-20 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-16">
        <div className="max-w-[700px] text-left">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-ikomi-yellow">Importadora de repuestos</span>
          <h1 className="mt-5 mb-1 text-[clamp(44px,6.6vw,82px)] leading-[1.02] font-black max-[420px]:text-[42px]">REPUESTOS EN GENERAL</h1>
          <h2 className="text-[clamp(20px,3vw,34px)] font-medium">para camiones de todas las marcas.</h2>
          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-white/85">
            Somos una empresa importadora de repuestos con soluciones para talleres,
            transportistas y flotas que buscan rendimiento y confianza.
          </p>

          <div className="mt-[30px] flex justify-start gap-3 max-[700px]:flex-wrap max-[420px]:flex-col max-[420px]:items-stretch">
            <Link href="/productos" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828] max-[420px]:w-full">
              Ver productos
            </Link>
            <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-white/55 bg-transparent px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/15 max-[420px]:w-full">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
