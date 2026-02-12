import Applications from "@/components/Home/Applications/Applications";
import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import BreadcrumbSetter from "@/components/BreadcrumbSetter";

export default async function ApplicationsPage() {
  const landingPage = await getLandingPage();

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "applications",
  );

  if (!applicationsBlock) return null;

  return (
    <>
      <BreadcrumbSetter
        items={[{ label: "Home", href: "/" }, { label: "Applications" }]}
      />
      <Applications data={applicationsBlock} showViewAllButton={false} />
    </>
  );
}
