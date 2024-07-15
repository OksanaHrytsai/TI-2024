import UniverInfo from "./UniverInfo";
import Contacts from "../contacts/contacts";
import Social from "./social";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <UniverInfo />
      <Social />
      <Contacts className={classes.contacts} />
    </footer>
  );
}
