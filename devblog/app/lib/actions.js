"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    email === "admin@example.com" &&
    password === "123456"
  ) {
    const cookieStore = await cookies();

    cookieStore.set("isLoggedIn", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    redirect("/admin");
  }

  return {
    error: "Invalid email or password",
  };
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("isLoggedIn");

  redirect("/login");
}