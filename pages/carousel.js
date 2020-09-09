import styles from "../styles/Carousel.module.css";
import React, { useState } from "react";
import CarouselItem from "./carouselItem";

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
    <div className={styles.carousel}>
      <img
        src={`/carousel/carousel_${position}.png`}
        alt={`/carousel_${position}.png`}
      />
      <div className={styles.controls}>
        {items.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              id={item.id}
              name={item.name}
              handleChange={handleChangePosition}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
}
