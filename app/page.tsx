import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Repuestos para camiones y buses",
  description:
    "Explora repuestos por sistema del vehículo y solicita orientación para identificar la pieza adecuada.",
};

const systems = [
  {
    number: "01",
    name: "Motor",
    detail: "Piezas para mantenimiento y reparación del conjunto motriz.",
    product: "turbocompresor",
    icon: "⚙",
  },
  {
    number: "02",
    name: "Embrague",
    detail: "Componentes de transmisión de fuerza para distintas aplicaciones.",
    product: "kit-de-embrague",
    icon: "◉",
  },
  {
    number: "03",
    name: "Filtración",
    detail: "Filtros para acompañar los ciclos de mantenimiento del vehículo.",
    product: "filtro-de-aceite",
    icon: "▤",
  },
  {
    number: "04",
    name: "Frenos",
    detail: "Elementos del sistema de freno para revisar según modelo y versión.",
    product: "disco-de-freno",
    icon: "⦿",
  },
  {
    number: "05",
    name: "Suspensión",
    detail: "Repuestos para el soporte y control de la unidad en ruta.",
    product: "amortiguador",
    icon: "↕",
  },
  {
    number: "06",
    name: "Dirección",
    detail: "Consulta las referencias disponibles para tu sistema de dirección.",
    product: "manguera-de-freno",
    icon: "↗",
  },
];

const buyingSteps = [
  {
    number: "01",
    title: "Identifica tu unidad",
    text: "Ten a la mano marca, modelo, año y, si es posible, el código de la pieza.",
  },
  {
    number: "02",
    title: "Describe lo que buscas",
    text: "Comparte la información del repuesto para orientar mejor la consulta.",
  },
  {
    number: "03",
    title: "Confirma compatibilidad",
    text: "Antes de comprar, verifica aplicación, disponibilidad y condiciones con el vendedor.",
  },
];

