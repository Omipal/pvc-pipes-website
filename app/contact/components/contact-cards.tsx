"use client";

import { MessageSquare, Phone, Wrench, Briefcase } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  FIND_REPRESENTATIVE: MessageSquare,
  CONTACT_CUSTOMER_SERVICE: Phone,
  CONTACT_TECHNICAL_SERVICES: Wrench,
  CONTACT_SPEC_ENGINEER: Briefcase,
};

export function ContactCards({ cards, selectedCard, onSelectCard }: any) {
  return (
    <section className="contact py-10">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900">Contact Us</h1>
          <p className="text-lg text-gray-700">
            What would you like to do today?
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {cards.map((card: any) => {
            const Icon = ICON_MAP[card.type];
            const isSelected = selectedCard?.type === card.type;

            return (
              <button key={card.id} onClick={() => onSelectCard(card)}>
                <div
                  className={`border-2 p-6 rounded-lg ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "hover:border-blue-400"
                  }`}
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-blue-900">{card.title}</h3>
                  <p className="text-sm text-blue-700 uppercase">
                    {card.actionLabel}
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
