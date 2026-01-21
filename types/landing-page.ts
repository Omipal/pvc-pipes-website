import { HeroBlock } from "./hero";
import { ApplicationsBlock } from "./application";
import { GuaranteeBlock } from "./guarantee";
import { ServicesBlock } from "./services";
import { SectionHeadingBlock } from "./section-heading";

export type LandingPage = {
  blocks?: Array<
    | HeroBlock
    | SectionHeadingBlock
    | ApplicationsBlock
    | GuaranteeBlock
    | ServicesBlock
  >;
};
