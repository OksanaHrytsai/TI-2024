import Image from "next/image";
import locateImg from "@/public/locate.svg";
import emailImg from "@/public/mail-icon.svg";
import phoneImg from "@/public/phone-icon.svg";
export default function Contacts() {
  return (
    <div>
      <p>
        <Image src={locateImg} alt="Адреса" />
        <span> 21000, м. Наукове, вул. Київська 43</span>
      </p>
      <p>
        <Image src={emailImg} alt="Електронна пошта" />
        <span> info@vutd.com.ua</span>
      </p>
      <p>
        <Image src={phoneImg} alt="Телефон" />
        <span> +380 95 123 4567</span>
      </p>
    </div>
  );
}
