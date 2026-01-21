/* ================================
   STRAPI MEDIA
================================ */

export type StrapiMedia = {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string | null;
      width?: number;
      height?: number;
      mime?: string;
    };
  } | null;
};

/* ================================
   MARKDOWN BLOCK
================================ */

export type MarkdownBanner = {
  id: number;
  type: "IMAGE" | "VIDEO";

  image?: StrapiMedia;

  video?: {
    url: string;
  };
};

export type MarkdownHeading = {
  id: number;
  heading?: string;
  description?: string;
  sub_heading?: string;
};

export type MarkdownLink = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink?: boolean;
  type?: "PRIMARY" | "SECONDARY";
};

export type MarkdownBlock = {
  id: number;
  __component: "blocks.markdown";

  content: string;
  banner?: MarkdownBanner;
  heading?: MarkdownHeading;
  link?: MarkdownLink;
};
