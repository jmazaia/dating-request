import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import App from "./App";
import Congratulations from "./Pages/Congratulations";
import Dashboad from "./Pages/Dashboad";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Dashboad" component={Dashboad} />
        <Route exact path="/Congratulations" component={Congratulations} />>
      </Switch>
    </Router>
  );
}

export default Routes;
