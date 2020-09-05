import styles from "../styles/Map.module.css";

export default function Map() {
  return (
    <div>
      <h1 className={styles.nadpis}>Zvířata podle světadílu</h1>
      <p className={styles.text}>
        Nunc et lacinia est. Suspendisse porttitor, ante sit amet laoreet omare,
      </p>
      <img src="/map.png" />
    </div>
  );
}
