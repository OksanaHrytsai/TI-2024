"use client";
import { useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import classes from "./Search.module.css";
export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setPlaceholderVisible(false);
  };

  const handleBlur = () => {
    if (!query) {
      setPlaceholderVisible(true);
    }
  };

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length >= 2) {
      router.push("/searchresults" + "?" + createQueryString("query", query));
    }
  };
  return (
    <>
      <form className={classes.input} onSubmit={handleSubmit}>
        <input
          className={classes.input_field}
          type="text"
          name="usearch"
          id="usearch"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isPlaceholderVisible ? props.content : ""}
        />

        <button
          className={classes.input_button}
          type="submit"
          disabled={props.count === 0}
        >
          Шукати в каталозі кафедри
        </button>
      </form>
    </>
  );
}
