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
    <main className="product-detail-shell">
      <div className="product-detail-card">
        <div className="product-detail-image-wrap">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={700}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-price">Consulta precio y disponibilidad</p>
          <p>{product.description}</p>

          <ul className="spec-list">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <Link href="/contacto" className="primary-button">
            Consultar esta pieza
          </Link>
        </div>
      </div>
    </main>
  );
}
