import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { SEOBlock } from "../commons/SEOBlock";
import { PageHomeHeroSectionRecord } from "../pag/PageHomeHeroSectionRecord";

export const cmsSection = {
  CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  CommonMenuRecord: (props) => <Menu {...props} />,
  CommonFooterRecord: (props) => <Footer {...props} />,
  PageHomeHeroSectionRecord: (props) => (
    <PageHomeHeroSectionRecord {...props} />
  ),
};
