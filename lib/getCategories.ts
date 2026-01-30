const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getCategories() {
  const res = await fetch(`${STRAPI_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const json = await res.json();
  return json.data;
}
