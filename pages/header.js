import styles from "../styles/Header.module.css";
import React, { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/logo.png" />
      </div>
      <nav className={classNames(styles.nav, toggleBurger && styles.expand)}>
        <button
          className={styles.burger}
          onClick={() => {
            setToggleBurger(!toggleBurger);
          }}
        />
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
