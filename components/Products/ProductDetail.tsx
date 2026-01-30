import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const image = product.images?.[0];

  return (
    <section className="section-padding">
      <div className="container grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          {image && (
            <Image
              src={image.url}
              alt={image.alternativeText ?? product.name}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[rgb(11,58,96)]">
            {product.name}
          </h1>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-green-600">
              ₹{product.offerPrice}
            </span>
            <span className="line-through text-gray-400">₹{product.price}</span>
          </div>

          {/* DESCRIPTION */}
          <p className="mb-6">{product.short_description}</p>

          {/* CATEGORIES */}
          <div className="flex gap-2 flex-wrap">
            {product.categories.map((cat) => (
              <span
                key={cat.id}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
