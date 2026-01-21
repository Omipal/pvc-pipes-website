"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useBreadcrumb } from "@/components/Helper/BreadcrumbContext";
import { ApplicationCard } from "@/types/application";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export default function ApplicationClient({ card }: { card: ApplicationCard }) {
  const { setTitle } = useBreadcrumb();

  useEffect(() => {
    setTitle(card.title);
    return () => setTitle(undefined);
  }, [card.title, setTitle]);

  const imageUrl = card.image?.url
    ? card.image.url.startsWith("http")
      ? card.image.url
      : `${STRAPI_URL}${card.image.url}`
    : null;

  return (
    <section className="min-h-screen bg-white">
      <div className="container py-10">
        {/* IMAGE */}
        {imageUrl && (
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
            <Image
              src={imageUrl}
              alt={card.image?.alternativeText ?? card.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[rgb(11,58,96)]">
          {card.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
          {card.description}
        </p>
      </div>
    </section>
  );
}
