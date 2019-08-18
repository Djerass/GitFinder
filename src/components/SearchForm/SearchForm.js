import React, { useState } from "react";
import styles from "./SearchForm.module.scss";

import { connect } from "react-redux";
import { start_search } from "../../store/actions/actions";
import Alert from "../Alert/Alert";

const SearchForm = ({ Search }) => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState({ isActive: false, message: "" });
  const changeValueHandler = e => setValue(e.target.value);
  const closeAlertHandler = () => setAlert({ isActive: false, message: "" });
  const submitHandler = e => {
    e.preventDefault();
    if (value) {
      Search(value);
      setValue("");
      closeAlertHandler();
    } else {
      setAlert({ isActive: true, message: "Enter name for search" });
    }
  };
  return (
    <div className={styles.container}>
      {alert.isActive ? (
        <Alert message={alert.message} closeEvent={closeAlertHandler} />
      ) : null}
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={changeValueHandler}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Search: value => {
      dispatch(start_search(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
