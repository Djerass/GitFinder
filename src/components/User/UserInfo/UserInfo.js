import React from "react";
import styles from "../User.module.scss";

const UserInfo = ({
  avatar_url,
  login,
  name,
  company,
  bio,
  location,
  blog,
  html_url
}) => {
  return (
    <div className={styles.user_info}>
      <div className={styles.left}>
        <img src={avatar_url} alt={login} />
        <h3>{name}</h3>
        <div>Location: {location}</div>
      </div>
      <div className={styles.right}>
        <h4>Bio</h4>
        <p>{bio}</p>
        <a href={html_url}>Visit GitHub Profile</a>
        <div>Username: {login}</div>
        <div>Company: {company}</div>
        <div>Website: {blog}</div>
      </div>
    </div>
  );
};

export default UserInfo;
