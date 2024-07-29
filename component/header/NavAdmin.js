import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import Logout from "@/component/logout/Logout";
import logoImg from "@/public/logo.svg";
import classes from "./NavAdmin.module.css";

export default function NavAdmin() {
  return (
    <nav className={classes.navSide}>
      <ul>
        <li>
          <div className={classes.logo}>
            <Link href="/">
              <Image
                src={logoImg}
                alt="Логотип кафедри. Посилання на домашню сторінку"
              />
            </Link>
            <h1 className={classes.h1}>
              Кафедра віртуальної та доповненої реальності
            </h1>
          </div>
        </li>
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
        <li className={classes.logout}>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}
