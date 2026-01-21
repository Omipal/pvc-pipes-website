"use client";
import { HeroBlock } from "@/types/hero";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type HeroProps = {
  data: HeroBlock;
};

export default function Hero({ data }: HeroProps) {
  const scrollToContent = () => {
    const applicationsSection = document.getElementById("applications");
    if (applicationsSection) {
      applicationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const router = useRouter();

  const videoUrl = data.video?.url ? `${STRAPI_URL}${data.video.url}` : null;
  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden">
      {/* Background Image */}
      {videoUrl && (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(11,58,96,0.95)] via-[rgba(11,58,96,0.8)] to-[rgba(11,58,96,0.4)] md:via-[rgba(11,58,96,0.7)] md:to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative container h-full flex items-center py-10 sm:py-14 lg:py-20">
        <div className="max-w-2xl space-y-4 sm:space-y-6 animate-slide-in-left">
          {/* Featured tag */}
          <div className="inline-flex items-center gap-2 bg-[rgba(0,163,90,0.2)] backdrop-blur-sm border border-[rgba(0,163,90,0.3)] rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="w-2 h-2 bg-[#00a35a] rounded-full animate-pulse" />
            <span className="text-white text-xs sm:text-sm font-medium">
              {data.badge}
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className=" text-white leading-tight">
              {data.heading_prefix}
              <span className="text-[#00a35a]">{data.heading_highlight}</span>
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-white/90 font-medium">
              {data.sub_heading}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light">
              {data.text}
            </p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            {data.links?.map((link) =>
              link.isButtonLink ? (
                <button
                  key={link.id}
                  onClick={() => router.push(link.href)}
                  className="group bg-[rgb(0,163,90)] text-white px-8 py-3 flex items-center gap-2"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  key={link.id}
                  onClick={() => router.push(link.href)}
                  className="border-2 border-white/30 text-white px-8 py-3"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Stats */}
          {data.stats && (
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/20 mt-6 sm:mt-8">
              {data.stats.map((stat) => (
                <div className="text-center sm:text-left" key={stat.id}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[rgb(0,163,90)]">
                    {stat.value}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side info card */}
        <div
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 animate-slide-in-right"
          style={{ animationDelay: "0.3s" }}
        >
          {data.info_card && (
            <div className="bg-[rgba(11,58,96,0.9)] backdrop-blur-sm rounded-sm p-6 max-w-xs border border-white/10">
              <div className="w-12 h-12 bg-[rgba(0,163,90,0.2)] rounded-full flex items-center justify-center mb-4">
                {data.info_card.badge_text && (
                  <span className="text-green-400 text-sm">
                    {data.info_card.badge_text}
                  </span>
                )}
              </div>
              <h3 className="text-white font-display text-lg font-semibold mb-2">
                {data.info_card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {data.info_card.description}
              </p>
              {data.info_card.link && (
                <button
                  onClick={() =>
                    data.info_card?.link?.href &&
                    router.push(data.info_card.link.href)
                  }
                  className="mt-4 bg-white text-[rgb(11,58,96)] px-4 py-2"
                >
                  {data.info_card.link.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div
        onClick={scrollToContent}
        className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <div className="w-px h-16 bg-white" />
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
