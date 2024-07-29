import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";

import { getSession } from "@/lib/auth";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export const metadata = {
  title: "Кафедра віртуальної та доповненої реальності",
  description:
    "Кафедра віртуальної та доповненої реальності | Національний університет",
};

export default async function RootLayout({ children }) {
  const session = await getSession();

  if (session && session?.user?.user?.name === "Модератор") {
    console.log("User", session?.user?.user?.name);
    return (
      <html lang="uk">
        <body>{children}</body>
      </html>
    );
  }
  console.log("UserN", session?.user?.user?.name);
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
//   if (session) {
//     const userRole = session?.user?.name;

//     console.log("Sesion:", session);
//     if (userRole == "Модератор") {
//       console.log("Sesion:", session);
//       return (
//         <html lang="uk">
//           <body>
//             <Link href="#maincontent" className="skipmain">
//               Перейти до головного
//             </Link>

//             {children}
//           </body>
//         </html>
//       );
//     }
//   } else {
//     console.log("Sesion:", session);
//     return (
//       <html lang="uk">
//         <body>
//           <Link href="#maincontent" className="skipmain">
//             Перейти до головного
//           </Link>

//           <Header />
//           {children}
//           <Footer />
//         </body>
//       </html>
//     );
//   }
// }
