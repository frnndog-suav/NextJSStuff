import { CmsSectionRender } from "../../components/cmsSections/cmsSectionRender";
import { PageHoc } from "../../components/wrapper/pageHoc";
import { cmsService } from "../../service/cms/cmsService";

export async function getStaticProps({ preview }) {
  const { data: cmsContent } = await cmsService({
    query: `
    query {
      pageHome {
        pageContent {
          section {
            componentName: __typename
            ... on CommonSeoBlockRecord {
              id
              title
            }
            ... on CommonMenuRecord {
              id
            }
            ... on CommonFooterRecord {
              id
              visible
            }
            ... on PageHomeHeroSectionRecord {
              id
              title
              description
              ctaLink
              ctaText
            }
          }
        }
      } 
    }
    `,
    isPreviewMode: preview,
  });

  return {
    props: {
      cmsContent,
    },
  };
}

function HomeScreen() {
  return <CmsSectionRender pageName="pageHome" />;
}

export default PageHoc(HomeScreen);
