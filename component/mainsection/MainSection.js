import PostList from "./PostList";
import classes from "./MainSection.module.css";

export default function MainSection({ h3section }) {
  return (
    <section className={classes.mainsection}>
      <h3>{h3section}</h3>
      <PostList />
    </section>
  );
}
