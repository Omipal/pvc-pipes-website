import { HeroBlock } from "@/types/hero";
import { ContentWithImageBlock } from "@/types/content-with-image";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";
import { ServicesBlock } from "@/types/services";
import { SectionHeadingBlock } from "@/types/section-heading";

import Hero from "./Hero/Hero";
import AboutSection from "./AboutSection/AboutSection";
import Applications from "./Applications/Applications";
import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";
import StrengthSupport from "./StrengthSupport/StrengthSupport";
import Services from "./Services/Services";

import ProductsSection from "./ProductsSection/ProductsSection";
import { FeaturedProductsBlock } from "@/types/product";

import { FeaturedArticlesBlock } from "@/types/featured-articles";
import Article from "./Article/Article";

import Strength from "./Strength/Strength";
import Power from "./Power/Power";

type HomeProps = {
  hero?: HeroBlock;
  about?: ContentWithImageBlock;
  applicationsHeading?: SectionHeadingBlock;
  applications?: ApplicationsBlock;

  supportHeading?: SectionHeadingBlock;
  strengthSupport?: ApplicationsBlock;

  strengthHeading?: SectionHeadingBlock;
  strength?: ApplicationsBlock;

  powerHeading?: SectionHeadingBlock;
  power?: ApplicationsBlock;

  guarantee?: GuaranteeBlock;
  services?: ServicesBlock;

  featuredProducts?: FeaturedProductsBlock;
  featuredArticles?: FeaturedArticlesBlock;
};

const Home = ({
  hero,
  about,
  applicationsHeading,
  applications,

  supportHeading,
  strengthSupport,

  strengthHeading,
  strength,

  powerHeading,
  power,

  guarantee,
  services,

  featuredProducts,
  featuredArticles,
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

      {services && <Services data={services} />}

      {featuredProducts && <ProductsSection data={featuredProducts} />}
      {featuredArticles && <Article data={featuredArticles} />}

      {strength && <Strength data={strength} heading={strengthHeading} />}

      {power && <Power data={power} heading={powerHeading} />}
    </div>
  );
};

export default Home;
