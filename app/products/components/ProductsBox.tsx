import Link from "next/link";
import { productData } from "../../../data/products";

export default function ProductsBox() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {productData.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
