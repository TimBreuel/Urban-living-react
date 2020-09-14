import React from "react";
function ProductDetails({ product, renderBack, addToCardProp }) {
  const handleRemove = () => {
    renderBack();
  };

  // const handleAddToCart = () => {
  //   addToCardProp(product);
  // };
  return (
    <div className="details__bg">
      <div className="details__bg--white">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={product.imageL} alt="" className="details__img" />
          </div>
          <div className="col-lg-6 details-font">
            <div className="detals-name">
              <span>Name:</span>
              {product.name}
            </div>
            <div className="details-productNum">
              <span>Product Nr.:</span> {product.productNumber}
            </div>
            <div className="details-color">
              <span>Color:</span> {product.color}
            </div>
            <div className="details-description">
              <span>Description:</span> {product.description}
            </div>
            <div className="details-price">
              Price:<span className="fl-r"></span>
              <span className="fl-r" id="details-price-num">
                ${product.price}
              </span>
            </div>
            <button
              className="details-add-btn btn"
              onClick={() => addToCardProp(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <i
        id="btn-remove-details"
        className="far fa-times-circle"
        onClick={handleRemove}
      ></i>
    </div>
  );
}

export default ProductDetails;
