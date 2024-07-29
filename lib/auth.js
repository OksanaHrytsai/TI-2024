// "use server";
import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000s")
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  // let errors = {};
  try {
    const response = await fetch("http:/localhost:3000/api/login/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("status from server...", response.status);
    if (!response.ok) {
      const errorData = await response.json();
      //  errors.email = errorData.message;
      console.log("error from server...", errorData.message);

      // if (Object.keys(errors).length > 0) {
      //   return {
      //     errors,
      //   };
      // }
      throw new Error(errorData.message || "Failed to login");
    }

    const data = await response.json();

    const { token } = data;

    // const user = { email, name: "Lee" };
    const user = await decrypt(token);

    const expires = new Date(Date.now() + 100 * 10000);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, { expires, httpOnly: true });
  } catch (error) {
    console.error("Login error:", error);

    throw new Error("Login failed: " + error.message);
  }
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0), httpOnly: true });
  cookies().set("session", "");
  cookies().delete("session");
  // cookies().set("session", "", { expires: new Date(0), httpOnly: true });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
// export async function isAuth() {
//   const session = getSession();
//   if (!session) return null;
//   if (session?.user?.user?.name === "Модератор") return true;
//   return false;
// }

export async function updateSession(request) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 100 * 10000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
