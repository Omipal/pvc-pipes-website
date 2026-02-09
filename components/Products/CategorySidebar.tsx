import Link from "next/link";
import { ProductCategory } from "@/types/product";

type Props = {
  categories: ProductCategory[];
  activeCategory?: string;
};

export default function CategorySidebar({ categories, activeCategory }: Props) {
  return (
    <aside className="w-full lg:w-64 border rounded-lg p-4">
      <h3 className="font-bold text-lg mb-4 text-[rgb(11,58,96)]">
        Categories
      </h3>

      <ul className="space-y-2">
        {/* ALL PRODUCTS */}
        <li>
          <Link
            href="/products"
            className={`block px-3 py-2 rounded ${
              !activeCategory ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
            }`}
          >
            All Products
          </Link>
        </li>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;

          return (
            <li key={cat.id}>
              <Link
                href={`/products?category=${cat.slug}`}
                className={`block px-3 py-2 rounded ${
                  isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
