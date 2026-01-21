export type HeroVideo = {
  url: string;
};

export type HeroStat = {
  id: number;
  value: string;
  label: string;
};

export type HeroLink = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  isButtonLink?: boolean;
  type?: string;
};

export type HeroInfoCard = {
  badge_text?: string;
  title: string;
  description: string;
  link?: HeroLink;
};

export type HeroBlock = {
  id: number;
  __component: "blocks.hero";

  badge?: string;
  heading_prefix?: string;
  heading_highlight?: string;
  sub_heading?: string;

  text?: string; // ✅ MISSING FIELD FIX
  description?: string;

  video?: HeroVideo;
  links?: HeroLink[];
  stats?: HeroStat[];
  info_card?: HeroInfoCard; // ✅ MISSING FIELD FIX
};
