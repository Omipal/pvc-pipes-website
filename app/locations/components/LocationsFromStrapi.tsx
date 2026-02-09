"use client";

import { useEffect, useState } from "react";
import { LocationsBlock, Location } from "@/types/location";
import dynamic from "next/dynamic";
import LocationsDrawer from "./LocationsDrawer";

const LocationsMap = dynamic(() => import("./LocationsMap"), { ssr: false });

/* ================= TYPES ================= */

type SortOption = "most-relevant" | "state" | "name";

type LocationFilters = {
  search: string;
  types: string[];
  sortBy: SortOption;
};

type Props = {
  block: LocationsBlock;
  locationTypes: string[];
};

/* ================= FILTER LOGIC ================= */

function getVisibleLocations(
  locations: Location[],
  filters: LocationFilters,
): Location[] {
  let result = [...locations];

  // SEARCH
  if (filters.search.trim()) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.type.toLowerCase().includes(q),
    );
  }

  // TYPE
  if (filters.types.length > 0) {
    result = result.filter((loc) => filters.types.includes(loc.type));
  }

  // SORT
  if (filters.sortBy === "state") {
    result.sort((a, b) => a.state.localeCompare(b.state));
  }

  if (filters.sortBy === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

/* ================= COMPONENT ================= */

export default function LocationsFromStrapi({ block }: Props) {
  const { heading, description, locations } = block;

  const locationTypes = Array.from(new Set(locations.map((loc) => loc.type)));

  const [filters, setFilters] = useState<LocationFilters>({
    search: "",
    types: [],
    sortBy: "most-relevant",
  });

  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null,
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const visibleLocations = getVisibleLocations(locations, filters);

  /* ===== AUTO SELECT FIRST LOCATION ===== */
  useEffect(() => {
    if (visibleLocations.length === 0) {
      setSelectedLocationId(null);
      return;
    }

    const exists = visibleLocations.some(
      (loc) => loc.id === selectedLocationId,
    );

    if (!exists) {
      setSelectedLocationId(visibleLocations[0].id);
    }
  }, [visibleLocations, selectedLocationId]);

  const selectedLocation = visibleLocations.find(
    (loc) => loc.id === selectedLocationId,
  );

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {heading}
          </h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div className="relative">
          <div
            className={`grid gap-6 transition-all duration-300 ${
              isDrawerOpen
                ? "grid-cols-1 lg:grid-cols-[380px_1fr]"
                : "grid-cols-1"
            }`}
          >
            {/* LEFT SIDEBAR */}
            {isDrawerOpen && (
              <div className="order-2 lg:order-1 h-auto lg:h-[800px]">
                <LocationsDrawer
                  locations={locations}
                  locationTypes={locationTypes}
                  selectedLocationId={selectedLocationId}
                  onSelectedLocationIdChange={setSelectedLocationId}
                  onFiltersChange={setFilters}
                  visibleLocations={visibleLocations}
                />
              </div>
            )}

            {/* MAP */}
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden border border-gray-200 h-auto lg:h-[800px] bg-gray-100 relative">
                {visibleLocations.length > 0 && selectedLocation ? (
                  <LocationsMap
                    locations={visibleLocations}
                    selectedLocation={selectedLocation}
                    onSelect={setSelectedLocationId}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>No locations to display on map</p>
                  </div>
                )}

                {/* TOGGLE BUTTON (ON MAP) */}
                <button
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  className="absolute top-4 left-4 z-30 w-10 h-10 rounded-full bg-white border border-gray-300 shadow-md hover:shadow-lg flex items-center justify-center transition"
                  aria-label={isDrawerOpen ? "Close sidebar" : "Open sidebar"}
                >
                  <svg
                    className={`w-5 h-5 text-gray-700 transition-transform ${
                      isDrawerOpen ? "" : "rotate-180"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
