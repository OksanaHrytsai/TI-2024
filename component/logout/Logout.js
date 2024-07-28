import { redirect } from "next/navigation";
import { getSession, logout } from "@/lib/auth";
export default async function Page() {
  const session = await getSession();
  return (
    <>
      {session && (
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/");
          }}
        >
          <button type="submit">LogOut</button>
        </form>
      )}
    </>
  );
}
