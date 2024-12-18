import { cmsSection } from ".";
import { getCmsContent } from "../../service/cms/cmsContext";

export function CmsSectionRender({ pageName }) {
  const sections = getCmsContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSection[sectionProps.componentName];
    const isVisible =
      sectionProps.visible === true || sectionProps.visible === undefined;

    if (!Component) return null;
    if (!isVisible) return null;

    return <Component {...sectionProps} key={sectionProps.id} />;
  });
}
