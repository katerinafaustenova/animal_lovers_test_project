import styles from "../styles/Headline.module.css";

export default function Headline(props) {
  return (
    <div className={styles.headline}>
      <span className={styles.title}>{props.title}</span>
    </div>
  );
}
