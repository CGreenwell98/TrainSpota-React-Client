import Nav from "./nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Home from "./Home";
import MapComponent from "./map/MapComponent";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/map" && <Nav />}
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
