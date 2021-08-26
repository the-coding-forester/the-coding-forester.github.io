import { Route, Router, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

function Routes() {
  return (
    <Router className="container">
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={"/HomePage"} />
        </Route>
        <Route exact={true} path="/home">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;