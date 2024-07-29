import { redirect } from "next/navigation";
import classes from "./page.module.css";
import { getSession } from "@/lib/auth";
import NavAdmin from "@/component/header/NavAdmin";

export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Стаття",
  description: "Статття",
};

export default async function RootLayout({ children }) {
  const session = await getSession();

  if (session && session?.user?.user?.name === "Модератор") {
    return (
      <>
        <NavAdmin />
        <div className={classes.content}>{children}</div>
      </>
    );
  }
  return <>{children}</>;
}
