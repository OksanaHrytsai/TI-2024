import PostList from "./PostList";
export default function MainSection({ h2section }) {
  return (
    <section>
      <h2>{h2section}</h2>
      <PostList />
    </section>
  );
}
