import Link from "next/link";
import Image from "next/image";
import logoF from "@/public/logo-facebook.svg";
import logoYT from "@/public/youtube-icon.svg";
import logoX from "@/public/x-icon.svg";
import logoIn from "@/public/instagram-icon.svg";
import logoTT from "@/public/tiktok-icon.svg";
import logoT from "@/public/telegram-icon.svg";
import logoL from "@/public/linkedin-icon.svg";
import classes from "./footer.module.css";
export default function Social() {
  return (
    <p className={classes.social}>
      <Link href="https://www.facebook.com/">
        <Image src={logoF} />
      </Link>
      <Link href="https://www.youtube.com/">
        <Image src={logoYT} />
      </Link>
      <Link href="https://www.x.com/">
        <Image src={logoX} />
      </Link>
      <Link href="https://www.instagram.com/">
        <Image src={logoIn} />
      </Link>
      <Link href="https://www.tiktok.com/">
        <Image src={logoTT} />
      </Link>
      <Link href="https://www.web.telegram.org/">
        <Image src={logoT} />
      </Link>
      <Link href="https://www.linkedin.com/">
        <Image src={logoL} />
      </Link>
    </p>
  );
}
