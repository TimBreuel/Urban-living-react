import React, { Fragment } from "react";
import logo from "../../img/logo/UrbanLiving-Logo.png";
import NavigationBtn from "./NavigationBtn";
import ShoppingCardBtn from "./ShoppingCardBtn";
import NavigationMenu from "./NavigationMenu";
import ShoppingCart from "./ShoppingCart";
import Filter from "./Filter";

function Navigation() {
  return (
    <Fragment>
      <nav className="navBar">
        <NavigationBtn></NavigationBtn>
        <Filter></Filter>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ShoppingCardBtn></ShoppingCardBtn>
      </nav>
      <NavigationMenu></NavigationMenu>
      <ShoppingCart></ShoppingCart>
    </Fragment>
  );
}

export default Navigation;
