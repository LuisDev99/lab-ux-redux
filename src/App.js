import React, { Component } from "react";
import "./App.css";
import ProjectCodeName from "./components/ProjectCodeName";
import Home from "./components/home"
import { Provider as ReduxProvider } from "react-redux";
import  {Route, Link, BrowserRouter as Router, Switch, withRouters} from "react-router-dom";
import configureStore from "./modules/store";

const reduxStore = configureStore();

const routing = (
  <Router>
    <Link to ="/" >Home</Link> <br></br>
    <Link to="/ProjectCodeName">Click me to see some projects code names</Link>

    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ProjectCodeName" component = {ProjectCodeName}/>
    </Switch>

  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;