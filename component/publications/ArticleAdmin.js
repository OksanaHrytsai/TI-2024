"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { articles } from "@/component/publications/Publications";
import imgEdit from "@/public/edit-icon.svg";
import imgDelete from "@/public/delete-icon.svg";
import classes from "./ArticleAdmin.module.css";
export default function ArticleAdmin(props) {
  const router = useRouter();
  const id = Number(props.id);
  const article = articles.find((publication) => publication.id == id);

  return (
    <>
      <header>
        <h2>Перегляд публікації</h2>
        <div className={classes.action}>
          <div className={classes.editButton}>
            <button>
              <Image src={imgEdit} alt=" Редагувати статтю" />
            </button>
          </div>
          <div className={classes.deleteButton}>
            <button>
              {/* <button onClick={() => handleDeleteClick(article)}> */}
              <Image src={imgDelete} alt="Видалити статтю" />
            </button>
          </div>
        </div>
      </header>
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
          </div>
        )}
        {!article && <p>Статтю не знайдено</p>}
      </main>
      {article && (
        <div>
          <button>Завантажити увесь текст</button>
        </div>
      )}
    </>
  );
}
