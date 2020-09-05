import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/logo.png" />
      </div>
      <ul className={styles.ul}>
        <li className={styles.active}>
          <img src="/home1.svg" />
        </li>
        <li>
          <a>Lvi</a>
        </li>
        <li>
          <a>Zebry</a>
        </li>
        <li>
          <a>Žirafy</a>
        </li>
        <li>
          <a>Pumy</a>
        </li>
        <li>
          <a>Kohouti</a>
        </li>
      </ul>
    </div>
  );
}
