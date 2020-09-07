import styles from "../styles/MapItem.module.css";

export default function MapItem(props) {
  const { number, name, x, y } = props;
  return (
    <div className={styles.wrapper} style={{ left: `${x}px`, top: `${y}px` }}>
      <div className={styles.mapItem}>
        <p className={styles.text}>{name}</p>
        <img src={`/map/map${number}.png`} />
      </div>
    </div>
  );
}
