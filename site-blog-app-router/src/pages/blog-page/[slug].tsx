import { allPosts } from "@/.contentlayer/generated";
import { PostPage, TPostPageProps } from "@/src/templates/blog";
import { GetStaticPaths, GetStaticProps } from "next";

type TRouteParams = { slug: string };

export default function Post({ post }: TPostPageProps) {
  return <PostPage post={post} />;
}

export const getStaticPaths = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 5);
  const paths = recentPosts.map((post) => {
    return {
      params: { slug: post.slug } satisfies TRouteParams,
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as TRouteParams;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}) satisfies GetStaticProps;
