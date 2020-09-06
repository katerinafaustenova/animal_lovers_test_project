import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/logo.png" />
      </div>
      <ul className={styles.ul}>
        <li className={styles.active}>
          <a href="#">
            <img src="/home1.svg" />
          </a>
        </li>
        <li>
          <a href="#">Lvi</a>
        </li>
        <li>
          <a href="#">Zebry</a>
        </li>
        <li>
          <a href="#">Žirafy</a>
        </li>
        <li>
          <a href="#">Pumy</a>
        </li>
        <li>
          <a href="#">Kohouti</a>
        </li>
      </ul>
    </div>
  );
}
