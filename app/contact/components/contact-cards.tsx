"use client";

import { MessageSquare, Phone, Wrench, Briefcase } from "lucide-react";

interface ContactCardsProps {
  onSelectCard: (cardType: string) => void;
  selectedCard: string | null;
}

const cards = [
  {
    id: "representative",
    icon: MessageSquare,
    title: "Get product information or place an order",
    action: "FIND A REPRESENTATIVE",
    description:
      "Connect with our sales team to discuss products and place orders",
  },
  {
    id: "customer-service",
    icon: Phone,
    title: "Get information on an existing order or contact accounting",
    action: "CONTACT CUSTOMER SERVICE",
    description: "Reach our customer service for order inquiries",
  },
  {
    id: "technical",
    icon: Wrench,
    title: "Get help with design application & installation",
    action: "CONTACT TECHNICAL SERVICES",
    description: "Technical support for design and installation help",
  },
  {
    id: "specification",
    icon: Briefcase,
    title: "Specify WPF municipal products",
    action: "CONTACT A SPECIFICATION ENGINEER",
    description: "Speak with an engineer about product specifications",
  },
];

export function ContactCards({
  onSelectCard,
  selectedCard,
}: ContactCardsProps) {
  return (
    <section className="contact py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            What would you like to do today?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedCard === card.action;

            return (
              <button
                key={card.id}
                onClick={() => onSelectCard(card.action)}
                className="text-left hover:scale-105 transition-transform duration-200 group"
              >
                <div
                  className={`h-full border-2 rounded-lg p-6 transition-all duration-200 bg-white ${
                    isSelected
                      ? "border-blue-500 shadow-lg bg-blue-50"
                      : "border-transparent hover:border-blue-400 hover:shadow-lg"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                    {card.action}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
