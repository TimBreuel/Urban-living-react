import React from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import ProductsState from "./context/products/ProductsState";
import ProductsCategory from "./components/products/ProductsCategory";

function App() {
  return (
    <ProductsState>
      <Router>
        <div className="App">
          <Navigation></Navigation>

          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route
              exact
              path="/products/chairs"
              component={ProductsCategory}
              category="chairs"
            ></Route>
            <Route exact path="/products/couches" component="couches"></Route>
            <Route exact path="/products/lamps" component="lamps"></Route>
            <Route exact path="/products/tables" component="tables"></Route>
          </Switch>
        </div>
      </Router>
    </ProductsState>
  );
}

export default App;
