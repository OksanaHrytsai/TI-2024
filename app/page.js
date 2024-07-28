import Image from "next/image";

import TextHeader from "@/component/textheader/TextHeader";
import MainSection from "@/component/mainsection/MainSection";
import startImg from "@/public/main-picture.png";
import classes from "./page.module.css";

export default function Home() {
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
