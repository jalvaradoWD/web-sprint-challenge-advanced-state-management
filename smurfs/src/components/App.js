import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

import AppStyles from "../styles/App.styles";
import MainContentStyles from "../styles/MainContent.styles";

const App = () => {
  return (
    <Router>
      <AppStyles>
        <Navbar />
        <h1>SMURFS! W/Redux</h1>
        <MainContentStyles>
          <Route exact path="/" component={SmurfList} />
          <Route exact path="/smurfForm" component={SmurfForm} />
        </MainContentStyles>
      </AppStyles>
    </Router>
  );
};

export default App;
