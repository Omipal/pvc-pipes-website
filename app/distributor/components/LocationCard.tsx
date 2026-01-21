import { MapPin, Phone } from "lucide-react";
import { Location } from "./types";
import { LocationBadge } from "./LocationBadge";

interface LocationCardProps {
  location: Location;
  onClick?: () => void;
}

export function LocationCard({ location, onClick }: LocationCardProps) {
  const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;

  return (
    <article
      onClick={onClick}
      className="group bg-card rounded-lg overflow-hidden shadow-location-card hover:shadow-location-card-hover transition-all duration-200 cursor-pointer border border-border/50"
    >
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="w-32 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {location.types.map((type) => (
              <LocationBadge key={type} type={type} />
            ))}
          </div>

          {/* Name */}
          <h3 className="font-display font-semibold text-primary text-base mb-2 group-hover:text-primary-hover transition-colors">
            {location.name}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-1.5">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/60" />
            <span className="line-clamp-2">{fullAddress}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 flex-shrink-0 text-primary/60" />
            <a
              href={`tel:${location.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="text-primary hover:text-primary-hover hover:underline transition-colors"
            >
              {location.phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
