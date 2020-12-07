import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/sign-in" component={SignIn} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
