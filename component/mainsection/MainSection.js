import PostList from "./PostList";
import classes from "./MainSection.module.css";

export default function MainSection({ h2section }) {
  return (
    <section className={classes.mainsection}>
      <h2>{h2section}</h2>
      <PostList />
    </section>
  );
}
