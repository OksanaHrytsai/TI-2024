import classes from "./page.module.css";
export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Про кафедру",
  description:
    "Інформація про кафедру віртуальної та доповненої реальності | Національний університет",
};

export default function RootLayout({ children }) {
  return (
    <>
      <h2 className={classes.h2}>Інформація про кафедру</h2>
      {children}
    </>
  );
}
