import Strength from "@/components/Home/Strength/Strength";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";

export default async function StrengthPage() {
  const landingPage = await getLandingPage();

  const performanceBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "performance"
  );

  // Safety fallback (production safe)
  if (!performanceBlock) {
    return null;
  }

  return <Strength data={performanceBlock} />;
}
