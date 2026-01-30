export type ProductImage = {
  url: string;
  alternativeText?: string | null;
};

export type ProductCategory = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  short_description: string;
  price: number;
  offerPrice: number;
  images: ProductImage[];
  categories: ProductCategory[];
};

export type FeaturedProductsBlock = {
  __component: "blocks.featured-products";
  id: number;
  products: Product[];
};
