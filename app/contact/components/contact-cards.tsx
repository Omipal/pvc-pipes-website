import { MessageSquare, Phone, Wrench, Briefcase } from "lucide-react";
import { ContactCard } from "@/types/contact";

const ICON_MAP = {
  FIND_REPRESENTATIVE: MessageSquare,
  CONTACT_CUSTOMER_SERVICE: Phone,
  CONTACT_TECHNICAL_SERVICES: Wrench,
  CONTACT_SPEC_ENGINEER: Briefcase,
};

type Props = {
  cards: ContactCard[];
  selectedCard: ContactCard | null;
  onSelectCard: (card: ContactCard) => void;
};

export function ContactCards({ cards, selectedCard, onSelectCard }: Props) {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a397d] mb-3 sm:mb-4 text-balance">
            How Can We Help?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-balance px-2">
            Select a department to get in touch with our team
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = ICON_MAP[card.type];
            const active = selectedCard?.id === card.id;

            return (
              <button
                key={card.id}
                onClick={() => onSelectCard(card)}
                className="h-full text-left transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-2xl"
              >
                <div
                  className={`h-full border-2 p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col ${
                    active
                      ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-200"
                      : "border-gray-200 bg-white hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100"
                  }`}
                >
                  <div
                    className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors flex-shrink-0 ${
                      active
                        ? "bg-blue-500 text-white"
                        : "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide">
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
