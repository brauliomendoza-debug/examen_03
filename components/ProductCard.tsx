import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";

type ProductCardProps = {
  product: Producto;
  eager?: boolean;
};

export default function ProductCard({ product, eager = false }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded border border-[#e8e8e8] bg-white shadow-[0_8px_25px_rgb(0_0_0/6%)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgb(0_0_0/13%)]">
      <div className="overflow-hidden bg-[#f2f3f5]">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={420}
          loading={eager ? "eager" : undefined}
          className="block h-[220px] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-[22px]">
        <span className="mb-2 inline-block text-xs font-extrabold tracking-[0.08em] text-ikomi-red uppercase">{product.category}</span>
        <h3 className="mb-2.5 text-[19px] font-bold">{product.name}</h3>
        <p className="text-sm leading-[1.65] text-ikomi-muted">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <strong className="text-sm font-extrabold text-ikomi-blue">Consultar disponibilidad</strong>
          <Link href={`/productos/${product.slug}`} className="text-[13px] font-extrabold text-ikomi-red hover:underline">
            Ver pieza
          </Link>
        </div>
      </div>
    </article>
  );
}
