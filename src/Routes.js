import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DisplayList from "./component/DisplayList";
import DisplayOneList from "./component/DisplayOneList";

import Header from "./component/Header";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayList} />
        <Route exact path="/oneList" component={DisplayOneList} />
      </Switch>
    </Router>
  );
}
