import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import ApplicationClient from "../_components/ApplicationClient";

export default async function IndustrialPage() {
  const landingPage = await getLandingPage();

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "applications"
  );

  const card = applicationsBlock?.cards.find((c) => c.slug === "industrial");

  if (!card) return null;

  return <ApplicationClient card={card} />;
}
