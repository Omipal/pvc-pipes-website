import { HeroBlock } from "@/types/hero";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";
import { ServicesBlock } from "@/types/services";
import { SectionHeadingBlock } from "@/types/section-heading";

import Hero from "./Hero/Hero";
import Applications from "./Applications/Applications";
import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";
import Support from "./Support/Support";
import Services from "./Services/Services";
import Strength from "./Strength/Strength";
import Power from "./Power/Power";

type HomeProps = {
  hero?: HeroBlock;

  applicationsHeading?: SectionHeadingBlock;
  applications?: ApplicationsBlock;

  supportHeading?: SectionHeadingBlock;
  support?: ApplicationsBlock;

  strengthHeading?: SectionHeadingBlock;
  strength?: ApplicationsBlock;

  powerHeading?: SectionHeadingBlock;
  power?: ApplicationsBlock;

  guarantee?: GuaranteeBlock;
  services?: ServicesBlock;
};

const Home = ({
  hero,

  applicationsHeading,
  applications,

  supportHeading,
  support,

  strengthHeading,
  strength,

  powerHeading,
  power,

  guarantee,
  services,
}: HomeProps) => {
  return (
    <div className="overflow-hidden">
      {hero && <Hero data={hero} />}

      {applications && (
        <Applications data={applications} heading={applicationsHeading} />
      )}

      {guarantee && <GuaranteeSection data={guarantee} />}

      {support && <Support data={support} heading={supportHeading} />}

      {services && <Services data={services} />}

      {strength && <Strength data={strength} heading={strengthHeading} />}

      {power && <Power data={power} heading={powerHeading} />}
    </div>
  );
};

export default Home;
