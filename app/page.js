import Image from "next/image";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import TextHeader from "@/component/textheader/TextHeader";
import MainSection from "@/component/mainsection/MainSection";
import startImg from "@/public/main-picture.png";
import classes from "./page.module.css";
import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();

  if (session && session?.user?.user?.name === "Модератор") {
    return (
      <>
        <Header />

        <main id="maincontent">
          <header className={classes.mainheader}>
            <TextHeader />
            <Image src={startImg} alt="" />
          </header>
          <MainSection h3section={"Кафедральне життя"} />
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <main id="maincontent">
        <header className={classes.mainheader}>
          <TextHeader />
          <Image src={startImg} alt="" />
        </header>
        <MainSection h3section={"Кафедральне життя"} />
      </main>
    </>
  );
}
