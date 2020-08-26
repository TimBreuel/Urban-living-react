import React, { Fragment, useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductItem({ product }) {
  const [details, setDetails] = useState(false);

  const { imageS, name, price } = product;

  const handleClickDetails = () => {
    setDetails(true);
  };
  const handleClickDetailsBack = () => {
    setDetails(false);
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
          <button className="btn-card btn-add" onClick={handleClickDetails}>
            <i className="fas fa-cart-plus btn-success btn-add"></i>
          </button>
        </div>
      </div>
      <div className="details">
        <i id="btn-details" className="open-details fas fa-plus"></i>
      </div>
    </Fragment>
  );
}

export default ProductItem;
