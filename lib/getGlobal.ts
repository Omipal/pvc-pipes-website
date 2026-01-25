const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getGlobal() {
  const res = await fetch(`${STRAPI_URL}/api/global?populate=deep`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch global data");
  }

  const json = await res.json();
  return json.data;
}
