export type ServicesBlock = {
  __component: "blocks.services";
  heading: string;
  sub_heading?: string;
  description?: string; // markdown
  text?: string; // markdown (terms text)

  link?: {
    href: string;
    label: string;
    isExternal?: boolean;
    isButtonLink?: boolean;
    type?: "PRIMARY" | "SECONDARY";
  };

  image?: {
    url: string;
    alternativeText?: string;
  };
};
