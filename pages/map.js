import styles from "../styles/Map.module.css";

export default function Map() {
  return (
    <div className={styles.map}>
      <h1 className={styles.title}>Zvířata podle světadílu</h1>
      <p className={styles.text}>
        Nunc et lacinia est. Suspendisse porttitor, ante sit amet laoreet omare,
      </p>
      <div className={styles.image}>
        <img src="/map.png" />
      </div>
      <div>
        <img src="/map1.png" />
      </div>
    </div>
  );
}
