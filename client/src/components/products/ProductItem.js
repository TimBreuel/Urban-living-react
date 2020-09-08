import React, { Fragment, useState, useContext } from "react";
import ProductDetails from "./ProductDetails";
import ProductsContext from "../../context/products/ProductsContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function ProductItem({ product }) {
  const productsContext = useContext(ProductsContext);
  const { addArticelToCart } = productsContext;
  const [details, setDetails] = useState(false);
  const [success, setSuccess] = useState(false);

  const { imageS, name, price } = product;

  const handleClickDetails = () => {
    setDetails(true);
  };
  const handleClickDetailsBack = () => {
    setDetails(false);
  };

  const handleClickToCart = (product) => {
    setSuccess(true);
    addArticelToCart(product);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };
  return (
    <Fragment>
      <TransitionGroup>
        {details ? (
          <CSSTransition timeout={250} classNames="item">
            <ProductDetails
              product={product}
              renderBack={handleClickDetailsBack}
              addToCardProp={() => handleClickToCart(product)}
            ></ProductDetails>
          </CSSTransition>
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
      </TransitionGroup>
    </Fragment>
  );
}

export default ProductItem;
