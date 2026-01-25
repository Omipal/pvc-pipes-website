import { LandingPage } from "@/types/landing-page";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getLandingPage(): Promise<LandingPage | null> {
  const res = await fetch(`${STRAPI_URL}/api/landing-page?populate=deep`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ Landing page fetch failed:", res.status);
    return null;
  }

  const json = await res.json();

  // 🔥 THIS LINE IS KEY
  return json?.data?.attributes as LandingPage | null;
}
