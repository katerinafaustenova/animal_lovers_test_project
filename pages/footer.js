import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>© 2012 Animal Lovers </div>
        <div>
          <img src="/logo_fg.svg" alt="logo fg forrest" />
        </div>
      </div>
    </footer>
  );
}
