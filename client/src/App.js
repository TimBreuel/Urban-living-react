import React from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import ProductsCategory from "./components/products/ProductsCategory";
import ProductsState from "./context/products/ProductsState";

function App() {
  return (
    <ProductsState>
      <Router>
        <div className="App">
          <Navigation></Navigation>

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Products></Products>}
            ></Route>
            <Route
              exact
              path="/products/chairs"
              component={() => (
                <ProductsCategory category="chair"></ProductsCategory>
              )}
            ></Route>
            <Route
              exact
              path="/products/couches"
              component={() => (
                <ProductsCategory category="chouch"></ProductsCategory>
              )}
            ></Route>
            <Route
              exact
              path="/products/lamps"
              component={() => (
                <ProductsCategory category="lamp"></ProductsCategory>
              )}
            ></Route>
            <Route
              exact
              path="/products/tables"
              component={() => (
                <ProductsCategory category="table"></ProductsCategory>
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    </ProductsState>
  );
}

export default App;
