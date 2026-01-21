"use client";

import { useState, useMemo } from "react";
import { LocationsDrawer } from "./LocationsDrawer";
import { MapPlaceholder } from "./MapPlaceholder";
import { locationsData } from "./data";
import { LocationType } from "./types";

export function Locations() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Drawer */}
      <LocationsDrawer
        isOpen={isDrawerOpen}
        onToggle={() => setIsDrawerOpen(!isDrawerOpen)}
      />

      {/* Map */}
      <div className="flex-1 relative">
        <MapPlaceholder locations={locationsData} />
      </div>
    </div>
  );
}
