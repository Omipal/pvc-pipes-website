"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ContactCards } from "./contact-cards";
import { ContactDetail } from "./contact-detail";

export function ContactPageClient({ contact }: any) {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  if (!contact) return null;

  return (
    <>
      {selectedCard && (
        <div className="border-b border-blue-100 bg-white/50 px-4 py-3 mb-8">
          <nav className="flex items-center gap-2 text-sm">
            <span>Contact</span>
            <ChevronRight className="w-4 h-4" />
            <span>{selectedCard.title}</span>
          </nav>
        </div>
      )}

      <ContactCards
        cards={contact.cards}
        selectedCard={selectedCard}
        onSelectCard={setSelectedCard}
      />

      {selectedCard && (
        <div className="container mt-16 py-12 border-t">
          <ContactDetail card={selectedCard} />
        </div>
      )}
    </>
  );
}
