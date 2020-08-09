import React, { Fragment } from "react";

function NavigationBtn() {
  let menuTrigger = false;
  let menuCounter = -220;
  const slideMenu = () => {
    const menu = document.querySelector("#menu");
    let interval = setInterval(() => {
      if (menuTrigger === false && menuCounter <= 0) {
        menuCounter++;
        menu.style.left = menuCounter + "px";
      }
      if (menuTrigger === true && menuCounter >= -220) {
        menu.style.left = menuCounter + "px";
        menuCounter--;
      }
      if (menuCounter === 0) {
        menuTrigger = true;
        clearInterval(interval);
      }
      if (menuCounter === -220) {
        menuTrigger = false;
        clearInterval(interval);
      }
    }, 1);
  };
  return (
    <Fragment>
      <div id="navMenu" className="slide-back" onClick={slideMenu}>
        <i className="fas fa-bars slide-back"></i>
      </div>
    </Fragment>
  );
}

export default NavigationBtn;
