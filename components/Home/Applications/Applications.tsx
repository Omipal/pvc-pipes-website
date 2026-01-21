"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ReactMarkdown from "react-markdown";
import { ApplicationsBlock } from "@/types/application";
import { SectionHeadingBlock } from "@/types/section-heading";
import "swiper/css";
import "swiper/css/navigation";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type ApplicationsProps = {
  data: ApplicationsBlock;
  heading?: SectionHeadingBlock;
};

export default function Applications({ data, heading }: ApplicationsProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="section-padding bg-white" id="applications">
      <div className="container">
        {/* Header */}
        <div className="section-box">
          {heading?.heading && (
            <h2 className="text-[rgb(11,58,96)]">{heading.heading}</h2>
          )}

          {heading?.sub_heading && (
            <p className="text-blue-600 text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">
              {heading.sub_heading}
            </p>
          )}

          {heading?.description && (
            <div className="paragraph">
              <ReactMarkdown>{heading.description}</ReactMarkdown>
            </div>
          )}
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            ref={prevRef}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-md rounded-full items-center justify-center text-gray-400 hover:text-[#00a35a] cursor-pointer"
          >
            <ChevronLeft />
          </button>

          <button
            ref={nextRef}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-md rounded-full items-center justify-center text-gray-400 hover:text-[#00a35a] cursor-pointer"
          >
            <ChevronRight />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={data.cards.length > 5}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {data.cards.map((card) => {
              const imageUrl = card.image?.url?.startsWith("http")
                ? card.image.url
                : card.image?.url
                ? `${STRAPI_URL}${card.image.url}`
                : null;

              return (
                <SwiperSlide
                  key={card.id}
                  className="group cursor-pointer flex-shrink-0 w-[45%] sm:w-[40%] md:w-auto snap-center"
                >
                  <Link href={`/applications/${card.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={card.image?.alternativeText ?? card.title}
                          width={640}
                          height={640}
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,58,96,0.8)] to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs sm:text-sm md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-3 text-center">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#00a35a] transition-colors text-sm sm:text-base">
                        {card.title}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
