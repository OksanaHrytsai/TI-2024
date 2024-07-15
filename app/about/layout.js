import classes from "./page.module.css";
export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Про кафедру",
  description:
    "Інформація про кафедру віртуальної та доповненої реальності | Національний університет",
};

export default function RootLayout({ children }) {
  return (
    <>
      <h1 className={classes.h1}>Інформація про кафедру</h1>
      {children}
    </>
  );
}
