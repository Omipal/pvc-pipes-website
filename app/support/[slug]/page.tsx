import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import SupportClient from "./SupportClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SupportDetailPage({ params }: PageProps) {
  // ✅ IMPORTANT: await params
  const { slug } = await params;

  const landingPage = await getLandingPage();

  // support card-grid block
  const supportBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" &&
      block.section_type === "support"
  );

  const card = supportBlock?.cards.find((c) => c.slug === slug);

  if (!card) {
    return (
      <section className="min-h-screen">
        <div className="container py-10">
          <h1 className="text-2xl font-bold text-red-600">
            Invalid support page
          </h1>
        </div>
      </section>
    );
  }

  return <SupportClient card={card} />;
}
