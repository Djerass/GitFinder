import React from "react";
import { connect } from "react-redux";
import { clear_search } from "../../store/actions/actions";

import styles from "./Users.module.scss";
import UserItem from "./UserItem/UserItem";
import Spinner from "../Spinner/Spinner";

const Users = ({ onClear, users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className={styles.container}>
        {users.length > 0 ? (
          <button onClick={onClear} className={styles.btn_clear}>
            Clear
          </button>
        ) : null}
        <div className={styles.users}>
          {users.map(user => (
            <UserItem
              key={user.login}
              avatar_url={user.avatar_url}
              html_url={user.html_url}
              login={user.login}
            />
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.searchResult,
  loading: state.loading
});

const maoDispatchToProps = dispatch => ({
  onClear: () => dispatch(clear_search())
});

export default connect(
  mapStateToProps,
  maoDispatchToProps
)(Users);
