import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import StrengthClient from "./StrengthClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StrengthDetailPage({ params }: PageProps) {
  // ✅ IMPORTANT: params is Promise in Next.js 15+
  const { slug } = await params;

  const landingPage = await getLandingPage();

  // 🔹 performance (Strength of Performance) card-grid block
  const performanceBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "performance"
  );

  const card = performanceBlock?.cards.find((c) => c.slug === slug);

  // ❌ Invalid slug handling
  if (!card) {
    return (
      <section className="min-h-screen">
        <div className="container py-10">
          <h1 className="text-2xl font-bold text-red-600">
            Invalid strength page
          </h1>
        </div>
      </section>
    );
  }

  // ✅ Valid strength detail page
  return <StrengthClient card={card} />;
}
