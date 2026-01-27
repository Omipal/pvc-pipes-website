"use client";

import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Products Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(11,58,96)] mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            JM Eagle offers the most comprehensive line of plastic pipes on the
            planet. Whether it's our PVC, Polyvinyl Chloride, Polyethylene or
            ABS Acrylonitrile Butadiene Styrene, JM Eagle products are the very
            best for their application. In addition to meeting the required
            specifications, JM Eagle and our industry leading team also
            guarantees the best quality and performance over time.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[#00a35a] font-bold text-sm uppercase tracking-wide">
              USGBC
            </span>
            <p className="text-xs text-gray-600">Certified Member</p>
          </div>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {productData.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="relative overflow-hidden group cursor-pointer bg-gray-100 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={800}
                height={504}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white font-bold text-center px-4 text-sm sm:text-base md:text-lg text-balance">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[rgb(11,58,96)] mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team is ready to
            help you find the perfect product for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[rgb(11,58,96)] text-white font-semibold rounded-lg hover:bg-[rgb(8,45,75)] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
