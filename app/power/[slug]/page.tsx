import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import PowerClient from "./PowerClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PowerDetailPage({ params }: PageProps) {
  // ✅ MUST await params
  const { slug } = await params;

  const landingPage = await getLandingPage();

  // 🔍 find power card-grid
  const powerBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" && block.section_type === "power"
  );

  const card = powerBlock?.cards.find((c) => c.slug === slug);

  if (!card) {
    return (
      <section className="min-h-screen">
        <div className="container py-10">
          <h1 className="text-2xl font-bold text-red-600">
            Invalid power page
          </h1>
        </div>
      </section>
    );
  }

  return <PowerClient card={card} />;
}
