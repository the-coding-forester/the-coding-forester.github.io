import React from "react";
import { Route, Switch } from "react-router-dom"
import Routes from "./Routes";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Routes />
      </Route>
    </Switch>
  )
}

export default App;