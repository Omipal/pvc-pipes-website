import { getPageBySlug } from "@/lib/getPageBySlug";
import HeroBanner from "../../components/Helper/HeroBanner";
import EmploymentFromStrapi from "./components/EmploymentFromStrapi";

export default async function CareersPage() {
  const page = await getPageBySlug("careers");

  if (!page) return null;

  const block = page.blocks?.[0];

  return (
    <>
      <HeroBanner banner={block?.banner} />
      <EmploymentFromStrapi content={block?.content} />
    </>
  );
}
