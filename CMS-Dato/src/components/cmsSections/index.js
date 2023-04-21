import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { SEOBlock } from "../commons/SEOBlock";
import { PageFaqSectionRecord } from "../pag/PageFaqSectionRecord";
import { PageHomeHeroSectionRecord } from "../pag/PageHomeHeroSectionRecord";

export const cmsSection = {
  CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommonMenuRecord: (props) => <Menu {...props} />,
  CommonFooterRecord: (props) => <Footer {...props} />,
  PageHomeHeroSectionRecord: (props) => (
    <PageHomeHeroSectionRecord {...props} />
  ),
  PageFaqQuestionRecord: (props) => <PageFaqSectionRecord {...props} />,
};
