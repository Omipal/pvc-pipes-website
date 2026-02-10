"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, FileText } from "lucide-react";

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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900">{card.title}</h2>
        {card.description && (
          <p className="text-lg text-gray-700">{card.description}</p>
        )}
      </div>

      {/* FORM CARD */}
      {card.showForm ? (
        <div className="border-2 rounded-lg p-8 space-y-6">
          <h3 className="text-xl font-semibold text-blue-900">
            Search Criteria
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* State */}
            <div>
              <label className="block mb-2 font-medium">State / Province</label>
              <select
                disabled
                className="w-full border rounded px-4 py-2 bg-gray-100"
              >
                <option>India</option>
              </select>
            </div>

            {/* Market Segment */}
            <div>
              <label className="block mb-2 font-medium">Market Segment</label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select</option>
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
            className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 disabled:opacity-50"
          >
            Search
          </button>
        </div>
      ) : (
        /* NORMAL SECTIONS */
        card.sections.map((section) => (
          <div key={section.id} className="border p-6 rounded-lg">
            <h3 className="font-semibold">{section.title}</h3>
            {section.description && <p>{section.description}</p>}

            <div className="mt-4 space-y-2">
              {section.items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  {item.type === "Call" && <Phone />}
                  {item.type === "Email" && <Mail />}
                  {item.type === "Fax" && <FileText />}
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
