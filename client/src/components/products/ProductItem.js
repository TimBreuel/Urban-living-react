import React, { Fragment, useState, useContext } from "react";
import ProductDetails from "./ProductDetails";
import ProductsContext from "../../context/products/ProductsContext";
import AuthContext from "../../context/auth/AuthContext";

function ProductItem({ product }) {
  //////////////////////
  //USE PRODUCT CONTEXT
  const productsContext = useContext(ProductsContext);
  const { addArticelToCart, setLoading, errorToast } = productsContext;

  ///////////////////
  //USE AUTH CONTEXT
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  ////////////
  //USE STATE
  const [details, setDetails] = useState(false);
  const [success, setSuccess] = useState(false);

  const { imageS, name, price } = product;

  ///////////////////////
  //ON CLICK SEE DETAILS
  const handleClickDetails = () => {
    setDetails(true);
  };
  /////////////////////////
  //ON CLICK CLOSE DETAILS
  const handleClickDetailsBack = () => {
    setDetails(false);
  };

  ///////////////////////
  //ON CLICK ADD TO CART
  const handleClickToCart = (product) => {
    if (user) {
      setLoading(true);
      addArticelToCart(product, user);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } else {
      errorToast("Please log in!");
    }
  };
  return (
    <Fragment>
      {details ? (
        <ProductDetails
          product={product}
          renderBack={handleClickDetailsBack}
          addToCardProp={() => handleClickToCart(product)}
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
            onClick={() => handleClickToCart(product)}
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
