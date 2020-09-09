import styles from "../styles/NewsItem.module.css";

export default function NewsItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <img src={`/news/${props.source}.png`} />
      </div>
      <div className={styles.data}>
        <a href="#" className={styles.title}>
          {props.title}
        </a>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}
