"use client";

import Link from "next/link";

type Props = {
  categories: any[];
  activeCategory?: string;
};

export default function CategoryFilter({ categories, activeCategory }: Props) {
  const normalizedActiveCategory = activeCategory
    ? decodeURIComponent(activeCategory).toLowerCase().trim()
    : "";

  return (
    <div className="space-y-6">
      {/* All Products */}
      <Link
        href="/products"
        className={`block font-medium ${
          !normalizedActiveCategory ? "text-blue-600 font-semibold" : ""
        }`}
      >
        All Products
      </Link>

      {/* Categories */}
      {categories.map((cat) => {
        const isActive =
          normalizedActiveCategory === cat.name.toLowerCase().trim();

        return (
          <Link
            key={cat.id}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            className={`block ${isActive ? "text-blue-600 font-semibold" : ""}`}
          >
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}
