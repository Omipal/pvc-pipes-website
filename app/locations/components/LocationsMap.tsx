"use client";

import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Location } from "@/types/location";

type Props = {
  locations: Location[];
  selectedLocation: Location | null;
  onSelect: (id: number) => void;
};

export default function LocationsMap({
  locations,
  selectedLocation,
  onSelect,
}: Props) {
  const [popupId, setPopupId] = useState<number | null>(null);

  if (!locations.length) return null;

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        latitude: locations[0].latitude,
        longitude: locations[0].longitude,
        zoom: 4,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          latitude={loc.latitude}
          longitude={loc.longitude}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupId(loc.id);
            onSelect(loc.id);
          }}
        >
          <div
            className={`w-4 h-4 rounded-full cursor-pointer ${
              loc.id === selectedLocation?.id ? "bg-blue-600" : "bg-red-500"
            }`}
          />
        </Marker>
      ))}

      {popupId && (
        <Popup
          latitude={locations.find((l) => l.id === popupId)!.latitude}
          longitude={locations.find((l) => l.id === popupId)!.longitude}
          onClose={() => setPopupId(null)}
          closeOnClick={false}
        >
          <div className="text-sm">
            <strong>{locations.find((l) => l.id === popupId)?.name}</strong>
            <p>{locations.find((l) => l.id === popupId)?.city}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
