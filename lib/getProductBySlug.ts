import { Product } from "@/types/product";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error("❌ NEXT_PUBLIC_STRAPI_URL is not defined");
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/products?filters[slug][$eq]=${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("❌ Failed to fetch product by slug");
  }

  const json = await res.json();

  return json.data?.[0] ?? null;
}
