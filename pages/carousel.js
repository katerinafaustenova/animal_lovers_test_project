import styles from "../styles/Carousel.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Carousel() {
  const [position, setPosition] = useState(1);
  console.log(position);

  const pole = [{}];
  return (
    <div className={styles.wrapper}>
      <button onClick={() => setPosition(position - 1)}>Zpět</button>
      <div className={styles.nvm}>
        <div
          className={classNames(
            styles.carousel,

            position === 2 && styles.second,
            position === 3 && styles.third
          )}
        >
          <div className={styles.item}>
            <img src="/1.png" />
          </div>
          <div className={styles.item}>
            <img src="/2.png" />
          </div>
          <div className={styles.item}>
            <img src="/3.png" />
          </div>
          <div className={styles.item}>
            <img src="/4.png" />
          </div>
          <div className={styles.item}>
            <img src="/5.png" />
          </div>
          <div className={styles.item}>
            <img src="/6.png" />
          </div>
        </div>
      </div>
      <button onClick={() => setPosition(position + 1)}>Dopředu</button>
    </div>
  );
}
