import Home from "@/components/Home/Home";
import { getLandingPage } from "@/lib/getLandingPage";

import { SectionHeadingBlock } from "@/types/section-heading";
import { HeroBlock } from "@/types/hero";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";
import { ServicesBlock } from "@/types/services";

export default async function HomePage() {
  // 🔵 Fetch landing page data
  const landingPage = await getLandingPage();

  // ✅ FIX 3: SAFE fallback
  const blocks = landingPage?.blocks ?? [];

  /* =========================
     Section Headings
     ========================= */
  const sectionHeadings = blocks.filter(
    (block): block is SectionHeadingBlock =>
      block.__component === "blocks.section-heading",
  );

  /* =========================
     Card Grid Blocks
     ========================= */
  const cardGridBlocks = blocks.filter(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid",
  );

  /* =========================
     Other blocks
     ========================= */
  const heroBlock = blocks.find(
    (block): block is HeroBlock => block.__component === "blocks.hero",
  );

  const guaranteeBlock = blocks.find(
    (block): block is GuaranteeBlock =>
      block.__component === "blocks.guarantee",
  );

  const servicesBlock = blocks.find(
    (block): block is ServicesBlock => block.__component === "blocks.services",
  );

  /* =========================
     Card grids by section_type
     ========================= */
  const applicationsBlock = cardGridBlocks.find(
    (b) => b.section_type === "applications",
  );

  const supportBlock = cardGridBlocks.find((b) => b.section_type === "support");

  const performanceBlock = cardGridBlocks.find(
    (b) => b.section_type === "performance",
  );

  const powerBlock = cardGridBlocks.find((b) => b.section_type === "power");

  /* =========================
     Section Headings (Strapi order)
     ========================= */
  const applicationsHeading = sectionHeadings[0];
  const supportHeading = sectionHeadings[1];
  const performanceHeading = sectionHeadings[2];
  const powerHeading = sectionHeadings[3];

  return (
    <Home
      hero={heroBlock}
      applicationsHeading={applicationsHeading}
      applications={applicationsBlock}
      guarantee={guaranteeBlock}
      supportHeading={supportHeading}
      support={supportBlock}
      strengthHeading={performanceHeading}
      strength={performanceBlock}
      services={servicesBlock}
      powerHeading={powerHeading}
      power={powerBlock}
    />
  );
}
