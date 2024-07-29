"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles as initialArticles } from "@/component/publications/Publications";
import imgEdit from "@/public/edit-icon.svg";
import imgCancel from "@/public/cancel-icon.svg";
import imgDelete from "@/public/delete-icon.svg";
import classes from "./ArticleTable.module.css";
export default function ArticleTable() {
  const [articles, setArticles] = useState(initialArticles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const handleDeleteClick = (article) => {
    setArticleToDelete(article);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setArticles(articles.filter((a) => a.id !== articleToDelete.id));
    setIsModalOpen(false);
    setArticleToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setArticleToDelete(null);
  };
  return (
    <>
      <div>
        {isModalOpen && (
          <div className={classes.modal}>
            <h3>Видалити публікацію?</h3>
            <p>
              Впевнені, що хочете назавжди видалити публікацію <br /> "
              {articleToDelete.title}"?
            </p>
            <div className={classes.modalButton}>
              <div className={classes.cancelDelete}>
                <button onClick={cancelDelete}>
                  {" "}
                  <Image src={imgCancel} alt="Відхилити видалення" />
                  Відхилити
                </button>
              </div>
              <div className={classes.confirmDelete}>
                <button onClick={confirmDelete}>
                  <Image src={imgDelete} alt="Видалити статтю" />
                  Видалити
                </button>
              </div>
            </div>
          </div>
        )}
        <table className={classes.table}>
          <thead>
            <tr>
              <th>№</th>
              <th>Назва публікації</th>
              <th>Автор</th>
              <th>Категорія</th>
              <th>Дата публікації</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article.id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    href={`/article/${article.id}`}
                    className={classes.link}
                  >
                    {article.title}
                  </Link>
                </td>
                <td>{article.author}</td>
                <td>{article.category}</td>
                <td>{article.date}</td>
                <td className={classes.actions}>
                  <div className={classes.editButton}>
                    <button
                      onClick={() => alert("Редагувати " + article.title)}
                    >
                      <Image src={imgEdit} alt=" Редагувати статтю" />
                    </button>
                  </div>
                  <div className={classes.deleteButton}>
                    <button onClick={() => handleDeleteClick(article)}>
                      <Image src={imgDelete} alt="Видалити статтю" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
