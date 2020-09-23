import React, { Fragment, useContext } from "react";
import logo from "../../img/logo/UrbanLiving-Logo.png";
import NavigationBtn from "./NavigationBtn";
import ShoppingCardBtn from "./ShoppingCardBtn";
import NavigationMenu from "./NavigationMenu";
import ShoppingCart from "./ShoppingCart";
import Filter from "./Filter";
import ProductsContext from "../../context/products/ProductsContext";
import SignInOutBtn from "../register-login/SignInOutBtn";
import { Link } from "react-router-dom";
function Navigation() {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const { loading, clearFilter } = productsContext;

  return (
    <Fragment>
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
      <nav className="navBar">
        <NavigationBtn></NavigationBtn>
        <Filter></Filter>
        <div className="logo">
          <Link to="/" onClick={() => clearFilter()}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <SignInOutBtn></SignInOutBtn>
        <ShoppingCardBtn></ShoppingCardBtn>
      </nav>
      <NavigationMenu></NavigationMenu>
      <ShoppingCart></ShoppingCart>
    </Fragment>
  );
}

export default Navigation;
