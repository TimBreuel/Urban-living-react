import React, { Fragment } from "react";

function NavigationMenu() {
  return (
    <div id="menu" className="slide-back">
      <div className="searchBar">
        <i className="fas fa-search search-icon"></i>
      </div>
      <ul>
        <li id="seeAll">
          <a href="#">Categories</a>
        </li>
        <li id="chairs">
          <a href="#">Chairs</a>
        </li>
        <li id="couches">
          <a href="#">Couches</a>
        </li>
        <li id="lamps">
          <a href="#">Lamps</a>
        </li>
        <li id="tables">
          <a href="#">Tables</a>
        </li>
        <li>
          <a href="#">About UL</a>
        </li>
        <li id="register">
          <a href="#">Register</a>
        </li>
        <li id="login">
          <a href="#">Login</a>
        </li>
        <li id="about-us">
          <a href="#">About Us</a>
        </li>
        <li id="impressum">
          <a href="#">Impressum</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
