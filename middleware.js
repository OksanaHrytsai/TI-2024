import { NextRequest } from "next/server";
import { updateSession } from "./lib/auth";

export async function middleware(request) {
  return await updateSession(request);
}
