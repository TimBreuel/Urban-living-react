import React, { Fragment, useState } from "react";
import ProductDetails from "./ProductDetails";

function ProductItem({ product }) {
  const [details, setDetails] = useState(false);
  const { imageS, name, price } = product;
  const handleClickDetails = () => {
    console.log("CLICK DETAILS");
    setDetails(true);
  };
  return (
    <Fragment>
      {details ? <ProductDetails product={product}></ProductDetails> : null}
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
        <i id="btn-details" className="open-details fas fa-plus">
          TEST
        </i>
      </div>
    </Fragment>
  );
}

export default ProductItem;
