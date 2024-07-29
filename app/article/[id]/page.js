"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pdficon from "@/public/pdf-icon.svg";
import { articles } from "@/component/publications/Publications";

import classes from "./page.module.css";
export default function ArticlePage({ params }) {
  const router = useRouter();
  const id = Number(params.id);
  const article = articles.find((publication) => publication.id == id);

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

      {article && (
        <div className={classes.container}>
          <article className={classes.article_content}>
            <h1>{article.title}</h1>
            <p>
              <strong>Автор:</strong> {article.author}
            </p>
            <p>
              <strong>Анотація:</strong>
              {article.description}
            </p>
          </article>
          <aside className={classes.aside}>
            <button>
              {" "}
              <Image src={pdficon} alt="Завантажити PDF" /> PDF (Українська)
            </button>
            <p>Категорія: {article.category}</p>
            <p>Дата публікації: {article.data}</p>
          </aside>
        </div>
      )}
      {!article && <p>Статтю не знайдено</p>}
    </main>
  );
}
