import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Home from "./homepage/Home";
import MapComponent from "./map/MapComponent";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/sign-in" component={SignIn} />
          <Route path="/map" component={MapComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
