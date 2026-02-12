import StrengthSupport from "@/components/Home/StrengthSupport/StrengthSupport";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";

export default async function StrengthSupportPage() {
  const landingPage = await getLandingPage();

  const supportBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "strengthSupport",
  );

  // Safety fallback (production safe)
  if (!supportBlock) {
    return null;
  }

  return <StrengthSupport data={supportBlock} showViewAllButton={false} />;
}
