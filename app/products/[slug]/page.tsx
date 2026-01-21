import { notFound } from "next/navigation";
import { productData } from "../../../data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-600 text-lg">{product.description}</p>
    </div>
  );
}
