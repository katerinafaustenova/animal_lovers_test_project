import React, { useState } from "react";
import classNames from "classnames";
import styles from "../styles/Slider.module.css";

export default function Slider() {
  const [position, setPosition] = useState(1);

  return (
    <div className={styles.slider}>
      <div
        className={classNames(styles.arrowWrapper, styles.rightMargin)}
        onClick={() => setPosition(position - 1)}
      >
        <input type="image" src="/slider/leftArrow.svg" alt="šipka vlevo" />
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
            <img
              src="/slider/slider_1.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
          <div className={styles.item}>
            <img
              src="/slider/slider_2.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
          <div className={styles.item}>
            <img
              src="/slider/slider_3.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
          <div className={styles.item}>
            <img
              src="/slider/slider_4.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
          <div className={styles.item}>
            <img
              src="/slider/slider_5.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
          <div className={styles.item}>
            <img
              src="/slider/slider_6.png"
              alt="slider obrázek - kategorie zvířat"
            />
          </div>
        </div>
      </div>
      <div
        className={classNames(styles.arrowWrapper, styles.leftMargin)}
        onClick={() => setPosition(position + 1)}
      >
        <input type="image" src="/slider/rightArrow.svg" alt="šipka vpravo" />
      </div>
    </div>
  );
}
