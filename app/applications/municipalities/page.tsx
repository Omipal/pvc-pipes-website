import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import ApplicationClient from "../_components/ApplicationClient";

export default async function MunicipalitiesPage() {
  const landingPage = await getLandingPage();

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "applications"
  );

  const card = applicationsBlock?.cards.find(
    (c) => c.slug === "municipalities"
  );

  if (!card) {
    return (
      <section className="min-h-screen">
        <div className="container py-10">
          <h1 className="text-2xl font-bold text-red-600">
            Invalid application page
          </h1>
        </div>
      </section>
    );
  }

  return <ApplicationClient card={card} />;
}
