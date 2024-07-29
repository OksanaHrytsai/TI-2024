import { getSession } from "@/lib/auth";
import ArticleUser from "@/component/publications/ArticleUser";
import ArticleAdmin from "@/component/publications/ArticleAdmin";
export default async function ArticlePage({ params }) {
  const id = Number(params.id);
  const session = await getSession();
  if (session && session?.user?.user?.name === "Модератор")
    return <ArticleAdmin id={id} />;
  return <ArticleUser id={id} />;
}
