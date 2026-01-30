import { Product } from "@/types/product";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getRelatedProducts(
  categoryName: string,
  excludeSlug: string,
  limit = 4,
): Promise<Product[]> {
  const url =
    `${STRAPI_URL}/api/products` +
    `?filters[categories][name][$eq]=${encodeURIComponent(categoryName)}` +
    `&filters[slug][$ne]=${excludeSlug}` +
    `&populate=images,categories` +
    `&pagination[limit]=${limit}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }

  const json = await res.json();
  return json.data ?? [];
}
