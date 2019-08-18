import React from "react";
import styles from "../User.module.scss";
import { Link } from "react-router-dom";

const UserControl = ({ hireable }) => {
  return (
    <div className={styles.control}>
      <Link to="/">Back to search</Link>
      <div>
        Hirable:{" "}
        {hireable ? (
          <i style={{ color: "green" }} className="fas fa-check"></i>
        ) : (
          <i style={{ color: "red" }} className="fas fa-times"></i>
        )}
      </div>
    </div>
  );
};

export default UserControl;
