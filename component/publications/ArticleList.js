import Article from "./Article";
import classes from "./ArticleList.module.css";
import articles from "./Publications";

export default function ArticleList(props) {
  return (
    <>
      <ul className={classes.articles}>
        {articles.slice(0, props.countArticles).map((article, index) => (
          <Article
            key={article.id}
            id={article.id}
            title={article.title}
            author={article.author}
            description={article.description}
          />
        ))}
      </ul>
    </>
  );
}
