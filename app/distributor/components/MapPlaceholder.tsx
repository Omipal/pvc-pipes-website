import { MapPin } from "lucide-react";
import { Location } from "./types";

interface MapPlaceholderProps {
  locations: Location[];
}

export function MapPlaceholder({ locations }: MapPlaceholderProps) {
  return (
    <div className="relative w-full h-full bg-map-bg overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--map-grid)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--map-grid)) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Map markers overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-2xl h-96">
          {locations.slice(0, 8).map((location, index) => {
            // Distribute pins visually across the placeholder
            const positions = [
              { top: "20%", left: "30%" },
              { top: "35%", left: "60%" },
              { top: "50%", left: "45%" },
              { top: "25%", left: "75%" },
              { top: "60%", left: "25%" },
              { top: "45%", left: "80%" },
              { top: "70%", left: "55%" },
              { top: "30%", left: "15%" },
            ];
            const pos = positions[index] || { top: "50%", left: "50%" };

            return (
              <div
                key={location.id}
                className="absolute group cursor-pointer"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="relative">
                  <MapPin
                    className="w-8 h-8 text-primary drop-shadow-md hover:scale-110 transition-transform"
                    fill="hsl(var(--primary))"
                    strokeWidth={1.5}
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-card border border-border rounded-lg shadow-lg px-3 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-foreground">
                        {location.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {location.city}, {location.state}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1">
        <button className="w-8 h-8 bg-card border border-border rounded shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors">
          +
        </button>
        <button className="w-8 h-8 bg-card border border-border rounded shadow-sm flex items-center justify-center text-foreground hover:bg-muted transition-colors">
          −
        </button>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-card/80 px-2 py-1 rounded">
        Map Placeholder
      </div>
    </div>
  );
}
