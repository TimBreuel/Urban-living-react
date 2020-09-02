import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../context/products/ProductsContext";

function NavigationMenu() {
  const productsContext = useContext(ProductsContext);
  const { filteredProducts, clearFilter, menuSlideToggle } = productsContext;
  return (
    <div
      id="menu"
      className={menuSlideToggle ? "slide-back show" : "slide-back hide"}
    >
      <div className="searchBar">
        <i className="fas fa-search search-icon"></i>
      </div>
      <ul>
        <li id="seeAll">
          <Link to="/" onClick={() => clearFilter()}>
            Categories
          </Link>
        </li>
        <li id="chairs">
          <Link to="/" onClick={() => filteredProducts("chair")}>
            Chairs
          </Link>
        </li>
        <li id="couches">
          <Link to="/" onClick={() => filteredProducts("couch")}>
            Couches
          </Link>
        </li>
        <li id="lamps">
          <Link to="/" onClick={() => filteredProducts("lamp")}>
            Lamps
          </Link>
        </li>
        <li id="tables">
          <Link to="/" onClick={() => filteredProducts("table")}>
            Tables
          </Link>
        </li>
        <li>
          <a href="!#">About UL</a>
        </li>
        <li id="register">
          <Link to="/register">Register</Link>
        </li>
        <li id="login">
          <Link to="/login">Login</Link>
        </li>
        <li id="about-us">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li id="impressum">
          <Link to="/impressum">Impressum</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
