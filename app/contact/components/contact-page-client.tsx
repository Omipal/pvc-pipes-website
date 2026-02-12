"use client";

import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { ContactCards } from "./contact-cards";
import { ContactDetail } from "./contact-detail";
import { ContactBlock, ContactCard } from "@/types/contact";

type Props = {
  contact: ContactBlock;
};

export function ContactPageClient({ contact }: Props) {
  const [selectedCard, setSelectedCard] = useState<ContactCard | null>(null);

  return (
    <>
      {selectedCard && (
        <div className="border-b-2 border-gray-200 bg-white px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-40">
          <div className="container max-w-6xl mx-auto flex items-center justify-between gap-4">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-600 min-w-0">
              <span className="text-gray-400 hidden sm:inline">Contact</span>
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-300 flex-shrink-0" />
              <span className="text-gray-900 font-semibold truncate">
                {selectedCard.title}
              </span>
            </nav>
            <button
              onClick={() => setSelectedCard(null)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 active:scale-95"
              aria-label="Close detail view"
            >
              <X className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      <ContactCards
        cards={contact.cards}
        selectedCard={selectedCard}
        onSelectCard={setSelectedCard}
      />

      {selectedCard && (
        <div className="bg-white border-t-2 border-gray-200 py-8 sm:py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <ContactDetail card={selectedCard} />
          </div>
        </div>
      )}
    </>
  );
}
