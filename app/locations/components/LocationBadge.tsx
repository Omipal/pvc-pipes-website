import { LocationType } from "./types";
import { cn } from "../../../lib/utils";

interface LocationBadgeProps {
  type: LocationType;
  className?: string;
}

const badgeStyles: Record<LocationType, string> = {
  "Corporate Office": "bg-badge-corporate-bg text-badge-corporate",
  "Distribution Center": "bg-badge-distribution-bg text-badge-distribution",
  "Manufacturing Center": "bg-badge-manufacturing-bg text-badge-manufacturing",
};

export function LocationBadge({ type, className }: LocationBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium whitespace-nowrap",
        badgeStyles[type],
        className
      )}
    >
      {type}
    </span>
  );
}
