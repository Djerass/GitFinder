import React from "react";
import styles from "../User.module.scss";

const UserMedia = ({ followers, following, public_repos, public_gists }) => {
  return (
    <div className={styles.user_media}>
      <div className={`${styles.box} ${styles.red}`}>Follower: {followers}</div>
      <div className={`${styles.box} ${styles.green}`}>
        Following: {following}
      </div>
      <div className={`${styles.box} ${styles.grey}`}>
        Public repos: {public_repos}
      </div>
      <div className={`${styles.box} ${styles.dark}`}>
        Public gists: {public_gists}
      </div>
    </div>
  );
};

export default UserMedia;
