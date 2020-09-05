import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.text}>© 2012 Animal Lovers </div>
        <div className={styles.logo}>
          <img src="/fg-logo.svg" alt="fg Logo" />
        </div>
      </div>
    </footer>
  );
}
