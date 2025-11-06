import { allPosts } from "@/.contentlayer/generated";
import BlogList, { TBlogListProps } from "@/src/templates/blog/blog";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: TBlogListProps) {
  return <BlogList posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<TBlogListProps>;
