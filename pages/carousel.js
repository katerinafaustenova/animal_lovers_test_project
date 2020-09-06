import styles from "../styles/Carousel.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Carousel() {
  const [position, setPosition] = useState(1);

  return (
    <div className={styles.wrapper}>
      <div>
        <img src={`/slider_${position}.png`} />
      </div>
      <div className={styles.controls}>
        <div
          className={classNames(
            styles.controlItem,
            styles.lion,
            position === 1 && styles.active
          )}
          onClick={() => setPosition(1)}
        />
        <div
          className={classNames(
            styles.controlItem,
            styles.zebra,
            position === 2 && styles.active
          )}
          onClick={() => setPosition(2)}
        />
        <div
          className={classNames(
            styles.controlItem,
            styles.tiger,
            position === 3 && styles.active
          )}
          onClick={() => setPosition(3)}
        />
      </div>
    </div>
  );
}
