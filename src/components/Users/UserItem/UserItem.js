import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

const UserItem = ({ avatar_url, html_url, login }) => {
  return (
    <div className={styles.user_item}>
      <img src={avatar_url} alt={login} />
      <div>{login}</div>
      <Link to={`user/${login}`}>More</Link>
    </div>
  );
};

export default UserItem;
