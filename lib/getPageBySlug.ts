const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/* ================= BLOCK BASE ================= */

export type PageBlock = {
  __component: string;
  [key: string]: unknown;
};

/* ================= PAGE TYPE ================= */

export type Page = {
  id: number;
  blocks: PageBlock[];
};

/* ================= FETCH FUNCTION ================= */

export async function getPageBySlug(slug: string): Promise<Page | null> {
  if (!STRAPI_URL) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
  }

  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=deep`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const json = await res.json();

  const page = json.data?.[0];
  if (!page) return null;

  return {
    id: page.id,
    blocks: page.blocks ?? [],
  };
}
