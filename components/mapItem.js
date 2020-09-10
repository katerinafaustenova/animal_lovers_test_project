import styles from "../styles/MapItem.module.css";

export default function MapItem(props) {
  const { number, name, x, y } = props;
  return (
    <div
      className={styles.itemWrapper}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className={styles.item}>
        <p className={styles.text}>{name}</p>
        <img
          src={`/map/map_${number}.png`}
          alt={`ikona zvířátka ${number} v kruhu`}
        />
      </div>
    </div>
  );
}
