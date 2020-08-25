import React from "react";

function ProductDetails({ product }) {
  return (
    <div classNameName="details-bg">
      <div classNameName="col6">
        <img src={product.imageL} alt="" />
      </div>
      <div classNameName="col6 details-font">
        <div className="detals-name">
          <span>Name:</span> ${product.name}
        </div>
        <div className="details-productNum">
          <span>Product Nr.:</span> ${product.productNumber}
        </div>
        <div className="details-color">
          <span>Color:</span> ${product.color}
        </div>
        <div className="details-description">
          <span>Description:</span> ${product.description}
        </div>
        <div className="details-price">
          Price:<span className="fl-r">€</span>
          <span className="fl-r" id="details-price-num">
            ${product.price}
          </span>
        </div>
        <button className="details-add-btn btn">ADD TO CART</button>
      </div>
      <i id="btn-remove-details" className="far fa-times-circle"></i>
    </div>
  );
}

export default ProductDetails;
