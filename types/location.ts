/* ================= STRAPI GENERIC ================= */

export type StrapiItem<T> = {
  id: number;
  attributes: T;
};

export type StrapiCollectionResponse<T> = {
  data: StrapiItem<T>[];
};

/* ================= MEDIA ================= */

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string | null;
    };
  } | null;
};

/* ================= LOCATION ENTITY ================= */

export type Location = {
  id: number;
  documentId: string;
  slug: string;

  name: string;
  type: string;

  addressLine: string;
  city: string;
  state: string;
  zip: string;
  country: string;

  phone: string;

  latitude: number;
  longitude: number;

  isActive: boolean;

  image?: StrapiImage;
};

/* ================= LOCATION BLOCK (PAGE BLOCK) ================= */

export type LocationsBlock = {
  __component: "blocks.locations";
  heading: string;
  description: string | null;
  showOnMap: boolean;
  locations: Location[];
};

/* ================= FILTER / QUERY ================= */

export type LocationFilters = {
  search?: string;
  types?: string[];
  sort?: "name:asc" | "name:desc" | "state:asc" | "state:desc";
};
