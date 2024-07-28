import classes from "./ContactForm.module.css";
export async function ContactForm() {
  return (
    <>
      <form name="form" className={classes.uform} autoComplete="off">
        <div className={classes.udata}>
          <p>
            <label htmlFor="uname">Ваше імʼя</label>
            <input
              type="text"
              name="uname"
              id="uname"
              placeholder="Ім’я Прізвище"
              required
            />
          </p>
          <p>
            <label htmlFor="uemail">Ваша ел. пошта або телефон</label>
            <input
              type="email"
              name="uemail"
              id="uemail"
              placeholder="prizvische@vutd.com.ua"
              required
            />
          </p>
        </div>
        <div className={classes.utext}>
          <p>
            <label htmlFor="utext">Повідомлення</label>
            <textarea name="utext" id="utext" placeholder="Текст" rows="5" />
          </p>

          <button type="submit">Надіслати</button>
        </div>
      </form>
    </>
  );
}
