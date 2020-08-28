import React, { Fragment, useContext } from "react";
import ProductsContext from "../../context/products/ProductsContext";

export default function ShoppingCartItem({ product }) {
  const productsContext = useContext(ProductsContext);
  const { removeArticelFromCart } = productsContext;
  const removeCart = (_id) => {
    removeArticelFromCart(_id);
  };
  return (
    <Fragment>
      <li className="cart-li cart-remove">
        <img className="cart-img" src={product.imageS} alt="" />
        <div className="cart-name-num-container">
          <div className="cart-name">
            {product.name}
            <i
              className="fas fa-times fl-r cart-remove"
              onClick={() => removeCart(product._id)}
            ></i>
          </div>
          <div className="cart-price-cost">
            <i className="fas fa-chevron-left arrow-minus"></i>
            <span className="input-num amount">1</span>
            <i className="fas fa-chevron-right arrow-plus"></i> Price:
            <span className="cart-price">{product.price}</span> €
          </div>
        </div>
      </li>
    </Fragment>
  );
}
