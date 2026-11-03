import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";

type ProductCardProps = {
  product: Producto;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={420}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-footer">
          <strong>Consultar disponibilidad</strong>
          <Link href={`/productos/${product.slug}`} className="product-link">
            Ver pieza
          </Link>
        </div>
      </div>
    </article>
  );
}
