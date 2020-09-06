import styles from "../styles/Slider.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Slider() {
  const [position, setPosition] = useState(1);

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.arrowWrapper, styles.rightMargin)}
        onClick={() => setPosition(position - 1)}
      >
        <input type="image" src="/leftArrow.svg" alt="leftArrow" />
      </div>
      <div className={styles.items}>
        <div
          className={classNames(
            styles.viewSlides,

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
      <div
        className={classNames(styles.arrowWrapper, styles.leftMargin)}
        onClick={() => setPosition(position + 1)}
      >
        <input type="image" src="/rightArrow.svg" alt="rightArrow" />
      </div>
    </div>
  );
}
