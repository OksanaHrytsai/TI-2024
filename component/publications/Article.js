"use client";
import classes from "./ArticleList.module.css";
import { useRouter } from "next/navigation";
export default function Article(props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/article/${props.id}`);
  };
  return (
    <li className={classes.article_li}>
      <h4 className={classes.article_title}>{props.title}</h4>
      <p className={classes.article_text}>{props.description}</p>
      <p className={classes.article_word}>Автор</p>
      <p className={classes.article_author}>{props.author}</p>
      <div className={classes.article_button_container}>
        <button className={classes.article_button} onClick={handleClick}>
          Читати наукову розробку
        </button>
      </div>
    </li>
  );
}
