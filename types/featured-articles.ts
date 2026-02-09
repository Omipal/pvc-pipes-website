import { ArticleItem } from "./article";

export type FeaturedArticlesBlock = {
  __component: "blocks.featured-articles";
  id: number;
  title?: string;
  articles: ArticleItem[];
};
