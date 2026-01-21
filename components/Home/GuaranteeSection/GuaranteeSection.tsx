"use client";

import { useRouter } from "next/navigation";
import { Shield, CheckCircle, Award, ArrowRight } from "lucide-react";
import { GuaranteeBlock } from "@/types/guarantee";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type Props = {
  data: GuaranteeBlock;
};

const GuaranteeSection = ({ data }: Props) => {
  const router = useRouter();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={
            data.image?.url ? `${STRAPI_URL}${data.image.url}` : "/pipes-2.jpg"
          }
          alt={data.image?.alternativeText || "Water pipes"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,58,96,0.9)]" />
      </div>

      {/* Content */}
      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a35a]" />
              <span className="text-[#00a35a] font-semibold uppercase tracking-wide text-xs sm:text-sm">
                {data.badge_text}
              </span>
            </div>

            {/* Heading */}
            <h2 className="leading-tight text-left lg:text-5xl">
              {data.heading}
              <br />
              <span className="text-[#00a35a]">{data.heading_highlight}</span>
              <br />
              {data.sub_heading}
            </h2>

            {/* Feature list */}
            <ul className="space-y-2 sm:space-y-3">
              {data.list?.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a35a] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            {data.link && (
              <button
                onClick={() => data.link && router.push(data.link.href)}
                className="btn-green group"
              >
                <span className="hidden sm:inline">{data.link.label}</span>
                <span className="sm:hidden text-sm">{data.link.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {data.stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-colors"
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#00a35a] mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
