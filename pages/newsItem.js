import styles from "../styles/NewsItem.module.css";

export default function NewsItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <img src={`/${props.source}.png`} />
      </div>
      <div className={styles.text}>
        <a href="#">{props.title}</a>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
