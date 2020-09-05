import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src="/logo.svg" className={styles.logo} />
      </div>
      <ul className={styles.ul}>
        <li>
          <a>
            <img src="/home.svg" />
          </a>
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
