import React from "react";
import styles from "../../User.module.scss";
const Repo = ({ name, html_url }) => {
  return (
    <div className={styles.repo}>
      <a href={html_url}>{name}</a>
    </div>
  );
};

export default Repo;
