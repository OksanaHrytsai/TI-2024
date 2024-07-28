"use client";
import Image from "next/image";
import classes from "./PostList.module.css";
export default function Post(props) {
  return (
    <li className={classes.post}>
      <Image src={props.img.src} alt="" width={100} height={100} />
      <h4 className={classes.post_title}>{props.h}</h4>
      <p className={classes.post_text}>{props.body}</p>
    </li>
  );
}
