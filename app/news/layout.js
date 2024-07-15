import classes from "./page.module.css";
export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Наукова робота кафедри",
  description:
    "Наукова робота кафедри віртуальної та доповненої реальності | Національний університет",
};

export default function RootLayout({ children }) {
  return (
    <>
      <h1 className={classes.h1}>Новини кафедри</h1>
      {children}
    </>
  );
}
