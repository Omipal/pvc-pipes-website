import Support from "@/components/Home/Support/Support";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";

export default async function SupportPage() {
  const landingPage = await getLandingPage();

  const supportBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "support"
  );

  // Safety fallback (production safe)
  if (!supportBlock) {
    return null;
  }

  return <Support data={supportBlock} />;
}
