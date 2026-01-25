import { LandingPage } from "@/types/landing-page";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
}

export async function getLandingPage(): Promise<LandingPage | null> {
  const res = await fetch(`${STRAPI_URL}/api/landing-pages?populate=deep`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json?.data?.attributes as LandingPage;
}
