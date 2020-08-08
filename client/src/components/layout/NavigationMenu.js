import React, { useState } from "react";

function NavigationMenu(props) {
  const [menuTrigger, setMenuTrigger] = useState(false);
  const [menuCounter, setMenuCounter] = useState({ width: -220 });

  const slideMenu = () => {
    const menu = document.querySelector("#menu");
    let interval = setInterval(() => {
      if (menuTrigger === false && menuCounter <= 0) {
        let num = menuCounter++;
        setMenuCounter({ width: num });
        menu.style.left = menuCounter + "px";
      }
      if (menuTrigger === true && menuCounter >= -220) {
        let num = menuCounter--;
        setMenuCounter({ width: num });
        menu.style.left = menuCounter + "px";
      }
      if (menuCounter === 0) {
        setMenuTrigger = true;
        clearInterval(interval);
      }
      if (menuCounter === -220) {
        setMenuTrigger = false;
        clearInterval(interval);
      }
    }, 0.1);
  };
  return (
    <div id="menu" className="slide-back">
      <div className="searchBar" onClick={slideMenu}>
        <i className="fas fa-search search-icon"></i>
      </div>
      <ul>
        <li id="seeAll">
          <a href="!#">Categories</a>
        </li>
        <li id="chairs">
          <a href="!#">Chairs</a>
        </li>
        <li id="couches">
          <a href="!#">Couches</a>
        </li>
        <li id="lamps">
          <a href="!#">Lamps</a>
        </li>
        <li id="tables">
          <a href="!#">Tables</a>
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
