import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import FontawesomeNavbar from "./components/FontawesomeNavbar/FontawesomeNavbar";
import Index from "./components/Index/Index";
import About from "./components/About/About";
import User from "./components/User/User";

const App = () => {
  return (
    <Router>
      <div className="App">
        <FontawesomeNavbar label="Github Finder" icon="fa-github" />
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/user/:login" exact component={User} />
      </div>
    </Router>
  );
};

export default App;
