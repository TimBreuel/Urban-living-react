import React, { Fragment } from "react";

function ProductItem({ product }) {
  const { imageS, name, price, _id } = product;
  const seeDetails = (id) => {
    {
    }
  };
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
      <div className="details">
        <i
          id="btn-details"
          className="open-details fas fa-plus"
          onClick={() => seeDetails(_id)}
        ></i>
      </div>
    </Fragment>
  );
}

export default ProductItem;