const featuredProducts = productos.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[min(730px,84vh)] items-center overflow-hidden bg-[#152c36] text-white max-[700px]:min-h-[640px]">
        <Image
          src="/images/nosotros/empresa.png"
          alt="Camión de carga recorriendo una carretera"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(13_34_43/78%)_0%,rgb(13_34_43/54%)_55%,rgb(13_34_43/20%)_100%),linear-gradient(0deg,rgb(13_34_43/40%),transparent_48%)]" />
        <div className="relative z-[2] mx-auto flex w-[min(1180px,calc(100%-48px))] justify-start py-20 max-[700px]:w-[calc(100%-36px)] max-[700px]:py-16">
          <div className="max-w-[700px] text-left">
            <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-ikomi-yellow">IKOMI PERÚ · PARTES PARA TRANSPORTE</span>
            <h1 className="mt-5 mb-1 text-[clamp(44px,6.6vw,82px)] leading-[1.02] font-black max-[420px]:text-[42px]">
              Cada ruta empieza
              <br />
              con la pieza correcta.
            </h1>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-white/85">
              Explora repuestos para camiones y buses por sistema, y prepara tu
              consulta con los datos de tu unidad.
            </p>
            <div className="mt-[30px] flex justify-start gap-3 max-[700px]:flex-wrap max-[420px]:flex-col max-[420px]:items-stretch">
              <Link href="#sistemas" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828] max-[420px]:w-full">
                Explorar sistemas
              </Link>
              <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-white/55 bg-transparent px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/15 max-[420px]:w-full">
                Consultar una pieza
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5" aria-label="Tipos de unidades">
              <span className="rounded-full border border-white/35 px-3 py-2 text-[11px] tracking-[0.08em] text-white/90 uppercase">Camiones</span>
              <span className="rounded-full border border-white/35 px-3 py-2 text-[11px] tracking-[0.08em] text-white/90 uppercase">Buses</span>
              <span className="rounded-full border border-white/35 px-3 py-2 text-[11px] tracking-[0.08em] text-white/90 uppercase">Vehículos de trabajo</span>
            </div>
          </div>
        </div>
        <a className="absolute right-[max(24px,calc((100vw-1180px)/2))] bottom-[30px] z-[3] flex items-center gap-3 text-[11px] tracking-[0.1em] text-white/80 uppercase max-[700px]:right-[18px] max-[700px]:bottom-5" href="#sistemas">
          Desliza para explorar <span className="text-xl text-ikomi-yellow" aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="bg-ikomi-light py-20 max-[700px]:py-14" id="sistemas">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[700px]:w-[calc(100%-36px)]">
          <div className="mb-3 text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">ENCUENTRA POR SISTEMA</div>
          <SectionTitle
            title="Repuestos organizados por necesidad"
            subtitle="Empieza por el sistema del vehículo y revisa referencias de ejemplo para orientar tu búsqueda."
          />

          <div className="grid grid-cols-3 gap-3.5 max-[960px]:grid-cols-2 max-[700px]:grid-cols-1">
            {systems.map((system) => (
              <Link
                key={system.number}
                href={`/productos/${system.product}`}
                className="group relative flex min-h-[255px] flex-col items-start border border-[#e1e2dc] bg-white p-7 transition hover:-translate-y-1 hover:border-ikomi-red hover:shadow-[0_15px_34px_rgb(21_55_68/10%)]"
              >
                <span className="absolute top-6 right-6 text-[11px] font-extrabold tracking-[0.1em] text-[#a4adae]">{system.number}</span>
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#edf1ed] text-[23px] text-ikomi-blue" aria-hidden="true">
                  {system.icon}
                </span>
                <h3 className="mb-2 text-[21px] font-bold text-ikomi-blue">{system.name}</h3>
                <p className="mb-[22px] text-[13px] leading-[1.65] text-ikomi-muted">{system.detail}</p>
                <span className="mt-auto text-xs font-extrabold text-ikomi-red">
                  Ver referencia <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-[22px] max-w-[760px] text-center text-xs leading-relaxed text-ikomi-muted">
            Las piezas mostradas son ejemplos académicos. Confirma la
            compatibilidad y disponibilidad con IKOMI antes de tomar una decisión.
          </p>
        </div>
      </section>

      <section className="bg-[#e8e9e2] py-12" aria-labelledby="brands-heading">
        <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[0.9fr_1.4fr] items-center gap-x-14 gap-y-[18px] max-[760px]:grid-cols-1 max-[700px]:w-[calc(100%-36px)]">
          <div>
            <span className="mb-2 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">APLICACIONES</span>
            <h2 id="brands-heading" className="text-[clamp(21px,2.4vw,28px)] font-bold tracking-tight text-ikomi-blue">Consulta por marca y modelo</h2>
          </div>
          <ul className="m-0 flex list-none flex-wrap justify-end gap-x-6 gap-y-3 p-0 text-[13px] font-extrabold text-[#40545a] max-[760px]:justify-start" aria-label="Marcas de vehículos">
            <li>Hyundai</li>
            <li>Kia</li>
            <li>Mitsubishi</li>
            <li>Hino</li>
            <li>Isuzu</li>
            <li>Nissan</li>
          </ul>
          <p className="col-start-2 m-0 text-right text-xs leading-relaxed text-ikomi-muted max-[760px]:col-start-auto max-[760px]:text-left">
            La compatibilidad puede variar según la versión. Comparte los datos
            de tu unidad para confirmar la referencia.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 max-[700px]:py-14">
        <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[0.9fr_1.1fr] items-center gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[700px]:w-[calc(100%-36px)]">
          <div>
            <span className="mb-3 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">UNA BÚSQUEDA MÁS CLARA</span>
            <h2 className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.12] font-black tracking-tight text-ikomi-blue">Un buen diagnóstico comienza con los datos correctos.</h2>
            <p className="my-[22px] max-w-[470px] text-sm leading-[1.8] text-ikomi-muted">
              Una misma pieza puede cambiar entre modelos y años. Reunir la
              información del vehículo ayuda a hacer una consulta más precisa.
            </p>
            <Link href="/contacto" className="text-xs font-extrabold text-ikomi-red hover:underline">
              Preparar una consulta <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="border-t border-[#e1e5e3]">
            <article className="grid grid-cols-[42px_1fr] gap-[15px] border-b border-[#e1e5e3] py-[22px]">
              <span className="text-xs font-black text-ikomi-red">01</span>
              <div>
                <h3 className="mb-1.5 font-bold text-ikomi-blue">Indica la aplicación</h3>
                <p className="m-0 text-sm leading-relaxed text-ikomi-muted">Marca, modelo, año y motorización ayudan a acotar opciones.</p>
              </div>
            </article>
            <article className="grid grid-cols-[42px_1fr] gap-[15px] border-b border-[#e1e5e3] py-[22px]">
              <span className="text-xs font-black text-ikomi-red">02</span>
              <div>
                <h3 className="mb-1.5 font-bold text-ikomi-blue">Comparte una referencia</h3>
                <p className="m-0 text-sm leading-relaxed text-ikomi-muted">El código de la pieza o una foto legible puede aportar contexto.</p>
              </div>
            </article>
            <article className="grid grid-cols-[42px_1fr] gap-[15px] border-b border-[#e1e5e3] py-[22px]">
              <span className="text-xs font-black text-ikomi-red">03</span>
              <div>
                <h3 className="mb-1.5 font-bold text-ikomi-blue">Verifica antes de instalar</h3>
                <p className="m-0 text-sm leading-relaxed text-ikomi-muted">Confirma medidas, conectores y compatibilidad con el proveedor.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ikomi-light py-20 max-[700px]:py-14">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[700px]:w-[calc(100%-36px)]">
          <div className="mb-8 flex items-end justify-between gap-6 max-[700px]:items-start max-[700px]:flex-col">
            <div>
              <span className="mb-3 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">REFERENCIAS DE MUESTRA</span>
              <h2 className="m-0 text-[clamp(30px,4vw,46px)] leading-tight font-black tracking-tight text-ikomi-blue">Explora algunas piezas</h2>
            </div>
            <Link href="/productos" className="text-xs font-extrabold text-ikomi-red hover:underline">
              Ver catálogo de demostración <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[700px]:grid-cols-1">
            {featuredProducts.map((producto) => (
              <ProductCard key={producto.slug} product={producto} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 max-[700px]:py-14">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[700px]:w-[calc(100%-36px)]">
          <div className="text-center">
            <span className="mb-3 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-red">ANTES DE COTIZAR</span>
            <SectionTitle
              title="Tres pasos para describir tu repuesto"
              subtitle="Una consulta clara facilita la búsqueda y la confirmación de compatibilidad."
            />
          </div>
          <div className="grid grid-cols-3 gap-4 max-[800px]:grid-cols-1">
            {buyingSteps.map((step) => (
              <article key={step.number} className="border border-[#e1e5e3] bg-ikomi-light p-7">
                <span className="text-xs font-black tracking-widest text-ikomi-red">{step.number}</span>
                <h3 className="my-3 text-lg font-bold text-ikomi-blue">{step.title}</h3>
                <p className="m-0 text-sm leading-[1.7] text-ikomi-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ikomi-blue py-14 text-white max-[700px]:py-10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-48px))] items-center justify-between gap-8 max-[700px]:w-[calc(100%-36px)] max-[700px]:flex-col max-[700px]:items-start">
          <div>
            <span className="mb-3 block text-[11px] font-extrabold tracking-[0.16em] text-ikomi-yellow">¿NO ENCUENTRAS LA REFERENCIA?</span>
            <h2 className="max-w-[720px] text-[clamp(26px,3.8vw,40px)] leading-tight font-black">Cuéntanos qué unidad necesitas mantener en marcha.</h2>
            <p className="mt-3 max-w-[600px] text-sm leading-relaxed text-white/80">
              Incluye marca, modelo y los datos de la pieza para comenzar la
              consulta.
            </p>
          </div>
          <Link href="/contacto" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828]">
            Ir a contacto <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
