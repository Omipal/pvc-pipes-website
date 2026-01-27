export type FeaturedArticle = {
  id: number;
  title: string;
  slug: string;
  description: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
  author?: {
    fullName: string;
  };
};

export type FeaturedArticlesBlock = {
  __component: "blocks.featured-articles";
  id: number;
  articles: FeaturedArticle[];
};
