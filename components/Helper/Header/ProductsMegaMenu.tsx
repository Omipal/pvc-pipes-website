"use client";

import { useState } from "react";
import Link from "next/link";
import { categoryMenuData } from "@/data/productsMegaMenuData";
import { productData } from "@/data/products";

type BrowseType = "Applications" | "Product Families";

type Props = {
  closeMenu: () => void;
};

export default function ProductsMegaMenu({ closeMenu }: Props) {
  const categories = Object.keys(categoryMenuData);

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [browseBy, setBrowseBy] = useState<BrowseType>("Applications");
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const category = categoryMenuData[activeCategory];

  const middleLinks =
    browseBy === "Applications"
      ? category.applicationsLinks
      : category.productFamiliesLinks;

  const filteredProducts = productData.filter(
    (product) => activeItem && product.applications?.includes(activeItem)
  );

  return (
    <div className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-50">
      <div className="container mx-auto px-6">
        {/* TOP CATEGORY TABS */}
        <div className="flex gap-4 py-4 border-b">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setBrowseBy("Applications");
                setActiveItem(null);
              }}
              className={`px-4 py-2 rounded-full border text-sm ${
                activeCategory === cat
                  ? "bg-blue-50 border-blue-600 text-blue-600"
                  : "border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8 py-8">
          {/* LEFT */}
          <div className="col-span-3">
            <h4 className="font-semibold mb-4">Browse By</h4>
            {category.browseByLinks.map((b) => (
              <button
                key={b.label}
                onClick={() => {
                  setBrowseBy(b.label as BrowseType);
                  setActiveItem(null);
                }}
                className={`block mb-3 font-medium ${
                  browseBy === b.label ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {b.label} →
              </button>
            ))}
          </div>

          {/* MIDDLE */}
          <div className="col-span-3">
            <h4 className="font-semibold mb-4">{browseBy}</h4>
            {middleLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveItem(link.label)}
                className="block mb-3 text-gray-700 hover:text-blue-600"
              >
                {link.label} →
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="col-span-6">
            <h4 className="font-semibold mb-4">
              {activeItem ?? "Select an option"}
            </h4>

            <div className="grid grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={closeMenu}
                  className="border rounded-lg p-4 hover:border-blue-600 transition"
                >
                  <h5 className="font-semibold">{product.title}</h5>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
