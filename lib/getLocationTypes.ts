import { StrapiCollectionResponse } from "@/types/location";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type LocationTypeAttributes = {
  type?: string | null;
};

export async function getLocationTypes(): Promise<string[]> {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not defined");
  }

  const res = await fetch(
    `${STRAPI_URL}/api/locations?fields[0]=type&pagination[pageSize]=100`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch location types");
  }

  const json: StrapiCollectionResponse<LocationTypeAttributes> =
    await res.json();

  const types = json.data
    .map((item) => item.attributes?.type) // ✅ SAFE ACCESS
    .filter((type): type is string => Boolean(type));

  return Array.from(new Set(types)); // remove duplicates
}
