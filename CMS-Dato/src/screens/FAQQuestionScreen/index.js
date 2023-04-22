import { isHeading } from "datocms-structured-text-utils";
import Head from "next/head";
import { StructuredText, renderNodeRule } from "react-datocms/structured-text";
import { Footer } from "../../components/commons/Footer";
import { Menu } from "../../components/commons/Menu";
import { PageHoc } from "../../components/wrapper/pageHoc";
import CmsProvider from "../../service/cms/cmsContext";
import { cmsService } from "../../service/cms/cmsService";
import { Box, Text, theme } from "../../theme/components";

export async function getStaticPaths() {
  const pathsQuery = `
  query($first: IntType, $skip: IntType) {
    allContentFaqQuestions(first: $first, skip: $skip) {
      id
      title
    }
  }  
  `;

  const { data } = await cmsService({
    query: pathsQuery,
    variables: {
      "first": 100,
      "skip": 0
    }
  });

  const paths = data.allContentFaqQuestions.map((question) => {
    return { params: { id: question.id } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview }) {
  const { id } = params;

  const contentQuery = `
  query($id: ItemId){
    contentFaqQuestion(filter: {id: {eq: $id}}){
      title,
      content {
        value
      }
    }
  }
  `;

  const { data } = await cmsService({
    query: contentQuery,
    isPreviewMode: preview,
    variables: {
      "id": id
    }
  });

  return {
    props: {
      id,
      cmsContent: data,
    },
  };
}

function FAQQuestionScreen({ cmsContent }) {
  return (
    <CmsProvider cmsContent={cmsContent}>
      <Head>
        <title>FAQ - Alura</title>
      </Head>

      <Menu />

      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral.x050,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Box
          styleSheet={{
            flexDirection: "column",
            width: "100%",
            maxWidth: theme.space.xcontainer_lg,
            marginHorizontal: "auto",
          }}
        >
          <Text tag="h1" variant="heading1">
            {cmsContent.contentFaqQuestion.title}
          </Text>

          {/* <Box dangerouslySetInnerHTML={{ __html: content }} /> */}
          {/* <pre>{JSON.stringify(content, null, 4)}</pre> */}

          <StructuredText
            data={cmsContent.contentFaqQuestion.content}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                const tag = `h${node.level}`;
                const variant = `heading${node.level}`;

                return (
                  <Text key={key} tag={tag} variant={variant}>
                    {children}
                  </Text>
                );
              }),
            ]}
          />
        </Box>
      </Box>
      <Footer />
    </CmsProvider>
  );
}

export default PageHoc(FAQQuestionScreen);
