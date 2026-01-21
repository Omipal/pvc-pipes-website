const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getPageBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=deep`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const json = await res.json();

  return json.data?.[0] ?? null;
}
