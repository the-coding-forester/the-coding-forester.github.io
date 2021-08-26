import "./App.css";
import { Route, Router, Switch } from "react-router-dom"
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Routes />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;