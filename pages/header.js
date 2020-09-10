import React, { useState } from "react";
import classNames from "classnames";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [toggleBurger, setToggleBurger] = useState(false);

  const items = ["Lvi", "Zebry", "Žirafy", "Pumy", "Kohouti"];

  return (
    <header
      className={classNames(styles.header, toggleBurger && styles.expand)}
    >
      <div className={styles.wrapper}>
        <img src="/logo.png" alt="logo animal lovers - srdíčko" />
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
              <img src="/home.svg" alt="ikona domů" />
            </a>
          </li>
          {items.map((item) => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
