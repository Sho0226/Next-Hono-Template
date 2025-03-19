import { forgotPassword } from "./action";
import styles from "./page.module.css";

function forgotPasswordPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>パスワードをリセット</h2>
        <p className={styles.text}>
          パスワードをリセットするためのリンクを送信します。
        </p>
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
          <button
            formAction={forgotPassword}
            className={`${styles.button} ${styles.submitButton}`}
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
}

export default forgotPasswordPage;
