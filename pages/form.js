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
        <div className={styles.right}>
          <select className={styles.input}>
            <option
              name="select"
              selected
              disabled
              hidden
              style={{
                paddingLeft: "12px",
                color: "red",
                // color: "#9c9a9a",
                fontSize: "13px",
              }}
            >
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
