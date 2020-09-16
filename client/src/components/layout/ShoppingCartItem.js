import React, { Fragment, useContext } from "react";
import ProductsContext from "../../context/products/ProductsContext";
import AuthContext from "../../context/auth/AuthContext";

export default function ShoppingCartItem({ product }) {
  const productsContext = useContext(ProductsContext);
  const { removeArticelFromCart, setLoading } = productsContext;
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const removeCart = (_id) => {
    removeArticelFromCart(_id, user);
    setLoading(true);
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
              onClick={() => removeCart(product)}
            ></i>
          </div>
          <div className="cart-price-cost">
            <i className="fas fa-chevron-left arrow-minus"></i>
            <span className="input-num amount">{product.amount}</span>
            <i className="fas fa-chevron-right arrow-plus"></i> Price:
            <span className="cart-price">{product.price}</span> €
          </div>
        </div>
      </li>
    </Fragment>
  );
}
