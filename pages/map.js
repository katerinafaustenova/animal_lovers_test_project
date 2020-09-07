import styles from "../styles/Map.module.css";
import MapItem from "./mapItem";

export default function Map() {
  const items = [
    { number: "1", name: "Ruzovej matlak", x: 100, y: 50 },
    { number: "2", name: "Vlk", x: 160, y: 25 },
    { number: "3", name: "nevim", x: 170, y: 103 },
    { number: "4", name: "Medved", x: 265, y: 10 },
    { number: "5", name: "Lev Africký", x: 420, y: 95 },
    { number: "6", name: "Kobra", x: 550, y: 50 },
    { number: "7", name: "Tygr", x: 630, y: 20 },
    { number: "8", name: "Klokan", x: 790, y: 100 },
  ];

  return (
    <div className={styles.map}>
      <h1 className={styles.title}>Zvířata podle světadílu</h1>
      <p className={styles.text}>
        Nunc et lacinia est. Suspendisse porttitor, ante sit amet laoreet omare,
      </p>
      <div className={styles.scroll}>
        <div className={styles.image}>
          {items.map((item) => {
            const { number, name, x, y } = item;
            return (
              <MapItem key={number} number={number} name={name} x={x} y={y} />
            );
          })}
          <img src="/map/map.png" />
        </div>
      </div>
    </div>
  );
}
