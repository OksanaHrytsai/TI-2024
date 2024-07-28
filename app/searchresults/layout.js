import { redirect } from "next/navigation";
import classes from "./page.module.css";
export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності. Стаття",
  description: "Статття",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
