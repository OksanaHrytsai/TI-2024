import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

import logoImg from "@/public/logo.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Логотип кафедри. Посилання на домашню сторінку"
          />
        </Link>
        <p>Кафедра віртуальної та доповненої реальності</p>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/about">Про кафедру</NavLink>
          </li>
          <li>
            <NavLink href="/news">Новини</NavLink>
          </li>
          <li>
            <NavLink href="/administration">Адміністрація</NavLink>
          </li>
          <li>
            <NavLink href="/science">Наукова робота</NavLink>
          </li>
          <li>
            <NavLink href="/contacts">Контакти</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
