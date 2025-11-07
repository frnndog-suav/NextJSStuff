import { Post } from "@/.contentlayer/generated";
import { Avatar } from "@/src/components/avatar";
import { Markdown } from "@/src/components/markdown";
import Image from "next/image";
import Link from "next/link";
import { PostShare } from "./components";

export type TPostPageProps = {
  post: Post;
};

export function PostPage({ post }: TPostPageProps) {
  const publishedDate = new Date(post?.date ?? "").toLocaleDateString("pt-BR");
  const postUrl = "https://site.set/blog/" + post?.slug;

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-12 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/blog">
            <h2 className="text-gray-100 text-action-sm">{"Voltar"}</h2>
          </Link>
          <span>{">"}</span>
          <span className="text-blue-200 text-action-sm">{post?.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                fill
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-8 mt-8 md:mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  size="sm"
                  alt={post?.title ?? ""}
                  src={
                    post?.author.avatar ? `/${post?.author.avatar.trim()}` : ""
                  }
                />

                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={publishedDate}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw ?? ""} />
            </div>
          </article>

          <PostShare
            url={postUrl}
            title={post?.title}
            description={post?.description}
          />
        </div>
      </div>
    </main>
  );
}
