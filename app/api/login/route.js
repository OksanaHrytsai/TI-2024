import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000s")
    .sign(key);
}

async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function POST(request) {
  const { email, password } = await request.json();

  // if (email === "user@gmail.com" && password === "password") {

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  // Логіка перевірки (тимчасово використовується фіктивні дані)
  if (email !== "user@gmail.com") {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }

  if (password !== "pas123") {
    return NextResponse.json({ message: "Invalid password" }, { status: 400 });
  }

  // Створення JWT токена
  const user = { email, name: "Модератор" };
  const token = await encrypt({ user });
  const expires = new Date(Date.now() + 100 * 10000); // 100 секунд

  const res = NextResponse.json({ token });
  res.cookies.set("session", token, { expires, httpOnly: true });
  return res;
}
