import Head from "next/head";
import { Footer } from "../../components/commons/Footer";
import { Menu } from "../../components/commons/Menu";
import { PageHoc } from "../../components/wrapper/pageHoc";
import { cmsService } from "../../service/cms/cmsService";
import { Box, Button, Image, Text, theme } from "../../theme/components";
import { CmsSectionRender } from "../../components/cmsSections/cmsSectionRender";

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

function HomeScreen(){
    return(
      <CmsSectionRender pageName="pageHome" />
    )
}

// function HomeScreen() {
//   return (
//     <>
//       {/* Common - SEO block */}
//       <Head>
//         <title>Home - Alura</title>
//       </Head>

//       {/* Common - menu */}
//       <Menu />

//       {/* Page home - Hero section */}
//       <Box
//         tag="main"
//         styleSheet={{
//           flex: 1,
//           paddingTop: theme.space.x20,
//           paddingHorizontal: theme.space.x4,
//           background: `linear-gradient(${theme.colors.primary.x900}, ${theme.colors.primary.x700})`,
//           color: theme.colors.neutral.x000,
//           display: "flex",
//           alignItems: "center",
//           flexDirection: {
//             xs: "column",
//             md: "row",
//           },
//           flexWrap: "nowrap",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <Box
//           styleSheet={{
//             maxWidth: "450px",
//           }}
//         >
//           {/* Title */}
//           <Text tag="h1" variant="display1">
//             Mergulhe em Tecnologia!
//           </Text>

//           {/* Description */}
//           <Text tag="p" variant="body1">
//             Você vai estudar, praticar, discutir e se aprofundar em uma
//             plataforma que respira tecnologia.
//           </Text>

//           {/* CTAText - CTALink */}
//           <Button href="/faq" colorVariant="neutral">
//             Principais dúvidas
//           </Button>
//         </Box>

//         <Image
//           src="https://www.alura.com.br/assets/img/home/homeNova/ilustra-alura-escafandro.1647533643.svg"
//           styleSheet={{
//             maxWidth: {
//               xs: "200px",
//               sm: "initial",
//             },
//             marginVertical: theme.space.x10,
//           }}
//         />
//       </Box>

//       <Footer />
//     </>
//   );
// }

export default PageHoc(HomeScreen);
