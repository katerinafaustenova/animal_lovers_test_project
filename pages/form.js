import styles from "../styles/Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div>
        <label for="email" className={styles.label}>
          Váš e-mail:
        </label>
        <input name="email" type="email" placeholder="@" />
      </div>
      <div>
        <label for="select" className={styles.label}>
          Vaše země:
        </label>
        <select name="select">
          <option value="" disabled selected>
            Vyberte zemi
          </option>
        </select>
      </div>
      <div>
        <button>Chci novinky</button>
      </div>
    </form>
  );
}
