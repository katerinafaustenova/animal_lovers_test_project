import React, { useState, useEffect } from "react";
import SliderControl from "./sliderControl";
import styles from "../styles/Slider.module.css";

export default function Slider() {
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);

  const items = ["1", "2", "3", "4", "5", "6"];

  const imageSize = 214;

  let sliderPosition = position * imageSize;

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  function scrollTo() {
    if (width < 520) {
      return 5;
    } else if (width < 820) {
      return 4;
    } else if (width < 980) {
      return 3;
    } else {
      return 2;
    }
  }

  function handleChangePosition(newPosition) {
    if (newPosition <= scrollTo() && newPosition >= 0) {
      return setPosition(newPosition);
    }
  }

  return (
    <div className={styles.wrapper}>
      <SliderControl
        direction="left"
        disabled={position === 0}
        handleChange={() => handleChangePosition(position - 1)}
      />
      <div className={styles.items}>
        <div className={styles.slider} style={{ left: `-${sliderPosition}px` }}>
          {items.map((item) => {
            return (
              <div className={styles.item} key={item}>
                <img src={`/slider/slider_${item}.png`} />
              </div>
            );
          })}
        </div>
      </div>
      <SliderControl
        direction="right"
        disabled={position === scrollTo()}
        handleChange={() => handleChangePosition(position + 1)}
      />
    </div>
  );
}
