import { allPosts } from "@/.contentlayer/generated";
import { Search } from "@/src/components/search";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";
import { PostCard, PostGrid } from "./components";

export default function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Nam eget ante fermentum, ornare ligula nec, consectetur magna.";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : allPosts;
  const hasPosts = posts.length > 0;

  return (
    <div
      className="
        flex 
        flex-col 
        py-24 
        flex-grow 
        h-full"
    >
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 px-4 md:px-0">
            <span
              className="
              text-body-tag 
              text-cyan-100 
              w-fit 
              rounded-md 
              text-center 
              md:text-left 
              py-2 
              px-4 
              bg-cyan-300"
            >
              Blog
            </span>
            <h1
              className="
              text-balance 
              text-start 
              md:text-left 
              text-heading-lg 
              md:text-heading-xl max-w-2xl text-gray-100"
            >
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {hasPosts && (
        <PostGrid>
          {posts.map((post) => {
            return (
              <PostCard
                key={post._id}
                title={post.title}
                description={post.description}
                date={new Date(post.date).toLocaleDateString("pt-BR")}
                image={post.image}
                slug={post.slug}
                author={{
                  name: post.author.name,
                  avatar: post.author.avatar,
                }}
              />
            );
          })}
        </PostGrid>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div
            className="
            container 
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-8 
            border-dashed 
            border-2 
            border-gray-300 
            p-8 
            md:p-12 
            rounded-lg"
          >
            <Inbox className="h-12 w-12 text-cyan-100" />

            <p className="text-gray-100 text-center">nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  );
}
