export type SectionHeadingBlock = {
  id: number;
  __component: "blocks.section-heading";
  heading?: string;
  sub_heading?: string | null;
  description?: string; // markdown
};
