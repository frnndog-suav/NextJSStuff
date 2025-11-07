import { allPosts } from "@/.contentlayer/generated";
import { PostPage } from "@/src/templates/blog";
import { notFound } from "next/navigation";

type TProps = {
  params: Promise<{
    slug: string; // folder name
  }>;
};

export const revalidate = 60; // revalidate this page every 60 seconds - internal nextjs const

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: TProps) {
  const { slug } = await props.params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PostPage post={post} />;
}
