import React, { Fragment, useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductItem({ product }) {
  const [details, setDetails] = useState(false);
  const [success, setSuccess] = useState(false);

  const { imageS, name, price } = product;

  const handleClickDetails = () => {
    setDetails(true);
  };
  const handleClickDetailsBack = () => {
    setDetails(false);
  };

  const handleClickToCart = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };
  return (
    <Fragment>
      {details ? (
        <ProductDetails
          product={product}
          renderBack={handleClickDetailsBack}
        ></ProductDetails>
      ) : null}
      <div className="card">
        <img src={imageS} alt="" className="image-small" />
        <h4 className="article-name">{name}</h4>
        <div className="article-price">
          Price: <span className="article-price-num">{price}</span> €
          <button
            className={
              success ? "btn-card btn-add successAdd" : "btn-card btn-add"
            }
            onClick={handleClickToCart}
          >
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
        <div className="details" onClick={handleClickDetails}>
          <i id="btn-details" className="open-details fas fa-plus"></i>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductItem;
