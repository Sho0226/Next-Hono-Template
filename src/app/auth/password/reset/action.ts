"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Logout } from "../../logout/action";

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();
  const data = {
    newPassword: formData.get("newPassword") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  if (data.newPassword !== data.confirmPassword) {
    throw new Error("パスワードが一致しません。");
  }

  // 認証セッションの確認
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  if (sessionError || !sessionData.session) {
    throw new Error("認証セッションが存在しません。ログインしてください。");
  }

  const { error } = await supabase.auth.updateUser({
    password: data.newPassword,
  });

  if (error) {
    if (error.code === "same_password") {
      throw new Error(
        "新しいパスワードは古いパスワードと異なる必要があります。"
      );
    }
    throw error;
  }
  Logout();
  redirect("/");
}
