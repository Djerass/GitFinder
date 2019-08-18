import React, { Fragment } from "react";
import spinner from "../../Images/spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." />
    </Fragment>
  );
};

export default Spinner;
