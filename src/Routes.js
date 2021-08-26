import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";

function Routes() {
  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={"/home"} />
        </Route>
        <Route exact={true} path="/home">
          <HomePage />
        </Route>
        <Route exact={true} path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;