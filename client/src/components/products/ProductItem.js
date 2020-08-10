import React, { Fragment } from "react";

function ProductItem({ product }) {
  const { imageS, name, price } = product;
  return (
    <Fragment>
      <div className="card">
        <img src={imageS} alt="" className="image-small" />
        <h4 className="article-name">{name}</h4>
        <div className="article-price">
          Price: <span className="article-price-num">{price}</span> €
          <button className="btn-card btn-add">
            <i className="fas fa-cart-plus btn-success btn-add"></i>
          </button>
        </div>
      </div>
      <div class="details">
        <i id="btn-details" class="open-details fas fa-plus"></i>
      </div>
    </Fragment>
  );
}

export default ProductItem;
