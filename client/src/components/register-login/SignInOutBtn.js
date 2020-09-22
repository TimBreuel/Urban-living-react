import React, { Fragment, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";
function SignInOutBtn() {
  //AUTH CONTEXT
  const authContext = useContext(AuthContext);
  const { authenticated, signOut, user } = authContext;
  //PRODUCT CONTEXT
  const productContext = useContext(ProductsContext);
  const { setTotal } = productContext;
  //PUSH TO ROUTE
  const history = useHistory();

  const signInAndOut = () => {
    if (authenticated) {
      signOut();
      setTotal();
      history.push("/login");
    }
  };
  useEffect(() => {}, [authenticated, user]);

  return (
    <Fragment>
      {authenticated ? (
        <div className="signInOutBtn" onClick={signInAndOut}>
          <i
            className={
              !authenticated ? "fas fa-sign-in-alt" : "fas fa-sign-out-alt"
            }
          ></i>
        </div>
      ) : (
        <div className="signInOutBtn" onClick={signInAndOut}>
          <Link to="/login">
            <i
              className={
                !authenticated
                  ? "fas fa-sign-in-alt removeLink"
                  : "fas fa-sign-out-alt removeLink"
              }
            ></i>
          </Link>
        </div>
      )}
    </Fragment>
  );
}

export default SignInOutBtn;
