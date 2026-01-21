"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "/pvc-pipe-construction-equipment.jpg",
      alt: "PVCO C909 construction",
    },
    { url: "/pvc-pipe-aerial-view.jpg", alt: "PVCO C909 installation" },
    { url: "/worker-with-safety-gear-pvc.jpg", alt: "PVCO C909 worker" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-12">
      {/* Section Title */}
      <div className="mb-12 pb-4 border-b-2 border-blue-600">
        <h2 className="text-3xl font-bold text-blue-900">
          Meet PVCO C909: Ultra-Tough, High-Strength PVC
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            PVCO is Westlake Pipe & Fittings' next-generation PVC formulation to
            create PVCO, this process gives PVCO greater strength and
            flexibility without adding weight. This next-generation PVC is
            stronger, tougher, more flexible, and designed for a long service
            life in water infrastructure.
          </p>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6 py-2 font-medium transition-colors">
            Learn More
          </button>
        </div>

        {/* Image Carousel */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={images[currentImageIndex].url || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover"
            />
            {/* Watermark overlay */}
            <div className="absolute inset-0 flex items-end justify-start p-4">
              <div className="text-white font-bold text-lg opacity-70">
                AQUAMAX™ PVCO C909
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-3 relative">
            <button
              onClick={prevImage}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              {"<"}
            </button>

            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-1 transition-opacity ${
                  idx === currentImageIndex
                    ? "opacity-100 ring-2 ring-blue-600"
                    : "opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={img.url || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}

            <button
              onClick={nextImage}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
