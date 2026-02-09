import { ArticleItem } from "@/types/article";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleItem | null> {
  const res = await fetch(
    `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const json = await res.json();

  return json.data?.[0] ?? null;
}
