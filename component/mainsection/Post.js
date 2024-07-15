"use client";
import Image from "next/image";
export default function Post(props) {
  return (
    <li>
      <Image src={props.img.src} alt="" width={160} height={100} />
      <h3>{props.h}</h3>
      <p>{props.body}</p>
    </li>
  );
}
