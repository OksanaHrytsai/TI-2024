import UniverInfo from "./UniverInfo";
import Contacts from "../contacts/Contacts";
import Social from "./Social";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <UniverInfo />
      <Social />
      <Contacts className={classes.contacts} />
    </footer>
  );
}
