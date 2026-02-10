"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getStrapiImage } from "@/lib/getStrapiImage";
import { Location } from "@/types/location";

type SortOption = "most-relevant" | "state" | "name";

type LocationFilters = {
  search: string;
  types: string[];
  sortBy: SortOption;
};

type Props = {
  locations: Location[];
  locationTypes: string[];
  selectedLocationId: number | null;
  onSelectedLocationIdChange: (id: number | null) => void;
  onFiltersChange: (filters: LocationFilters) => void;
  visibleLocations: Location[];
};

export default function LocationsDrawer({
  locations,
  locationTypes,
  selectedLocationId,
  onSelectedLocationIdChange,
  onFiltersChange,
  visibleLocations,
}: Props) {
  console.log("locationTypes:", locationTypes);
  const locationTypeRef = useRef<HTMLDivElement | null>(null);
  const sortRef = useRef<HTMLDivElement | null>(null);

  const [searchInput, setSearchInput] = useState("");
  const [typeOpen, setTypeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [filters, setFilters] = useState<LocationFilters>({
    search: "",
    types: [],
    sortBy: "most-relevant",
  });

  /* ===== OUTSIDE CLICK ===== */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        locationTypeRef.current &&
        !locationTypeRef.current.contains(target)
      ) {
        setTypeOpen(false);
      }

      if (sortRef.current && !sortRef.current.contains(target)) {
        setSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ===== HANDLERS ===== */

  const handleSearch = () => {
    const newFilters = {
      ...filters,
      search: searchInput,
    };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const toggleType = (type: string) => {
    const newFilters = {
      ...filters,
      types: filters.types.includes(type)
        ? filters.types.filter((t) => t !== type)
        : [...filters.types, type],
    };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const changeSort = (sortBy: SortOption) => {
    const newFilters = {
      ...filters,
      sortBy,
    };
    setFilters(newFilters);
    onFiltersChange(newFilters);
    setSortOpen(false);
  };

  const sortLabel =
    filters.sortBy === "most-relevant"
      ? "Most relevant"
      : filters.sortBy === "state"
        ? "State"
        : "Name";

  return (
    <div className="flex flex-col h-full">
      {/* SEARCH BAR */}
      <div className="flex gap-2 mb-6">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          placeholder="Enter location"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button onClick={handleSearch} className="btn-orange">
          Search
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-start">
        {/* LOCATION TYPE FILTER */}
        <div ref={locationTypeRef} className="relative w-full">
          <button
            onClick={() => setTypeOpen((v) => !v)}
            className="text-sm font-medium text-gray-600 hover:text-gray-700 flex items-center gap-1 transition-colors"
          >
            <span>Location Type</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                typeOpen ? "" : "transform rotate-180"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {typeOpen && (
            <div className="absolute top-full left-0 mt-1 w-56 border border-gray-300 rounded-lg bg-white shadow-md z-50 py-3 px-4">
              <div className="space-y-3">
                {locationTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 text-sm cursor-pointer text-gray-600 hover:text-gray-800"
                  >
                    <input
                      type="checkbox"
                      checked={filters.types.includes(type)}
                      onChange={() => toggleType(type)}
                      className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SORT FILTER */}
        <div ref={sortRef} className="relative w-full">
          <button
            onClick={() => setSortOpen((v) => !v)}
            className="text-sm font-medium text-gray-600 hover:text-gray-700 flex items-center gap-1 transition-colors"
          >
            <span>
              Sort by <span className="font-semibold">{sortLabel}</span>
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                sortOpen ? "" : "transform rotate-180"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {sortOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 border border-gray-300 rounded-lg bg-white shadow-md z-50 py-2">
              {[
                ["most-relevant", "Most relevant"],
                ["state", "State"],
                ["name", "Name"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => changeSort(key as SortOption)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    filters.sortBy === key
                      ? "text-gray-900 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RESULTS COUNT */}
      <div className="mb-4 text-sm text-gray-600">
        {visibleLocations.length}{" "}
        {visibleLocations.length === 1 ? "Result" : "Results"}
      </div>

      {/* LOCATIONS LIST */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {visibleLocations.length > 0 ? (
          visibleLocations.map((loc) => {
            const imageUrl = getStrapiImage(loc.image);
            const isActive = loc.id === selectedLocationId;

            return (
              <div
                key={loc.id}
                onClick={() => onSelectedLocationIdChange(loc.id)}
                className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                  isActive
                    ? "border-blue-500 ring-2 ring-blue-100 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                {/* IMAGE */}
                {imageUrl && (
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={
                        loc.image?.data?.attributes?.alternativeText || loc.name
                      }
                      width={380}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-4">
                  {/* TYPE BADGE */}
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      {loc.type}
                    </span>
                  </div>

                  {/* NAME */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {loc.name}
                  </h3>

                  {/* ADDRESS WITH ICON */}
                  <div className="flex items-start gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-gray-600">
                      {loc.addressLine}
                      <br />
                      {loc.city}, {loc.state} {loc.zip}
                    </p>
                  </div>

                  {/* PHONE WITH ICON */}
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-700 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418.935 1.331 2.601 2.986 4.256 1.656 1.656 3.322 2.569 4.257 2.987l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.835 0-16-7.165-16-16V3z" />
                    </svg>
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-sm text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-40 text-gray-500">
            <p>No locations found</p>
          </div>
        )}
      </div>
    </div>
  );
}
