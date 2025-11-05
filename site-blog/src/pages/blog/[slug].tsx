import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase()
  );

  return (
    <main className="mt-32">
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
        </article>
      </div>
    </main>
  );
}
