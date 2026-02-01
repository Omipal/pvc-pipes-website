import { getLandingPage } from "@/lib/getLandingPage";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import { ContentWithImageBlock } from "@/types/content-with-image";

// ✅ INLINE type guard (yahi missing piece tha)
function isContentWithImageBlock(block: any): block is ContentWithImageBlock {
  return block?.__component === "blocks.content-with-image";
}

export default async function AboutPage() {
  const landingPage = await getLandingPage();
  const blocks = landingPage?.blocks ?? [];

  return (
    <main>
      {blocks.filter(isContentWithImageBlock).map((block) => (
        <AboutSection key={block.id} data={block} />
      ))}
    </main>
  );
}
