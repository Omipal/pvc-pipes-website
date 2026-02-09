import Image from "next/image";
import Link from "next/link";
import { FeaturedProductsBlock } from "../../../types/product";

type ProductsSectionProps = {
  data: FeaturedProductsBlock;
};

export default function ProductsSection({ data }: ProductsSectionProps) {
  const products = data.products;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-[rgb(11,58,96)] mb-3">
            Products
          </h1>

          <div className="section-content">
            <p>
              JM Eagle offers the most comprehensive line of plastic pipes on
              the planet. Whether it's our PVC, Polyethylene or ABS products, JM
              Eagle guarantees the best quality and performance.
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const image = product.images?.[0];

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="relative overflow-hidden group rounded-lg shadow-md"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={image.alternativeText || product.name}
                    width={800}
                    height={504}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-bold text-center">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className="px-6 py-3 bg-[rgb(11,58,96)] text-white rounded-lg"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
