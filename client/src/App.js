import React from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component="Home"></Route>
          <Route exact path="/products/chairs" component="chair"></Route>
          <Route exact path="/products/couches" component="couches"></Route>
          <Route exact path="/products/lamps" component="lamps"></Route>
          <Route exact path="/products/tables" component="tables"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
