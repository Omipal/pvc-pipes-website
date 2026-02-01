import { HeroBlock } from "./hero";
import { ApplicationsBlock } from "./application";
import { GuaranteeBlock } from "./guarantee";
import { ServicesBlock } from "./services";
import { SectionHeadingBlock } from "./section-heading";
import { FeaturedArticlesBlock } from "./featured-articles";
import { FeaturedProductsBlock } from "./product";
import { ContentWithImageBlock } from "./content-with-image";

export type LandingPage = {
  blocks?: Array<
    | HeroBlock
    | SectionHeadingBlock
    | ApplicationsBlock
    | GuaranteeBlock
    | ServicesBlock
    | FeaturedArticlesBlock
    | FeaturedProductsBlock
    | ContentWithImageBlock
  >;
};
