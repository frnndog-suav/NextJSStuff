import { useRouter } from "next/router";

export default function PostsSlugPage() {
  const router = useRouter();

  return <div>Teste Posts page {router.query.slug}</div>;
}
