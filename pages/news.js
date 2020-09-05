import NewsItem from "./newsItem";
import styles from "../styles/news.module.css";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <NewsItem
        source="aktuality_1"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
      <NewsItem
        source="aktuality_2"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
      <NewsItem
        source="aktuality_3"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
    </div>
  );
}
