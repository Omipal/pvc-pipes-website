"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
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
        <div className="border-b bg-white/50 px-4 py-3 mb-8">
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
