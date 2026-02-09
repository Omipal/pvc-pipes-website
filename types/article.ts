export type ArticleItem = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  excerpt?: string;
  content?: string; // 👈 detail page ke liye
  publishedAt?: string;

  featuredImage?: {
    url: string;
    alternativeText: string | null;
  };

  author?: {
    id: number;
    fullName: string;
  };

  contentTags?: {
    id: number;
    title: string;
  }[];
};
