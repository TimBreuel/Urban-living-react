import React, { useContext } from "react";
import "./App.css";
import ProductsContext from "../src/context/products/ProductsContext";
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
  const productsContext = useContext(ProductsContext);
  // const { loading } = productsContext;
  const loading = false;
  console.log(productsContext);
  return (
    <AuthState>
      <ProductsState>
        <Router>
          <div className="App">
            <Navigation></Navigation>
            <ToastContainer autoClose={2500} />
            {loading && (
              <div className="spinnerShadow">
                <div
                  className="spinner-border"
                  style={{ width: "4rem", height: "4rem", color: "#4d4954" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

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
