import styles from "../styles/Header.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <div className={classNames(styles.header, toggleBurger && styles.expand)}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src="/logo.png"
          alt="logo_heart_animal_lovers"
        />
        <div
          className={styles.burger}
          onClick={() => {
            setToggleBurger(!toggleBurger);
          }}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.active}>
            <a href="#">
              <img src="/home1.svg" />
            </a>
          </li>
          <li>
            <a href="#">Lvi</a>
          </li>
          <li>
            <a href="#">Zebry</a>
          </li>
          <li>
            <a href="#">Žirafy</a>
          </li>
          <li>
            <a href="#">Pumy</a>
          </li>
          <li>
            <a href="#">Kohouti</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
