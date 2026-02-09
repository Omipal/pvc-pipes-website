import HeroBanner from "../../components/Helper/HeroBanner";
import { ContactPageClient } from "./components/contact-page-client";
import { getPageBySlug } from "@/lib/getPageBySlug";

export default async function ContactPage() {
  const page = await getPageBySlug("contact");

  const contactBlock = page?.blocks?.find(
    (block: any) => block.__component === "blocks.contact",
  );

  return (
    <>
      <HeroBanner />
      <ContactPageClient contact={contactBlock} />
    </>
  );
}
