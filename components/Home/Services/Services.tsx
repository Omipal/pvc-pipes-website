"use client";

import { Truck, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServicesBlock } from "@/types/services";
import ReactMarkdown from "react-markdown";

type Props = {
  data: ServicesBlock;
};

export default function Services({ data }: Props) {
  const router = useRouter();
  const link = data.link;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/delivery-truck.jpg"
          alt="Delivery truck with pipes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,58,96,0.95)] via-[rgba(11,58,96,0.85)] to-[rgba(11,58,96,0.7)] md:to-[rgba(11,58,96,0.6)]" />
      </div>

      <div className="relative container text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>

          <h2 className="lg:text-5xl text-white">{data.heading}</h2>

          {data.sub_heading && (
            <p className="text-lg sm:text-xl md:text-2xl text-green-400 font-medium">
              {data.sub_heading}
            </p>
          )}

          {data.description && (
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="paragraph text-white/70">{children}</p>
                ),
              }}
            >
              {data.description}
            </ReactMarkdown>
          )}

          {link && (
            <button
              onClick={() => router.push(link.href)}
              className="btn-green inline-flex items-center gap-2"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}

          {data.text && (
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="text-white/50 text-xs">{children}</p>
                ),
              }}
            >
              {data.text}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </section>
  );
}
