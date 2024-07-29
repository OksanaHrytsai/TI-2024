import NavAdmin from "@/component/header/NavAdmin";
import ArticleTable from "./ArticleTable";
import classes from "./ScienceAdmin.module.css";
export default function ScienceAdminPage() {
  return (
    <>
      <NavAdmin />
      <main id="maincontent" className={classes.main}>
        <header>
          <h2 className={classes.h2}>Наукова робота</h2>
          <div className="buttonWraper">
            <button>Створити публікацію</button>
          </div>
        </header>
        <section>
          <ArticleTable />
        </section>
      </main>
    </>
  );
}
