import styles from "../styles/Headline.module.css";

export default function Headline(props) {
  return (
    <div className={styles.headline}>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}
