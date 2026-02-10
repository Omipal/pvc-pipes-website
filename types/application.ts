export type ApplicationCard = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: {
    url: string;
    alternativeText: string | null;
  };
  link?: {
    label?: string;
    href?: string;
    isExternal?: boolean;
  };
};

export type ApplicationsBlock = {
  id: number;
  __component: "blocks.card-grid";
  section_type: "applications" | "strengthSupport" | "performance" | "power";
  cards: ApplicationCard[];
};
