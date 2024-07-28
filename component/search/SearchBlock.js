import classes from "./Search.module.css";
import SearchForm from "./SearchForm";
export default function SearchPublication() {
  return (
    <>
      <h3 className={classes.h3}> Каталог наукових розробок </h3>
      <SearchForm content={"Введіть назву або ключове слово"} count={1} />
    </>
  );
}
