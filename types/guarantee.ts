export type GuaranteeListItem = {
  text: string;
};

export type GuaranteeStat = {
  value: string;
  label: string;
};

export type GuaranteeBlock = {
  id: number;
  __component: "blocks.guarantee";

  badge_text?: string;
  heading?: string;
  heading_highlight?: string;
  sub_heading?: string;

  list?: GuaranteeListItem[];

  link?: {
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
    isButtonLink?: boolean;
    type?: string;
  };

  stats?: GuaranteeStat[];

  image?: {
    url: string;
    alternativeText: string | null;
  };
};
