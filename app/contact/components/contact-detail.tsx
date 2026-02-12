"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, FileText, ArrowRight } from "lucide-react";

import { ContactCard } from "@/types/contact";
import { PRODUCT_CATEGORY_MAP } from "../../../lib/contactProductMap";

type Props = {
  card: ContactCard;
};

export function ContactDetail({ card }: Props) {
  const router = useRouter();
  const [segment, setSegment] = useState<string>("");

  const handleSearch = () => {
    if (!segment) return;
    const slug = PRODUCT_CATEGORY_MAP[segment];
    router.push(`/products/${slug}`);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 sm:pb-8">
        <h2>{card.title}</h2>
        {card.description && (
          <p className="text-base sm:text-lg text-gray-600">
            {card.description}
          </p>
        )}
      </div>

      {/* FORM CARD */}
      {card.showForm ? (
        <div className="border-2 border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 bg-white hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-amber-500 rounded-full flex-shrink-0"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
              Search Criteria
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Find the right representative for your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* State */}
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base text-gray-700">
                State / Province
              </label>
              <select
                disabled
                className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 text-gray-900 font-medium cursor-not-allowed text-sm sm:text-base"
              >
                <option>India</option>
              </select>
            </div>

            {/* Market Segment */}
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base text-gray-700">
                Market Segment
              </label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-gray-900 font-medium focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
              >
                <option value="">Select a segment</option>
                {Object.keys(PRODUCT_CATEGORY_MAP).map((label) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            disabled={!segment}
            className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group text-sm sm:text-base active:scale-95"
          >
            Search
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ) : (
        /* NORMAL SECTIONS */
        <div className="space-y-4 sm:space-y-6">
          {card.sections.map((section) => (
            <div
              key={section.id}
              className="border-2 border-gray-200 p-6 sm:p-8 rounded-2xl bg-white hover:shadow-lg transition-all hover:border-amber-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {section.description}
                </p>
              )}

              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 sm:gap-4 items-start p-4 sm:p-5 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      {item.type === "Call" && <Phone className="w-5 h-5" />}
                      {item.type === "Email" && <Mail className="w-5 h-5" />}
                      {item.type === "Fax" && <FileText className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {item.type}
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-900 break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
