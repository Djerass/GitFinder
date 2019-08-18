import React from "react";
import styles from "./Alert.module.scss";

const Alert = ({ message, closeEvent }) => {
  return (
    <div className={styles.alert}>
      <div>{message}</div>
      <button onClick={closeEvent}>
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default Alert;
