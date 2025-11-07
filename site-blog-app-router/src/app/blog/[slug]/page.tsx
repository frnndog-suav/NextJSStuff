import { allPosts } from "@/.contentlayer/generated";
import { PostPage } from "@/src/templates/blog";
import { notFound } from "next/navigation";

type TProps = {
  params: Promise<{
    slug: string; // folder name
  }>;
};

export default async function BlogPostPage(props: TProps) {
  const { slug } = await props.params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
