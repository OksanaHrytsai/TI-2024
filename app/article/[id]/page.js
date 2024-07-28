"use client";
import { useRouter, useSearchParams } from "next/navigation";
import articles from "@/component/publications/Publications";
export default function ArticlePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const article = articles.find((article, index) => index.toString() === id);

  if (!article) {
    return (
      <>
        {" "}
        <button
          type="button"
          onClick={async () => {
            try {
              router.push("/science");
            } catch (error) {
              console.log("error", error);
            }
          }}
        >
          &larr; До списку публікацій
        </button>
        <p>Стаття не знайдена</p>
      </>
    );
  }
  return (
    <main>
      <button
        type="button"
        onClick={async () => {
          try {
            router.push("/science");
          } catch (error) {
            console.log("error", error);
          }
        }}
      >
        &larr; До списку публікацій
      </button>

      <div>
        <h1>{article.title}</h1>
        <p>
          <strong>Автор:</strong> {article.author}
        </p>
        <p>
          <strong>Анотація:</strong>
          {article.description}
        </p>
      </div>
    </main>
  );
}
