"use client";

import { useState } from "react";
import { Phone, Mail, FileText } from "lucide-react";

interface ContactDetailProps {
  cardType: string;
}

const detailContent: Record<string, any> = {
  "FIND A REPRESENTATIVE": {
    title: "Find a Representative",
    description:
      "Please enter the below information to find a representative in your area.",
    showForm: true,
  },
  "CONTACT CUSTOMER SERVICE": {
    title: "Customer Service",
    description:
      "Our customer service team is ready to assist you with your orders and accounting inquiries.",
    showForm: false,
    contacts: [
      {
        section: "Accounting",
        description: "For questions regarding billing",
        items: [
          { type: "Call", value: "713-742-6890" },
          { type: "Email", value: "accounting@westlakepipe.com" },
        ],
      },
      {
        section: "Certa-Lok®, Yolomine®, Certa-Set®, Certa-Com®, Certa-Flo®",
        subtitle: "PVC Pipe & Fittings",
        items: [
          { type: "Call", value: "281-596-8143, Opt 1" },
          { type: "Email", value: "specpiporders@westlakepipe.com" },
          { type: "Fax", value: "888-356-6156" },
        ],
      },
      {
        section: "Molded Plumbing Schedule, DVW & SW Sewer",
        subtitle: "PVC Fittings",
        items: [
          { type: "Call", value: "888-600-1410" },
          { type: "Email", value: "catmosvalves@westlakepipe.com" },
          { type: "Fax", value: "731-772-0636" },
        ],
      },
      {
        section: "Molded & Fabricated Gasket, SW Municipal & Electrical",
        subtitle: "PVC Fittings",
        items: [
          { type: "Call", value: "888-986-4701" },
          { type: "Email", value: "cashdev@westlakepipe.com" },
          { type: "Fax", value: "888-781-0888" },
        ],
      },
      {
        section: "Agriculture & Irrigation",
        subtitle: "PVC Pipe & Fittings",
        items: [
          { type: "Call", value: "281-596-8143, Opt 1" },
          { type: "Email", value: "commpiporders@westlakepipe.com" },
          { type: "Fax", value: "209-334-4300" },
        ],
      },
    ],
  },
  "CONTACT TECHNICAL SERVICES": {
    title: "Technical Services",
    description:
      "Our Technical Services Team can help you with design application, installation, material compatibility, and specification or certification data.",
    showForm: false,
    contacts: [
      {
        section: "Technical Services",
        description:
          "Design application, installation, material compatibility, and specification data",
        items: [
          { type: "Call", value: "484-436-7474" },
          { type: "Email", value: "technical@westlakepipe.com" },
        ],
      },
    ],
  },
  "CONTACT A SPECIFICATION ENGINEER": {
    title: "Specification Engineer",
    description:
      "Connect with our specification engineers to discuss municipal product specifications.",
    showForm: true,
    fields: ["State/Province"],
  },
};

export function ContactDetail({ cardType }: ContactDetailProps) {
  const [formData, setFormData] = useState({
    state: "",
    segment: "",
  });

  const content = detailContent[cardType];

  if (!content) {
    return null;
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    console.log("[v0] Search with:", formData);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          {content.title}
        </h2>
        <p className="text-lg text-gray-700">{content.description}</p>
      </div>

      <div>
        {content.showForm ? (
          <div className="bg-white border-2 border-blue-200 rounded-lg p-8 space-y-6">
            <h3 className="text-lg font-semibold text-blue-900">
              Search Criteria
            </h3>

            {/* State/Province - shown for all forms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State/Province
              </label>
              <select
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
              </select>
            </div>

            {/* Market Segment - only shown for FIND A REPRESENTATIVE */}
            {cardType === "FIND A REPRESENTATIVE" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Market Segment
                </label>
                <select
                  value={formData.segment}
                  onChange={(e) => handleInputChange("segment", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="municipal">Municipal</option>
                  <option value="industrial">Plumbing & Industrial</option>
                  <option value="water">Water Well</option>
                  <option value="agriculture">Agriculture & Irrigation</option>
                  <option value="electrical">Electrical</option>
                  <option value="pool">Pool & Spa</option>
                </select>
              </div>
            )}

            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Search
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {content.contacts?.map((contact: any, idx: number) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {contact.section}
                  </h3>
                  {contact.subtitle && (
                    <p className="text-sm text-gray-600 mt-1">
                      {contact.subtitle}
                    </p>
                  )}
                  {contact.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {contact.description}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  {contact.items?.map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      {item.type === "Call" && (
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      )}
                      {item.type === "Email" && (
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      )}
                      {item.type === "Fax" && (
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          {item.type}
                        </p>
                        <p className="font-medium text-gray-900">
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
    </div>
  );
}
