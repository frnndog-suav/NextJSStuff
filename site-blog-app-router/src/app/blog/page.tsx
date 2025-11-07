import { allPosts } from "@/.contentlayer/generated";
import BlogList from "@/src/templates/blog/blog";

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
