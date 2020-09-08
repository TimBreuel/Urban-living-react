import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../context/products/ProductsContext";

function NavigationMenu() {
  const productsContext = useContext(ProductsContext);
  const {
    filteredProducts,
    clearFilter,
    menuSlideToggle,
    menuSlideToggleFn,
  } = productsContext;
  const onClearFilter = () => {
    clearFilter();
    menuSlideToggleFn(false);
  };

  const onFilterdProducts = (keyword) => {
    filteredProducts(keyword);
    menuSlideToggleFn(false);
  };
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
          <Link to="/" onClick={onClearFilter}>
            Categories
          </Link>
        </li>
        <li id="chairs">
          <Link to="/" onClick={() => onFilterdProducts("chair")}>
            Chairs
          </Link>
        </li>
        <li id="couches">
          <Link to="/" onClick={() => onFilterdProducts("couch")}>
            Couches
          </Link>
        </li>
        <li id="lamps">
          <Link to="/" onClick={() => onFilterdProducts("lamp")}>
            Lamps
          </Link>
        </li>
        <li id="tables">
          <Link to="/" onClick={() => onFilterdProducts("table")}>
            Tables
          </Link>
        </li>
        <li>
          <a href="!#">About UL</a>
        </li>
        <li id="register">
          <Link to="/register" onClick={() => menuSlideToggleFn(false)}>
            Register
          </Link>
        </li>
        <li id="login">
          <Link to="/login" onClick={() => menuSlideToggleFn(false)}>
            Login
          </Link>
        </li>
        <li id="about-us">
          <Link to="/aboutus" onClick={() => menuSlideToggleFn(false)}>
            About Us
          </Link>
        </li>
        <li id="impressum">
          <Link to="/impressum" onClick={() => menuSlideToggleFn(false)}>
            Impressum
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
