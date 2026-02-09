"use client";

import { Phone, Mail, FileText } from "lucide-react";

export function ContactDetail({ card }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-blue-900">{card.title}</h2>
        <p className="text-lg text-gray-700">{card.description}</p>
      </div>

      {card.showForm ? (
        <div className="border-2 p-8 rounded-lg">{/* SAME FORM UI */}</div>
      ) : (
        card.sections.map((section: any) => (
          <div key={section.id} className="border p-6 rounded-lg">
            <h3 className="font-semibold">{section.title}</h3>
            <p>{section.description}</p>

            {section.items.map((item: any) => (
              <div key={item.id} className="flex gap-3 mt-2">
                {item.type === "Call" && <Phone />}
                {item.type === "Email" && <Mail />}
                {item.type === "Fax" && <FileText />}
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
