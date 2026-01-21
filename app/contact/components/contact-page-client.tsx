"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ContactCards } from "./contact-cards";
import { ContactDetail } from "./contact-detail";

export function ContactPageClient() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <>
      {/* Dynamic Breadcrumb */}
      {selectedCard && (
        <div className="border-b border-blue-100 bg-white/50 backdrop-blur -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-8">
          <nav className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">Contact</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-700">{selectedCard}</span>
          </nav>
        </div>
      )}

      <ContactCards
        selectedCard={selectedCard}
        onSelectCard={setSelectedCard}
      />

      {/* Detail view appears below cards when one is selected */}
      {selectedCard && (
        <div className="container mt-16 py-12 border-t border-gray-200">
          <ContactDetail cardType={selectedCard} />
        </div>
      )}
    </>
  );
}
