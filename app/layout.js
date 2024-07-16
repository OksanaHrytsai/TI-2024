import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності",
  description:
    "Кафедра віртуальної та доповненої реальності | Національний університет",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Link href="#maincontent" className='skipmain'>Перейти до головного</Link>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
