import styles from "../styles/Aktuality.module.css";

export default function Aktuality() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <img src="/aktuality_1.png" />
        </div>
        <div className={styles.text}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Quisque et purus magna. Sed egestas facilisis fringilla.</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/aktuality_1.png" />
        </div>
        <div className={styles.text}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Quisque et purus magna. Sed egestas facilisis fringilla.</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/aktuality_1.png" />
        </div>
        <div className={styles.text}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Quisque et purus magna. Sed egestas facilisis fringilla.</p>
        </div>
      </div>
    </div>
  );
}
