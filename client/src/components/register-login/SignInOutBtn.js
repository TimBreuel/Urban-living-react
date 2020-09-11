import React, { Fragment, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function SignInOutBtn() {
  const authContext = useContext(AuthContext);
  const { authenticated, signOut, user } = authContext;
  const signInAndOut = () => {
    if (authenticated) {
      signOut();
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
