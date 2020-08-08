import React, { Fragment } from "react";
import logo from "../../img/logo/UrbanLiving-Logo.png";
import NavigationBtn from "./NavigationBtn";
import ShoppingCardBtn from "./ShoppingCardBtn";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
  return (
    <Fragment>
      <nav className="navBar">
        <ShoppingCardBtn></ShoppingCardBtn>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <NavigationBtn></NavigationBtn>
      </nav>
      <NavigationMenu></NavigationMenu>
    </Fragment>
  );
}

export default Navigation;
