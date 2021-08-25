import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import HomePage from "./HomePage/HomePage";


function Routes() {
  return (
    <div className="container">
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={"/HomePage"} />
        </Route>
        <Route exact={true} path="/home">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;