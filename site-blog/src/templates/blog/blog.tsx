import { Search } from "@/src/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components";

export default function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Nam eget ante fermentum, ornare ligula nec, consectetur magna.";

  return (
    <div
      className="
        flex 
        flex-col 
        py-24 
        flex-grow 
        h-full"
    >
      <header>
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

      <PostCard
        title="Transformando seu negócio em uma loja virtual"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia congue est. Etiam sagittis blandit odio a ornare. Aenean vel nunc in diam dignissim auctor sit amet vitae lorem."
        date="05/11/2025"
        image="/assets/study.jpg"
        slug="/transformando"
        author={{
          name: "João Maria",
          avatar: "/avatar1.jpg",
        }}
      />
    </div>
  );
}
