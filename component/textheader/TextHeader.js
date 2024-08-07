import classes from "./TextHeader.module.css";
export default function TextHeader() {
  return (
    <header className={classes.textheader}>
      <h2 className={classes.title}>
        Вітаємо на кафедрі віртуальної та доповненої реальності
      </h2>
      <div className={classes.text_section}>
        <p>
          Ласкаво просимо на сторінку Кафедри віртуальної та доповненої
          реальності!
        </p>
        <p>
          Наша кафедра є передовим центром вивчення та впровадження новітніх
          технологій у галузі віртуальної (VR) та доповненої реальності (AR). Ми
          зосереджуємося на наукових дослідженнях, розробці інноваційних рішень
          та підготовці висококваліфікованих фахівців, які здатні працювати в
          різних секторах економіки, де потрібні сучасні VR/AR технології.
        </p>
      </div>
    </header>
  );
}
