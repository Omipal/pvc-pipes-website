// app/applications/page.tsx

import Applications from "@/components/Home/Applications/Applications";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";

export default async function ApplicationsPage() {
  const landingPage = await getLandingPage();

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "applications"
  );

  // Safety fallback (production safe)
  if (!applicationsBlock) {
    return null;
  }

  // ✅ Reuse exact same Home Applications section
  return <Applications data={applicationsBlock} />;
}
