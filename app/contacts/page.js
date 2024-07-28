import { ContactForm } from "@/component/contactform/ContactForm";
import classes from "./page.module.css";
export default function ContactsPage() {
  return (
    <main id="maincontent" className={classes.maincontainer}>
      <section className={classes.contacts}>
        <header>
          <h2 className={classes.h2}>Контакти</h2>
        </header>
        <h3 className={classes.h3}>Адреса:</h3>
        <p className={classes.contact_text}>
          Національний університет технологій та дизайну <br />
          21000, м. Наукове, вул. Київська, 43
        </p>

        <h3 className={classes.h3}>Телефон:</h3>
        <p className={classes.contact_text}>+380 95 123 4567</p>

        <h3 className={classes.h3}> Електронна адреса:</h3>
        <p className={classes.contact_text}>info@vutd.com.ua</p>
      </section>

      <section className={classes.feadback}>
        <header>
          <h2 className={classes.h2}>Зворотний зв’язок</h2>
        </header>
        <p className={classes.contact_text}>
          Ви можете зв’язатися з нами або поставити нам запитання, скориставшись
          розташованою нижче формою.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
