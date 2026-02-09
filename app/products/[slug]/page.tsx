import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { Product } from "@/types/product";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  // ✅ SAME AS ARTICLE PAGE
  const { slug } = await params;

  const product: Product | null = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const mainImage = product.images?.[0];

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mainImage && (
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src={mainImage.url}
              alt={mainImage.alternativeText ?? product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className="text-2xl font-semibold text-[rgb(11,58,96)] mb-4">
            ₹{product.offerPrice ?? product.price}
          </div>

          {product.short_description && (
            <p className="text-gray-700 mb-6">{product.short_description}</p>
          )}

          {product.categories?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <li
                    key={category.id}
                    className="px-3 py-1 bg-gray-100 rounded text-sm"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
