import { SectionHeadingBlock } from "@/types/section-heading";
import Hero from "./Hero/Hero";
import { HeroBlock } from "@/types/hero";

import AboutSection from "./AboutSection/AboutSection";
import { ContentWithImageBlock } from "@/types/content-with-image";

import Applications from "./Applications/Applications";
import { ApplicationsBlock } from "@/types/application";

import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";
import { GuaranteeBlock } from "@/types/guarantee";

import StrengthSupport from "./StrengthSupport/StrengthSupport";

import ProductsSection from "./ProductsSection/ProductsSection";
import { FeaturedProductsBlock } from "@/types/product";

import { FeaturedArticlesBlock } from "@/types/featured-articles";
import Article from "./Article/Article";

import Strength from "./Strength/Strength";

import Power from "./Power/Power";

import Services from "./Services/Services";
import { ServicesBlock } from "@/types/services";

type HomeProps = {
  hero?: HeroBlock;

  about?: ContentWithImageBlock;

  applicationsHeading?: SectionHeadingBlock;
  applications?: ApplicationsBlock;

  guarantee?: GuaranteeBlock;

  supportHeading?: SectionHeadingBlock;
  strengthSupport?: ApplicationsBlock;

  productsHeading?: SectionHeadingBlock;
  featuredProducts?: FeaturedProductsBlock;

  articlesHeading?: SectionHeadingBlock;
  featuredArticles?: FeaturedArticlesBlock;

  strengthHeading?: SectionHeadingBlock;
  strength?: ApplicationsBlock;

  powerHeading?: SectionHeadingBlock;
  power?: ApplicationsBlock;

  services?: ServicesBlock;
};

const Home = ({
  hero,

  about,

  applicationsHeading,
  applications,

  guarantee,

  supportHeading,
  strengthSupport,

  productsHeading,
  featuredProducts,

  articlesHeading,
  featuredArticles,

  strengthHeading,
  strength,

  powerHeading,
  power,

  services,
}: HomeProps) => {
  return (
    <div className="overflow-hidden">
      {hero && <Hero data={hero} />}
      {about && <AboutSection data={about} />}

      {applications && (
        <Applications data={applications} heading={applicationsHeading} />
      )}

      {guarantee && <GuaranteeSection data={guarantee} />}

      {strengthSupport && (
        <StrengthSupport data={strengthSupport} heading={supportHeading} />
      )}

      {featuredProducts && (
        <ProductsSection data={featuredProducts} heading={productsHeading} />
      )}

      {featuredArticles && (
        <Article data={featuredArticles} heading={articlesHeading} />
      )}

      {strength && <Strength data={strength} heading={strengthHeading} />}

      {power && <Power data={power} heading={powerHeading} />}

      {services && <Services data={services} />}
    </div>
  );
};

export default Home;
