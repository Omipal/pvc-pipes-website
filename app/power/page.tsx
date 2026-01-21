import Power from "@/components/Home/Power/Power";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";

export default async function PowerPage() {
  const landingPage = await getLandingPage();

  const powerBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" && block.section_type === "power"
  );

  // Safety fallback (production safe)
  if (!powerBlock) {
    return null;
  }

  return <Power data={powerBlock} />;
}
