"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeaderImg from "@/public/science_man.png";
import ArticleList from "@/component/publications/ArticleList";
import SearchBlock from "@/component/search/SearchBlock";
import classes from "./page.module.css";
import articlesSize from "@/component/publications/PublicationSize";

export default function SciencePage() {
  const [countArticles, setCountArticles] = useState(6);
  const loadMoreArticles = () => {
    setCountArticles((prev) => prev + 6);
  };
  const articlesLength = articlesSize;
  return (
    <main id="maincontent">
      <div className={classes.backcolor}>
        <header className={classes.textheader}>
          <div className={classes.description_section}>
            <h2 className={classes.title}>
              {" "}
              Наукова робота на кафедрі віртуальної та доповненої реальності
            </h2>
            <p className={classes.main_text}>
              На кафедрі віртуальної та доповненої реальності активно
              проводяться наукові дослідження, спрямовані на розвиток та
              впровадження інноваційних VR/AR технологій. Наші дослідники
              працюють над створенням нових методик і інструментів, що
              покращують користувацький досвід та розширюють можливості
              застосування віртуальної і доповненої реальності в різних галузях.
              Важливою частиною наукової роботи є співпраця з міжнародними
              науковими спільнотами та участь у грантових програмах і
              конференціях, що дозволяє обмінюватися знаннями та передовими
              практиками з колегами з усього світу.
            </p>
          </div>
          <div className={classes.img}>
            <Image
              src={HeaderImg}
              alt="Головна сторінка - чоловік який досліджує світ через VR-окуляри"
            />
          </div>
        </header>
        <SearchBlock />
      </div>
      <div className={classes.body_container}>
        <h2 className={classes.title_body}>Усі публікації кафедри </h2>
        <ArticleList countArticles={countArticles} />
        <div className={classes.button_container}>
          <button
            className={classes.button_more}
            onClick={loadMoreArticles}
            disabled={countArticles >= articlesLength}
          >
            Завантажити ще
          </button>
        </div>
      </div>
    </main>
  );
}
