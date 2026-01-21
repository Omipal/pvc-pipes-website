export type LocationType =
  | "Corporate Office"
  | "Distribution Center"
  | "Manufacturing Center";

export interface Location {
  id: string;
  name: string;
  types: LocationType[];
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  image: string;
  lat: number;
  lng: number;
}

export type SortOption = "relevant" | "state" | "name";

export interface LocationFilters {
  search: string;
  types: LocationType[];
  sortBy: SortOption;
}
