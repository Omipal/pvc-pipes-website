export type ContentWithImageBlock = {
  __component: "blocks.content-with-image";
  id: number;

  heading?: string;
  reversed?: boolean;
  content?: string;

  image?: {
    data?: {
      attributes?: {
        url?: string;
        alternativeText?: string | null;
      };
    };
  };

  link?: {
    label?: string;
    href?: string;
    isExternal?: boolean;
  };
};
