import classes from "./page.module.css";
export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Контакти кафедри",
  description:
    "Контакти кафедри віртуальної та доповненої реальності | Національний університет",
};

export default function RootLayout({ children }) {
  return (
    <>
      <h2 className={classes.h2}>Контакти кафедри</h2>
      {children}
    </>
  );
}
