import React from "react";
import Route from "react-router-dom/Route"
import Router from "react-router-dom/Router"
import Switch from "react-router-dom/Switch"
import Routes from "./Routes"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Routes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;