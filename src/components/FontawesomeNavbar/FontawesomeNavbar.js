import React from "react";
import { Link } from "react-router-dom";
import styles from "./FontawesomeNavbar.module.scss";

const FontawesomeNavbar = ({ label, icon }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <i className={`fab ${icon}`}></i>
        <div>{label}</div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FontawesomeNavbar;
