import { getPageBySlug } from "@/lib/getPageBySlug";
import HeroBanner from "@/components/Helper/HeroBanner";
import { ContactPageClient } from "./components/contact-page-client";
import { Banner } from "@/types/banner";
import { ContactBlock } from "@/types/contact";

export default async function ContactPage() {
  const page = await getPageBySlug("contact");
  if (!page) return null;

  const bannerBlock = page.blocks.find(
    (b): b is Banner => b.__component === "blocks.banner",
  );

  const contactBlock = page.blocks.find(
    (b): b is ContactBlock => b.__component === "blocks.contact",
  );

  if (!contactBlock) return null;

  return (
    <>
      <HeroBanner banner={bannerBlock} />
      <ContactPageClient contact={contactBlock} />
    </>
  );
}
