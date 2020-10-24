import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <h1>SMURFS! W/Redux</h1>
      <Route exact path="/" component={SmurfList} />
      <Route exact path="/smurfForm" component={SmurfForm} />
    </Router>
  );
};

export default App;
