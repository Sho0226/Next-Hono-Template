import { login, signup } from "@/app/auth/login/action";
import styles from "./page.module.css";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {searchParams.error && (
          <div className={styles.error}>
            {searchParams.error}
          </div>
        )}
        <form method="post" className={styles.form}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
            />
          </div>

          <div>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button
              formAction={login}
              className={`${styles.button} ${styles.loginButton}`}
            >
              Log in
            </button>
            <button
              formAction={signup}
              className={`${styles.button} ${styles.signupButton}`}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <a href="/auth/password/form" className={styles.passwordReset}>
        パスワードを忘れた場合
      </a>
    </div>
  );
}
