import React, { Fragment } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Users from "../Users/Users";

const Index = () => {
  return (
    <Fragment>
      <SearchForm />
      <Users />
    </Fragment>
  );
};

export default Index;
