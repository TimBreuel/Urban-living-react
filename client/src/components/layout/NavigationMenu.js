import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <div id="menu" className="slide-back">
      <div className="searchBar">
        <i className="fas fa-search search-icon"></i>
      </div>
      <ul>
        <li id="seeAll">
          <Link to="/">Categories</Link>
        </li>
        <li id="chairs">
          <Link to="/products/chairs">Chairs</Link>
        </li>
        <li id="couches">
          <Link to="/products/couches">Couches</Link>
        </li>
        <li id="lamps">
          <Link to="/products/lamps">Lamps</Link>
        </li>
        <li id="tables">
          <Link to="/products/tables">Tables</Link>
        </li>
        <li>
          <a href="!#">About UL</a>
        </li>
        <li id="register">
          <a href="!#">Register</a>
        </li>
        <li id="login">
          <a href="!#">Login</a>
        </li>
        <li id="about-us">
          <a href="!#">About Us</a>
        </li>
        <li id="impressum">
          <a href="!#">Impressum</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
