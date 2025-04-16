"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    const errorMessages: { [key: string]: string } = {
      "Invalid login credentials":
        "メールアドレスまたはパスワードが間違っています。",
    };
    const errorMessage = errorMessages[error.message] || error.message;
    redirect(`/auth/login?error=${encodeURIComponent(errorMessage)}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    const errorMessages: { [key: string]: string } = {
      "User already registered": "このメールアドレスは既に登録されています。",
    };
    const errorMessage = errorMessages[error.message] || error.message;
    redirect(`/auth/login?error=${encodeURIComponent(errorMessage)}`);
  }

  redirect(`/auth/confirmSignup?email=${encodeURIComponent(data.email)}`);
}
