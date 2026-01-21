"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LocationType } from "./types";

interface LocationTypeFilterProps {
  selectedTypes: LocationType[];
  onChange: (types: LocationType[]) => void;
}

const allTypes: LocationType[] = [
  "Corporate Office",
  "Distribution Center",
  "Manufacturing Center",
];

export function LocationTypeFilter({
  selectedTypes,
  onChange,
}: LocationTypeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (type: LocationType) => {
    if (selectedTypes.includes(type)) {
      onChange(selectedTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors py-1"
      >
        <span>Location Type</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-lg shadow-lg p-3 min-w-[200px] z-50 animate-fade-in bg-white">
          <div className="space-y-2.5">
            {allTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleToggle(type)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />

                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
