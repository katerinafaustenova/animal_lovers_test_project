import styles from "../styles/Form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.left}>
          <label for="email">Váš e-mail:</label>
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
          <label for="text">Vaše země:</label>
        </div>
        <div className={styles.right}>
          <input
            className={styles.input}
            type="text"
            name="text"
            placeholder="Vyberte zemi"
          ></input>
        </div>
      </div>
      <div className={styles.submit}>
        <button className={styles.button}>Chci novinky</button>
      </div>
    </form>
  );
}
