import CategoryFilter from "./CategoryFilter";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: any[];
  categories: any[];
  activeCategory?: string;
};

export default function ProductsListing({
  products,
  categories,
  activeCategory,
}: Props) {
  return (
    <section className="section-padding">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT FILTER */}
        <aside>
          <h3 className="font-bold mb-6">Categories</h3>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
          />
        </aside>

        {/* PRODUCTS GRID */}
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {products.map((product) => {
            const image = product.images?.[0];

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="shadow rounded-lg overflow-hidden"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="h-40 w-full object-cover"
                  />
                )}

                <div className="p-3 font-semibold">{product.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
