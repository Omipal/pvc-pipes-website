import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function RelatedProducts({ products }: Props) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-[rgb(11,58,96)]">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => {
            const image = product.images?.[0];

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={image.alternativeText ?? product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{product.name}</h3>

                  <div className="flex gap-2 items-center">
                    <span className="text-green-600 font-semibold">
                      ₹{product.offerPrice}
                    </span>
                    <span className="line-through text-xs text-gray-400">
                      ₹{product.price}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
