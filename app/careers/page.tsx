import { getPageBySlug } from "@/lib/getPageBySlug";

import EmploymentFromStrapi from "./components/EmploymentFromStrapi";
import { CareersBlock } from "../../types/careers";

export default async function CareersPage() {
  const page = await getPageBySlug("careers");
  if (!page) return null;

  const careersBlock = page.blocks.find(
    (block): block is CareersBlock => block.__component === "blocks.markdown",
  );

  if (!careersBlock) return null;

  return (
    <>
      <EmploymentFromStrapi content={careersBlock.content} />
    </>
  );
}
