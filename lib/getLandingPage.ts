import { LandingPage } from "@/types/landing-page";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error("❌ NEXT_PUBLIC_STRAPI_URL is not defined");
}

export async function getLandingPage(): Promise<LandingPage> {
  const url = `${STRAPI_URL}/api/landing-page`;

  console.log("🔵 Fetching:", url);

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ STRAPI ERROR:", res.status, res.statusText);
    throw new Error("Failed to fetch landing page data");
  }

  const json = await res.json();
  return json.data;
}
