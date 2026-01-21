import { useState, useMemo, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Location, LocationType, SortOption } from "./types";
import { locationsData } from "./data";
import { SearchBar } from "./SearchBar";
import { LocationTypeFilter } from "./LocationTypeFilter";
import { SortDropdown } from "./SortDropdown";
import { LocationCard } from "./LocationCard";
import { cn } from "../../../lib/utils";

interface LocationsDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function LocationsDrawer({ isOpen, onToggle }: LocationsDrawerProps) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<LocationType[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("relevant");
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle closing type filter when clicking outside
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter and sort locations
  const filteredLocations = useMemo(() => {
    let results = [...locationsData];

    // Filter by search
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      results = results.filter(
        (loc) =>
          loc.name.toLowerCase().includes(searchLower) ||
          loc.city.toLowerCase().includes(searchLower) ||
          loc.state.toLowerCase().includes(searchLower) ||
          loc.address.toLowerCase().includes(searchLower)
      );
    }

    // Filter by type
    if (selectedTypes.length > 0) {
      results = results.filter((loc) =>
        loc.types.some((type) => selectedTypes.includes(type))
      );
    }

    // Sort
    switch (sortBy) {
      case "state":
        results.sort((a, b) => a.state.localeCompare(b.state));
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // 'relevant' - keep original order or put corporate first
        results.sort((a, b) => {
          const aIsCorp = a.types.includes("Corporate Office");
          const bIsCorp = b.types.includes("Corporate Office");
          if (aIsCorp && !bIsCorp) return -1;
          if (!aIsCorp && bIsCorp) return 1;
          return 0;
        });
    }

    return results;
  }, [search, selectedTypes, sortBy]);

  const handleSearch = () => {
    // Search is already reactive, this could trigger analytics, etc.
  };

  return (
    <div
      ref={drawerRef}
      className={cn(
        "relative h-full bg-card border-r border-border flex flex-col transition-all duration-300 ease-in-out",
        isOpen ? "w-[460px]" : "w-0"
      )}
    >
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 w-8 h-16 bg-card border border-border rounded-r-lg shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors",
          isOpen ? "-right-8" : "left-0"
        )}
        aria-label={isOpen ? "Close drawer" : "Open drawer"}
      >
        {isOpen ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col h-full overflow-hidden transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Search */}
        <div className="p-4 border-b border-border">
          <SearchBar
            value={search}
            onChange={setSearch}
            onSearch={handleSearch}
          />
        </div>

        {/* Filters */}
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <LocationTypeFilter
            selectedTypes={selectedTypes}
            onChange={setSelectedTypes}
          />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        {/* Results count */}
        <div className="px-4 py-2 text-sm text-muted-foreground">
          {filteredLocations.length} Result
          {filteredLocations.length !== 1 ? "s" : ""}
        </div>

        {/* Location cards */}
        <div className="flex-1 overflow-y-auto locations-scroll">
          <div className="p-4 pt-0 space-y-4">
            {filteredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}

            {filteredLocations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No locations found</p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
