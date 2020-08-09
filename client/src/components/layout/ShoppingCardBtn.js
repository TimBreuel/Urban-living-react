import React, { Fragment } from "react";

function ShoppingCardBtn() {
  let shoppingCardTrigger = false;
  let shoppingCardCounter = -300;
  const shoppingCardContainer = () => {
    const cardContainer = document.querySelector("#shoping-card");
    let interval = setInterval(() => {
      if (shoppingCardTrigger === false && shoppingCardCounter <= 0) {
        shoppingCardCounter++;
        cardContainer.style.right = shoppingCardCounter + "px";
      }
      if (shoppingCardTrigger === true && shoppingCardCounter >= -300) {
        cardContainer.style.right = shoppingCardCounter + "px";
        shoppingCardCounter--;
      }
      if (shoppingCardCounter === 0) {
        shoppingCardTrigger = true;
        clearInterval(interval);
      }
      if (shoppingCardCounter === -300) {
        shoppingCardTrigger = false;
        clearInterval(interval);
      }
    }, 0.1);
  };
  return (
    <Fragment>
      <div
        id="shoppingCart"
        className="slide-back-cart"
        onClick={shoppingCardContainer}
      >
        <i className="fas fa-shopping-cart slide-back-cart"></i>
      </div>
    </Fragment>
  );
}

export default ShoppingCardBtn;
