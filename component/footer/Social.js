import Link from "next/link";
import Image from "next/image";
import logoF from "@/public/logo-facebook.svg";
import logoYT from "@/public/logos_youtube-icon.svg";
import logoX from "@/public/x-icon.svg";
import logoIn from "@/public/instagram-icon.svg";
import logoTT from "@/public/tiktok-icon.svg";
import logoT from "@/public/telegram-icon.svg";
import logoL from "@/public/linkedin-icon.svg";

import classes from "./Footer.module.css";
export default function Social() {
  return (
    <div className={classes.social}>
      <Link href="https://www.facebook.com/">
        <Image src={logoF} alt="перейти на фейсбук" />
      </Link>
      <Link href="https://www.youtube.com/">
        <Image src={logoYT} alt="перейти на ютуб" />
      </Link>
      <Link href="https://www.x.com/">
        <Image src={logoX} alt="перейти на ікс" />
      </Link>
      <Link href="https://www.instagram.com/">
        <Image src={logoIn} alt="перейти на інстаграм" />
      </Link>
      <Link href="https://www.tiktok.com/">
        <Image src={logoTT} alt="перейти на тікток" />
      </Link>
      <Link href="https://www.web.telegram.org/">
        <Image src={logoT} alt="перейти на телеграм" />
      </Link>
      <Link href="https://www.linkedin.com/">
        <Image src={logoL} alt="перейти на лінкедін" />
      </Link>
    </div>
  );
}
