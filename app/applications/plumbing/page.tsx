import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import ApplicationClient from "../_components/ApplicationClient";
import BreadcrumbSetter from "@/components/BreadcrumbSetter";

export default async function PlumbingPage() {
  const landingPage = await getLandingPage();

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "applications",
  );

  const card = applicationsBlock?.cards.find((c) => c.slug === "plumbing");

  if (!card) return null;

  return (
    <>
      <BreadcrumbSetter
        items={[
          { label: "Home", href: "/" },
          { label: "Applications", href: "/applications" },
          { label: "Plumbing" },
        ]}
      />
      <ApplicationClient card={card} />
    </>
  );
}
