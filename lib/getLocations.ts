import {
  Location,
  LocationFilters,
  StrapiCollectionResponse,
} from "@/types/location";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/* ================= INTERNAL ================= */

type LocationAttributes = Omit<Location, "id">;

/* ================= FUNCTION ================= */

export async function getLocations(
  filters: LocationFilters = {},
): Promise<Location[]> {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not defined");
  }

  const params = new URLSearchParams();

  // relations
  params.set("populate", "image");

  // active locations only
  params.set("filters[isActive][$eq]", "true");

  /* ===== SEARCH ===== */
  if (filters.search) {
    params.set("filters[$or][0][name][$containsi]", filters.search);
    params.set("filters[$or][1][city][$containsi]", filters.search);
    params.set("filters[$or][2][state][$containsi]", filters.search);
  }

  /* ===== TYPE FILTER ===== */
  if (filters.types && filters.types.length > 0) {
    filters.types.forEach((type, index) => {
      params.set(`filters[type][$in][${index}]`, type);
    });
  }

  /* ===== SORT ===== */
  params.set("sort[0]", filters.sort ?? "name:asc");

  const res = await fetch(`${STRAPI_URL}/api/locations?${params.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch locations");
  }

  const json: StrapiCollectionResponse<LocationAttributes> = await res.json();

  /* ===== FLATTEN STRAPI RESPONSE ===== */
  return json.data.map((item) => ({
    id: item.id,
    ...item.attributes,
  }));
}
