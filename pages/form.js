import classNames from "classnames";
import styles from "../styles/Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.left}>
          <label for="email" className={styles.label}>
            Váš e-mail:
          </label>
        </div>
        <div className={styles.right}>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="@"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <label for="select" className={styles.label}>
            Vaše země:
          </label>
        </div>
        <div className={classNames(styles.right, styles.withArrow)}>
          <select name="select" className={styles.select}>
            <option selected disabled hidden>
              Vyberte zemi
            </option>
          </select>
        </div>
      </div>
      <div className={styles.submit}>
        <button className={styles.button}>Chci novinky</button>
      </div>
    </form>
  );
}
