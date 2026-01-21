// types/page.ts

export type Media = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  } | null;
};

export type Banner = {
  type: "IMAGE" | "VIDEO";
  image?: Media;
  video?: Media;
};

export type Page = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    banner?: Banner;

    // 👇 THIS IS IMPORTANT
    content?: string; // markdown from Strapi
  };
};
