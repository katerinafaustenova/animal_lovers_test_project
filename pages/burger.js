import styles from "../styles/Burger.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Burger() {
  const [toggleBurger, setToggleBurger] = useState(false);

  console.log(toggleBurger);

  return (
    <nav className={styles.nav}>
      <button
        className={classNames(styles.burger, toggleBurger && styles.expand)}
        onClick={() => {
          setToggleBurger(!toggleBurger);
        }}
      >
        Burger
      </button>
      <ul className={styles.list}>
        <li className={styles.listItem}>jedna</li>
        <li className={styles.listItem}>dva</li>
        <li className={styles.listItem}>tri</li>
        <li className={styles.listItem}>ctyri</li>
      </ul>
    </nav>
  );
}
