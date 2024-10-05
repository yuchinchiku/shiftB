import React from "react";
import nav from "./data/nav";

import styles from './cssModule/header.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        { nav.map((elem) => {
          return (
            <li className={styles.navList__item} key={elem.id}>
              <a className={styles.navList__link} href={`${elem.href}`}>{elem.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);


export default Header;