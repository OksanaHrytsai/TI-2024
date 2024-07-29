"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchForm from "@/component/search/SearchForm";
import Article from "@/component/publications/Article";
import { articles } from "@/component/publications/Publications";
import classes from "./page.module.css";
export default function SearchResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const [countQuery, setCountQuery] = useState(0);
  const [countResults, setCountResults] = useState(6);
  const searchResults = articles;

  const [results, setResults] = useState([]);
  useEffect(() => {
    if (query) {
      const matchedResults = searchResults.filter(
        (publication) =>
          publication.title.includes(query) ||
          publication.description.includes(query) ||
          publication.category.includes(query)
      );
      setResults(matchedResults);
      setCountQuery(1);
    }
  }, [query]);

  const loadMoreResults = () => {
    setCountResults((prev) => prev + 6);
  };

  return (
    <main id="maincontent">
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

      <h2 className={classes.h2}>Результати пошуку</h2>
      <p className={classes.result}>
        За пошуковим запитом "<span>{query}</span>" було знайдено{" "}
        <span>{results.length}</span> результат
        {1 < results.length && results.length < 5 && `и`}
        {(results.length == 0 || results.length >= 5) && `ів`}
      </p>

      <SearchForm content={query} count={countQuery} />

      <ul className={classes.articles}>
        {results.slice(0, countResults).map((result, index) => (
          <Article
            title={result.title}
            author={result.author}
            description={result.description}
          />
        ))}
      </ul>
      {countResults < results.length && (
        <button onClick={loadMoreResults}>Завантажити ще</button>
      )}
    </main>
  );
}
