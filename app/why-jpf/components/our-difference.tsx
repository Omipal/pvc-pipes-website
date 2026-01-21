"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  {
    url: "/images/image.png",
    alt: "Worker installing pipes",
  },
  {
    url: "/images/image.png",
    alt: "PVC pipe installation",
  },
  {
    url: "/images/image.png",
    alt: "Pipeline details",
  },
];

export function OurDifference() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="border-b-2 border-blue-600 pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          The Westlake Pipe & Fittings Difference
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Westlake Pipe & Fittings is dedicated to helping contractors
            maximize efficiency and helping engineers design systems that entire
            communities can rely on.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With manufacturing & distribution centers across North America,
            dedicated sales, technical services, specification engineers and
            customer support teams, our unparalleled service allows you to
            design, specify and install complete projects with confidence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium transition-colors">
            Contact Us
          </button>
        </div>

        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src={carouselImages[currentImageIndex].url || "/placeholder.svg"}
              alt={carouselImages[currentImageIndex].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Carousel Thumbnails */}
          <div className="flex gap-3 relative">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors w-8 h-8 flex items-center justify-center"
              aria-label="Previous image"
            >
              <span>{"<"}</span>
            </button>

            {carouselImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-opacity ${
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
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors w-8 h-8 flex items-center justify-center"
              aria-label="Next image"
            >
              <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
