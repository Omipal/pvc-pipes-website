export type ApplicationCard = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: {
    url: string;
    alternativeText: string | null;
  };
};

export type ApplicationsBlock = {
  id: number;
  __component: "blocks.card-grid";
  section_type: "applications" | "support" | "performance" | "power";
  cards: ApplicationCard[];
};
