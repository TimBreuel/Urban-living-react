import React from "react";
import "./App.css";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/products/Products";
import ProductsState from "./context/products/ProductsState";
import Impressum from "./components/About-impressum/Impressum";
import AboutUs from "./components/About-impressum/AboutUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/register-login/Register";
import AuthState from "./context/auth/AuthState";
import Login from "./components/register-login/Login";

function App() {
  return (
    <AuthState>
      <ProductsState>
        <Router>
          <div className="App">
            <Navigation></Navigation>
            <ToastContainer autoClose={2500} />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Products></Products>}
              ></Route>
              <Route
                exact
                path="/impressum"
                component={() => <Impressum></Impressum>}
              ></Route>
              <Route
                exact
                path="/aboutus"
                component={() => <AboutUs></AboutUs>}
              ></Route>
              <Route
                exact
                path="/register"
                component={() => <Register></Register>}
              ></Route>
              <Route
                exact
                path="/login"
                component={() => <Login></Login>}
              ></Route>
            </Switch>
          </div>
        </Router>
      </ProductsState>
    </AuthState>
  );
}

export default App;
