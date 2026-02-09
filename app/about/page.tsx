import { ContentWithImageBlock } from "@/types/content-with-image";
import HeroBanner from "@/components/Helper/HeroBanner";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import { getPageBySlug } from "@/lib/getPageBySlug";
import { Banner } from "@/types/banner";

export default async function AboutPage() {
  const page = await getPageBySlug("about");
  if (!page) return null;

  const bannerBlock = page.blocks?.find(
    (b): b is Banner => b.__component === "blocks.banner",
  );

  const aboutBlock = page.blocks?.find(
    (b): b is ContentWithImageBlock =>
      b.__component === "blocks.content-with-image",
  );

  return (
    <main>
      <HeroBanner banner={bannerBlock} />
      {aboutBlock && <AboutSection data={aboutBlock} />}
    </main>
  );
}
