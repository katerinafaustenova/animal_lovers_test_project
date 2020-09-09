import NewsItem from "./newsItem";
import styles from "../styles/news.module.css";

export default function News() {
  return (
    <div className={styles.news}>
      <NewsItem
        source="news_1"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
      <NewsItem
        source="news_2"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
      <NewsItem
        source="news_3"
        title="Lorem ipsum dolor sit amet"
        text="Quisque et purus magna. Sed egestas facilisis fringilla."
      />
    </div>
  );
}
