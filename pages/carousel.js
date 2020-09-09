import React, { useState } from "react";
import ControlItem from "./controlItem";
import styles from "../styles/Carousel.module.css";

export default function Carousel() {
  const [position, setPosition] = useState(1);

  const items = [
    { id: 1, name: "lion" },
    { id: 2, name: "zebra" },
    { id: 3, name: "tiger" },
  ];

  function handleChangePosition(value) {
    setPosition(value);
  }

  return (
    <section className={styles.carousel}>
      <img
        src={`/carousel/carousel_${position}.png`}
        alt={`promítačka - zvíře ${position}`}
      />
      <div className={styles.controls}>
        {items.map((item) => {
          return (
            <ControlItem
              key={item.id}
              id={item.id}
              name={item.name}
              handleChange={handleChangePosition}
              position={position}
            />
          );
        })}
      </div>
    </section>
  );
}
