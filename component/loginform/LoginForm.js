import classes from "./LoginForm.module.css";
import { redirect } from "next/navigation";
import { getSession, login } from "@/lib/auth";
import Image from "next/image";
import logoImg from "@/public/logo.svg";
export default async function Page() {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return (
    <section>
      <form
        className={classes.loginform}
        action={async (formData) => {
          "use server";
          try {
            await login(formData);
          } catch (error) {
            console.error("login error", error);
          }
        }}
      >
        <div className={classes.logo}>
          <Image
            src={logoImg}
            alt="Логотип кафедри. Посилання на домашню сторінку"
          />

          <h1>Кафедра віртуальної та доповненої реальності</h1>
        </div>
        <h2>Вхід</h2>
        <h3>Увійти як адміністратор</h3>
        <p>
          <label htmlFor="email">Логін</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" name="password" required />
        </p>

        <button type="submit">Надіслати</button>
      </form>
    </section>
  );
}

// import { useFormState } from "react-dom";
// import { handleLogin } from "@/lib/auth";

// export default function LoginPage() {
//   const [formState, formAction] = useFormState({}, {});
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await handleLogin({ email, password });

//     if (result.errors) {
//       setErrors(result.errors);
//     } else {
//       // Redirect to another page or perform another action
//     }
//   };
//   return (
//     <form className={classes.loginform} onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" />
//         {formState.errors && (
//           <label htmlFor="email" className={classes.error}>
//             {formState.errors["email"]}
//           </label>
//         )}
//       </p>
//       <p>
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" name="password" />
//         {formState.errors && (
//           <label htmlFor="password" className={classes.error}>
//             {formState.errors["password"]}
//           </label>
//         )}
//       </p>
//       <p>
//         <button type="submit">Ввійти</button>
//       </p>
//     </form>
//   );
// }
