const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getProducts(categorySlug?: string) {
  const url = categorySlug
    ? `${STRAPI_URL}/api/products?filters[categories][name][$eq]=${categorySlug}&populate=images,categories`
    : `${STRAPI_URL}/api/products?populate=images,categories`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await res.json();
  return json.data;
}
