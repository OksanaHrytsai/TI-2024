// import classes from "./page.module.css";
import { getSession } from "@/lib/auth";

import ScienceUser from "@/component/scienceUser/ScienceUser";
import ScienceAdmin from "@/component/scienceAdmin/ScienceAdmin";
export default async function SciencePage() {
  const session = await getSession();

  if (session && session?.user?.user?.name === "Модератор") {
    return (
      <main id="maincontent">
        <ScienceAdmin />{" "}
      </main>
    );
  }
  return (
    <main id="maincontent">
      <ScienceUser />
    </main>
  );
}
