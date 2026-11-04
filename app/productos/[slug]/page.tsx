import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productos } from "@/data/productos";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productos.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productos.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-[min(1060px,calc(100%-48px))] py-[72px] max-[700px]:w-[calc(100%-36px)] max-[700px]:py-12">
      <div className="grid grid-cols-2 overflow-hidden rounded border border-[#e5e7eb] bg-white shadow-[0_12px_36px_rgb(0_0_0/8%)] max-[760px]:grid-cols-1">
        <div className="min-h-[420px] bg-[#f2f3f5] max-[760px]:min-h-0">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-10 max-[700px]:p-6">
          <span className="mb-2 inline-block text-xs font-extrabold tracking-[0.08em] text-ikomi-red uppercase">{product.category}</span>
          <h1 className="mb-4 text-[clamp(28px,4vw,38px)] font-black text-ikomi-blue">{product.name}</h1>
          <p className="mb-4 font-bold text-ikomi-blue">Consulta precio y disponibilidad</p>
          <p className="text-sm leading-[1.75] text-ikomi-muted">{product.description}</p>

          <ul className="my-6 grid list-none gap-2 border-y border-[#e5e7eb] py-5 pl-0 text-sm text-ikomi-text">
            {product.specs.map((spec) => (
              <li key={spec} className="before:mr-2 before:font-bold before:text-ikomi-red before:content-['•']">{spec}</li>
            ))}
          </ul>
          <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-ikomi-red bg-ikomi-red px-[22px] text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#c62828]">
            Consultar esta pieza
          </Link>
        </div>
      </div>
    </main>
  );
}
