"use client";

import {
  FileText,
  ClipboardList,
  Calculator,
  Award,
  BookOpen,
  Scale,
} from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { SectionHeadingBlock } from "@/types/section-heading";
import { ApplicationsBlock } from "@/types/application";

const icons = [FileText, ClipboardList, Calculator, Award, BookOpen, Scale];

type StrengthProps = {
  data: ApplicationsBlock;
  heading?: SectionHeadingBlock;
};

export default function Strength({ data, heading }: StrengthProps) {
  return (
    <section className="section-padding bg-gray-50">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {data.cards.map((card, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Link
                key={card.id}
                href={`/strength/${card.slug}`}
                className="group bg-white rounded-lg p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-50 transition-colors">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </div>

                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {card.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
